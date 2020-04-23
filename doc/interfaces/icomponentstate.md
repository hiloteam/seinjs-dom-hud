[seinjs-dom-hud](../README.md) > [IComponentState](../interfaces/icomponentstate.md)

# Interface: IComponentState

`DomHUDComponent`的初始化参数类型。

## Hierarchy

 `ISceneComponentState`

**↳ IComponentState**

↳  [IComponentState](_seinjs_.domhud.icomponentstate.md)

## Index

### Properties

* [autoLink](icomponentstate.md#autolink)
* [autoLinkX](icomponentstate.md#autolinkx)
* [autoLinkY](icomponentstate.md#autolinky)
* [autoMount](icomponentstate.md#automount)
* [dom](icomponentstate.md#dom)
* [updateZ](icomponentstate.md#updatez)

---

## Properties

<a id="autolink"></a>

### `<Optional>` autoLink

**● autoLink**: *`boolean`*

*Defined in Component.ts:30*

初始化的时候HUD是否要自动链接到Actor的根组件。

*__default__*: false

___
<a id="autolinkx"></a>

### `<Optional>` autoLinkX

**● autoLinkX**: *`number`*

*Defined in Component.ts:34*

若在初始化的时候自动连接，设置自动连接的横向偏移（像素）。

___
<a id="autolinky"></a>

### `<Optional>` autoLinkY

**● autoLinkY**: *`number`*

*Defined in Component.ts:38*

若在初始化的时候自动连接，设置自动连接的纵向偏移（像素）。

___
<a id="automount"></a>

### `<Optional>` autoMount

**● autoMount**: *`boolean`*

*Defined in Component.ts:24*

dom是否在初始化的时候自动挂载到容器上。

*__default__*: true

___
<a id="dom"></a>

### `<Optional>` dom

**● dom**: *`HTMLElement`*

*Defined in Component.ts:18*

用于HUD的dom对象，原则上必填。

___
<a id="updatez"></a>

### `<Optional>` updateZ

**● updateZ**: *`boolean`*

*Defined in Component.ts:44*

是否要在每次同步时根据链接到的组件的位置自动计算dom的`zIndex`。

*__default__*: true

___

