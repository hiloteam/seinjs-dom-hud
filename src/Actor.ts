/**
 * @File   : Actor.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 10/30/2018, 11:06:01 PM
 * @Description:
 */
import * as Sein from 'seinjs';
import Component, {IComponentState} from './Component';

/**
 * DomHUD.Component的一个容器封装，但添加了一些特别的功能使其可以追踪其他Actor。
 * 
 * @template IStateTypes 可进行初始化参数扩展。
 * @template IEvents 可扩展事件类型。
 * @noInheritDoc
 */
@Sein.SClass({className: 'DomHUDActor'})
export default class Actor<
  IStateTypes extends IComponentState = IComponentState,
  IEvents = {}
> extends Sein.SceneActor<
  IComponentState,
  Component<IStateTypes, IEvents>
> {
  public static GET_CONTAINER = Component.GET_CONTAINER;
  public static INIT = Component.INIT;
  public isDomHUDActor = true;

  protected _linkedActor: Sein.SceneActor;
  protected _linkedComponent: Sein.SceneComponent;

  /**
   * 根级DomHUD.Component组件。
   */
  get root(): Component<IStateTypes, IEvents> {
    return this._root as Component<IStateTypes, IEvents>;
  }

  /**
   * 获取当前链接到的Actor实例引用。
   */
  get linkedActor() {
    return this._linkedActor;
  }

  /**
   * 获取当前链接到的Component实例引用或者链接到的Actor的根组件实例引用。
   */
  get linkedComponent() {
    return this._linkedComponent || this._linkedActor.root;
  }

  /**
   * 当前对应的DOM实例引用。
   */
  get dom() {
    return this._root.dom;
  }

  /**
   * 设置相对于绑定的Actor的横向偏移量（像素）。
   */
  set offsetX(value: number) {
    this._root.offsetX = value;
  }

  /**
   * 获取相对于绑定的Actor的横向偏移量（像素）。
   */
  get offsetX() {
    return this._root.offsetX;
  }

  /**
   * 设置相对于绑定的Actor的纵向偏移量（像素）。
   */
  set offsetY(value: number) {
    this._root.offsetY = value;
  }

  /**
   * 获取相对于绑定的Actor的纵向偏移量（像素）。
   */
  get offsetY() {
    return this._root.offsetY;
  }

  /**
   * 创建根组件。
   */
  public onCreateRoot(initState: IStateTypes) {
    return this.addComponent<Component<IStateTypes, IEvents>>('root', Component, initState);
  }

  /**
   * 链接到一个特定的Actor，链接后会在每一帧不断跟随其位置，性能开销较大。
   */
  public linkToActor(actor: Sein.SceneActor, offsetX: number = 0, offsetY: number = 0) {
    this._linkedActor = actor;

    this._root.linkToComponent(actor.root, offsetX, offsetY);
  }

  /**
   * 同步到一个特定的Actor，仅仅同步一次，不会跟随。
   */
  public syncToActor(actor: Sein.SceneActor, offsetX: number = 0, offsetY: number = 0) {
    this._root.syncToComponent(actor.root, offsetX, offsetY);
  }

  /**
   * 链接到一个指定的组件，链接后会在每一帧不断跟随其位置，性能开销较大。
   */
  public linkToComponent(component: Sein.SceneComponent, offsetX: number = 0, offsetY: number = 0) {
    this._linkedComponent = component;

    this._root.linkToComponent(component, offsetX, offsetY);
  }

  /**
   * 同步到一个指定的组件，仅仅同步一次，不会跟随。
   */
  public syncToComponent(component: Sein.SceneComponent, offsetX: number = 0, offsetY: number = 0) {
    this._root.syncToComponent(component, offsetX, offsetY);
  }

  /**
   * 解除和当前组件的链接。
   */
  public unLinkComponent() {
    this._root.unLinkComponent();
  }
}
