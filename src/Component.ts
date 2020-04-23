/**
 * @File   : Component.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 10/30/2018, 10:58:44 PM
 * @Description:
 */
import * as Sein from 'seinjs';

/**
 * `DomHUDComponent`的初始化参数类型。
 * 
 * @noInheritDoc
 */
export interface IComponentState extends Sein.ISceneComponentState {
  /**
   * 用于HUD的dom对象，原则上必填。
   */
  dom?: HTMLElement;
  /**
   * dom是否在初始化的时候自动挂载到容器上。
   * 
   * @default true
   */
  autoMount?: boolean;
  /**
   * 初始化的时候HUD是否要自动链接到Actor的根组件。
   * 
   * @default false
   */
  autoLink?: boolean;
  /**
   * 若在初始化的时候自动连接，设置自动连接的横向偏移（像素）。
   */
  autoLinkX?: number;
  /**
   * 若在初始化的时候自动连接，设置自动连接的纵向偏移（像素）。
   */
  autoLinkY?: number;
  /**
   * 是否要在每次同步时根据链接到的组件的位置自动计算dom的`zIndex`。
   * 
   * @default true
   */
  updateZ?: boolean;
}

/**
 * 基于DOM的HUD类，可以直接挂载到Actor上为其下组件（默认为根组件）添加一个绑定的HUD。
 * 详细使用可以见官网的**HUD**的引导
 * 
 * @template IStateTypes 可进行初始化参数扩展。
 * @template IEvents 可扩展事件类型。
 * @noInheritDoc
 */
@Sein.SClass({className: 'DomHUDComponent'})
export default class Component<
  IStateTypes extends IComponentState = IComponentState,
  IEvents = {}
> extends Sein.SceneComponent<IStateTypes> {
  /**
   * 存储DOM顶层容器对象，原则上一个`Game`一个容器。
   * 一般不需要自行调用。
   */
  public static CONTAINERS: {[gameId: number]: HTMLDivElement} = {};

  /**
   * 获取一个`game`实例对应的DOM顶层容器对象。
   * 一般不需要自行调用。
   */
  public static GET_CONTAINER(game: Sein.Game) {
    return Component.CONTAINERS[game.uuid];
  };

  /**
   * 为一个`game`实例对应的DOM顶层容器对象。
   */
  public static INIT(
    game: Sein.Game,
    className: string = '',
    container: HTMLDivElement = document.createElement('div')
  ) {
    const {canvas} = game;
    className = `seinjs-dom-based-hud-container ${className}`;

    if (Component.CONTAINERS[game.uuid]) {
      return;
    }

    Component.CONTAINERS[game.uuid] = container;
    container.className = className;

    // if (!canvas.parentElement.style.position) {
    //   canvas.parentElement.style.position = 'relative';
    // }

    const resize = () => {
      const {width, height} = game.bound;
      const {offsetLeft, offsetTop} = game.canvas;
      container.style.width = `${width}px`;
      container.style.height = `${height}px`;
      container.style.left = `${offsetLeft}px`;
      container.style.top = `${offsetTop}px`;
    };

    container.style.position = 'absolute';
    container.style.zIndex = `${parseInt(canvas.style.zIndex, 10) || 0 + 1}`;
    container.style.pointerEvents = 'none';
    container.style.overflow = 'hidden';
    game.event.add('Resize', resize);
    resize();

    canvas.parentNode.insertBefore(container, canvas.nextSibling);
  }

  public isDomHUDComponent = true;
  /**
   * 相对于绑定的组件的横向偏移量（像素）。
   */
  public offsetX = 0;
  /**
   * 相对于绑定的组件的纵向偏移量（像素）。
   */
  public offsetY = 0;

  protected _dom: HTMLElement;
  protected _autoMount: boolean;
  protected _container: HTMLDivElement;
  protected _linkedComponent: Sein.SceneComponent;
  protected _prePosition: Sein.Vector3;
  protected _preDomSize: {w: number, h: number};
  protected _event: Sein.EventManager<IEvents & {
    PickStart: {component: Component, event: Sein.ITouchEvent | Sein.IMouseEvent};
    PickEnd: {component: Component, event: Sein.ITouchEvent | Sein.IMouseEvent};
    Destroy: never;
  }> & IEvents;

  /**
   * 获取当前链接到的Component实例引用。
   */
  get linkedComponent() {
    return this._linkedComponent;
  }

  /**
   * 获取当前链接到的组件的父级Actor实例引用。
   */
  get linkedActor() {
    return this._linkedComponent.getOwner<Sein.SceneActor>();
  }

  /**
   * AnimatorComponent的事件管理器。
   * 
   * ```ts
   * Sein.EventManager<IEvents & {
   *  PickStart: {component: Component, event: Sein.ITouchEvent | Sein.IMouseEvent};
   *  PickEnd: {component: Component, event: Sein.ITouchEvent | Sein.IMouseEvent};
   *  Destroy: never;
   * }> & IEvents
   * ```
   */
  get event() {
    return this._event;
  }

  /**
   * 当前对应的DOM实例引用。
   */
  get dom() {
    return this._dom;
  }

  /**
   * 初始化，继承请先`super.onInit()`。
   */
  public onInit(initState: IStateTypes) {
    super.onInit(initState);

    const {dom, autoMount} = initState;
    this._dom = dom || document.createElement('div');
    this._autoMount = autoMount === false ? false : true;
    this._prePosition = new Sein.Vector3(NaN, NaN, NaN);

    if (window.ontouchstart) {
      dom.addEventListener('touchstart', this.handleTouchStart);
      dom.addEventListener('touchend', this.handleTouchEnd);
    } else {
      dom.addEventListener('mousedown', this.handleMouseDown);
      dom.addEventListener('mouseup', this.handleMouseUp);
    }

    this._event.register('PickStart');
    this._event.register('PickEnd');
    this._event.register('Destroy');
  }

  /**
   * 添加到世界，继承请先`super.onAdd()`。
   */
  public onAdd(initState: IStateTypes) {
    Component.INIT(this.getGame());
    this._container = Component.CONTAINERS[this.getGame().uuid];

    if (this._autoMount) {
      this._container.appendChild(this._dom);
    }

    if (initState.autoLink) {
      this.linkToComponent(this, initState.autoLinkX || 0, initState.autoLinkY || 0);
    }
  }

  /**
   * 链接到一个指定的组件，链接后会在每一帧不断跟随其位置，性能开销较大。
   */
  public linkToComponent(component: Sein.SceneComponent, offsetX: number = 0, offsetY: number = 0) {
    this._linkedComponent = component;
    this.offsetX = offsetX;
    this.offsetY = offsetY;

    this.syncToComponent(component, offsetX, offsetY);
  }

  /**
   * 同步到一个指定的组件，仅仅同步一次，不会跟随。
   */
  public syncToComponent(component: Sein.SceneComponent, offsetX: number = 0, offsetY: number = 0) {
    this._dom.style.position = 'absolute';
    // screen space (-1, -1)
    this._dom.style.left = '0px';
    this._dom.style.top = '0px';
    this._preDomSize = {w: 0, h: 0};

    setTimeout(
      () => {
        this._dom.style.visibility = this.inViewport(component) ? 'visible' : 'hidden';
        this.doSyncToComponent(component, offsetX, offsetY);
      },
      0
    );
  }

  protected doSyncToComponent(component: Sein.SceneComponent, offsetX: number = 0, offsetY: number = 0) {
    const preVisible = this._dom.style.visibility !== 'hidden';
    if (!this.visible || !this.getOwner<Sein.SceneActor>().visible) {
      if (preVisible) {
        this._dom.style.visibility = 'hidden';
      }
      return;
    }

    const {ndcPosition} = component;

    if (!ndcPosition) {
      return;
    }

    const {offsetWidth: width, offsetHeight: height} = this._dom;
    const {w, h} = this._preDomSize;

    if (this._prePosition.equals(ndcPosition) && Math.abs(width - w) < 1 && Math.abs(height - h) < 1) {
      return;
    }

    this._preDomSize.w = width;
    this._preDomSize.h = height;

    const {x, y, z} = ndcPosition;

    if (!this.inViewport(component)) {
      if (preVisible) {
        this._dom.style.visibility = 'hidden';
      }
      return;
    }

    const {screenWidth: cWidth, screenHeight: cHeight} = this.getGame();
    if (!preVisible) {
      this._dom.style.visibility = 'visible';
    }

    const left = (cWidth * (x + 1) - width) / 2 + offsetX;
    const top = (cHeight * (1 - y)) / 2 - height + offsetY;

    this._dom.style.transform = `translate(${left}px, ${top}px)`;

    if (this._initState.updateZ !== false) {
      this._dom.style.zIndex = `${parseInt(this._container.style.zIndex, 10) + ~~(10000 * (1 - z))}`;
    }

    this._prePosition.copy(ndcPosition);
  }

  protected inViewport(component: Sein.SceneComponent) {
    const {x, y, z} = component.ndcPosition;

    return !(x < -1 || x > 1 || y < -1 || y > 1 || z < -1 || z > 1);
  }

  /**
   * 解除和当前组件的链接。
   */
  public unLinkComponent() {
    this._linkedComponent = null;
  }

  protected handleTouchStart = (event: TouchEvent) => {
    this._event.trigger('PickStart', {component: this, event});
  }

  protected handleTouchEnd = (event: TouchEvent) => {
    this._event.trigger('PickEnd', {component: this, event});
  }

  protected handleMouseDown = (event: MouseEvent) => {
    this._event.trigger('PickStart', {component: this, event});
  }

  protected handleMouseUp = (event: MouseEvent) => {
    this._event.trigger('PickEnd', {component: this, event});
  }

  /**
   * 每一帧更新，继承请先`super.onUpdate()`。
   */
  public onUpdate() {
    if (!this._linkedComponent) {
      return;
    }

    this.doSyncToComponent(this._linkedComponent, this.offsetX, this.offsetY);
  }

  /**
   * 销毁，继承请先`super.onUpdate()`。
   */
  public onDestroy() {
    const dom = this._dom;

    if (window.ontouchstart) {
      dom.removeEventListener('touchstart', this.handleTouchStart);
      dom.removeEventListener('touchend', this.handleTouchEnd);
    } else {
      dom.removeEventListener('mousedown', this.handleMouseDown);
      dom.removeEventListener('mouseup', this.handleMouseUp);
    }

    if (this._autoMount && this._container.contains(dom)) {
      this._container.removeChild(dom);
    }

    this._event.trigger('Destroy', null, true);
  }
}
