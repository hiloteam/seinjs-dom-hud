[seinjs-dom-hud](../README.md) > ["seinjs"](../modules/_seinjs_.md) > [DomHUD](../modules/_seinjs_.domhud.md) > [IComponentState](../interfaces/_seinjs_.domhud.icomponentstate.md)

# Interface: IComponentState

## Hierarchy

↳  [IComponentState](icomponentstate.md)

**↳ IComponentState**

## Index

### Properties

* [autoLink](_seinjs_.domhud.icomponentstate.md#autolink)
* [autoLinkX](_seinjs_.domhud.icomponentstate.md#autolinkx)
* [autoLinkY](_seinjs_.domhud.icomponentstate.md#autolinky)
* [autoMount](_seinjs_.domhud.icomponentstate.md#automount)
* [dom](_seinjs_.domhud.icomponentstate.md#dom)
* [matrix](_seinjs_.domhud.icomponentstate.md#matrix)
* [pivot](_seinjs_.domhud.icomponentstate.md#pivot)
* [position](_seinjs_.domhud.icomponentstate.md#position)
* [quaternion](_seinjs_.domhud.icomponentstate.md#quaternion)
* [rotation](_seinjs_.domhud.icomponentstate.md#rotation)
* [scale](_seinjs_.domhud.icomponentstate.md#scale)
* [updateZ](_seinjs_.domhud.icomponentstate.md#updatez)
* [visible](_seinjs_.domhud.icomponentstate.md#visible)

---

## Properties

<a id="autolink"></a>

### `<Optional>` autoLink

**● autoLink**: *`boolean`*

*Inherited from [IComponentState](icomponentstate.md).[autoLink](icomponentstate.md#autolink)*

*Defined in Component.ts:30*

初始化的时候HUD是否要自动链接到Actor的根组件。

*__default__*: false

___
<a id="autolinkx"></a>

### `<Optional>` autoLinkX

**● autoLinkX**: *`number`*

*Inherited from [IComponentState](icomponentstate.md).[autoLinkX](icomponentstate.md#autolinkx)*

*Defined in Component.ts:34*

若在初始化的时候自动连接，设置自动连接的横向偏移（像素）。

___
<a id="autolinky"></a>

### `<Optional>` autoLinkY

**● autoLinkY**: *`number`*

*Inherited from [IComponentState](icomponentstate.md).[autoLinkY](icomponentstate.md#autolinky)*

*Defined in Component.ts:38*

若在初始化的时候自动连接，设置自动连接的纵向偏移（像素）。

___
<a id="automount"></a>

### `<Optional>` autoMount

**● autoMount**: *`boolean`*

*Inherited from [IComponentState](icomponentstate.md).[autoMount](icomponentstate.md#automount)*

*Defined in Component.ts:24*

dom是否在初始化的时候自动挂载到容器上。

*__default__*: true

___
<a id="dom"></a>

### `<Optional>` dom

**● dom**: *`HTMLElement`*

*Inherited from [IComponentState](icomponentstate.md).[dom](icomponentstate.md#dom)*

*Defined in Component.ts:18*

用于HUD的dom对象，原则上必填。

___
<a id="matrix"></a>

### `<Optional>` matrix

**● matrix**: *`Matrix4`*

*Inherited from ISceneComponentState.matrix*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4053*

初始本地矩阵数据。

___
<a id="pivot"></a>

### `<Optional>` pivot

**● pivot**: *`Vector3`*

*Inherited from ISceneComponentState.pivot*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4045*

初始锚点数据。

___
<a id="position"></a>

### `<Optional>` position

**● position**: *`Vector3`*

*Inherited from ISceneComponentState.position*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4033*

初始位置数据。

___
<a id="quaternion"></a>

### `<Optional>` quaternion

**● quaternion**: *`Quaternion`*

*Inherited from ISceneComponentState.quaternion*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4049*

初始四元数数据。

___
<a id="rotation"></a>

### `<Optional>` rotation

**● rotation**: *`Vector3`*

*Inherited from ISceneComponentState.rotation*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4037*

初始旋转数据。

___
<a id="scale"></a>

### `<Optional>` scale

**● scale**: *`Vector3`*

*Inherited from ISceneComponentState.scale*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4041*

初始缩放数据。

___
<a id="updatez"></a>

### `<Optional>` updateZ

**● updateZ**: *`boolean`*

*Inherited from [IComponentState](icomponentstate.md).[updateZ](icomponentstate.md#updatez)*

*Defined in Component.ts:44*

是否要在每次同步时根据链接到的组件的位置自动计算dom的`zIndex`。

*__default__*: true

___
<a id="visible"></a>

### `<Optional>` visible

**● visible**: *`boolean`*

*Inherited from ISceneComponentState.visible*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4057*

初始是否可见。

___

