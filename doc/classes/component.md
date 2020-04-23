[seinjs-dom-hud](../README.md) > [Component](../classes/component.md)

# Class: Component

基于DOM的HUD类，可以直接挂载到Actor上为其下组件（默认为根组件）添加一个绑定的HUD。 详细使用可以见官网的**HUD**的引导

*__template__*: IStateTypes 可进行初始化参数扩展。

*__template__*: IEvents 可扩展事件类型。

## Type parameters
#### IStateTypes :  [IComponentState](../interfaces/icomponentstate.md)
#### IEvents 
## Hierarchy

 `SceneComponent`<`IStateTypes`>

**↳ Component**

↳  [Component](_seinjs_.domhud.component.md)

## Implements

* `ISceneComponent`<`ISceneComponentState`>

## Index

### Properties

* [isDomHUDComponent](component.md#isdomhudcomponent)
* [offsetX](component.md#offsetx)
* [offsetY](component.md#offsety)
* [CONTAINERS](component.md#containers)

### Accessors

* [dom](component.md#dom)
* [event](component.md#event)
* [linkedActor](component.md#linkedactor)
* [linkedComponent](component.md#linkedcomponent)

### Methods

* [linkToComponent](component.md#linktocomponent)
* [onAdd](component.md#onadd)
* [onDestroy](component.md#ondestroy)
* [onInit](component.md#oninit)
* [onUpdate](component.md#onupdate)
* [syncToComponent](component.md#synctocomponent)
* [unLinkComponent](component.md#unlinkcomponent)
* [GET_CONTAINER](component.md#get_container)
* [INIT](component.md#init)

---

## Properties

<a id="isdomhudcomponent"></a>

###  isDomHUDComponent

**● isDomHUDComponent**: *`boolean`* = true

*Defined in Component.ts:115*

___
<a id="offsetx"></a>

###  offsetX

**● offsetX**: *`number`* = 0

*Defined in Component.ts:119*

相对于绑定的组件的横向偏移量（像素）。

___
<a id="offsety"></a>

###  offsetY

**● offsetY**: *`number`* = 0

*Defined in Component.ts:123*

相对于绑定的组件的纵向偏移量（像素）。

___
<a id="containers"></a>

### `<Static>` CONTAINERS

**● CONTAINERS**: *`object`*

*Defined in Component.ts:64*

存储DOM顶层容器对象，原则上一个`Game`一个容器。 一般不需要自行调用。

#### Type declaration

[gameId: `number`]: `HTMLDivElement`

___

## Accessors

<a id="dom"></a>

###  dom

**get dom**(): `HTMLElement`

*Defined in Component.ts:169*

当前对应的DOM实例引用。

**Returns:** `HTMLElement`

___
<a id="event"></a>

###  event

**get event**(): `EventManager`<`IEvents` & `object`> & `IEvents`

*Overrides Component.event*

*Defined in Component.ts:162*

AnimatorComponent的事件管理器。

```ts
Sein.EventManager<IEvents & {
 PickStart: {component: Component, event: Sein.ITouchEvent \| Sein.IMouseEvent};
 PickEnd: {component: Component, event: Sein.ITouchEvent \| Sein.IMouseEvent};
 Destroy: never;
}> & IEvents
```

**Returns:** `EventManager`<`IEvents` & `object`> & `IEvents`

___
<a id="linkedactor"></a>

###  linkedActor

**get linkedActor**(): `SceneActor`<`ISceneComponentState`, `SceneComponent`<`ISceneComponentState`>>

*Defined in Component.ts:147*

获取当前链接到的组件的父级Actor实例引用。

**Returns:** `SceneActor`<`ISceneComponentState`, `SceneComponent`<`ISceneComponentState`>>

___
<a id="linkedcomponent"></a>

###  linkedComponent

**get linkedComponent**(): `SceneComponent`<`ISceneComponentState`>

*Defined in Component.ts:140*

获取当前链接到的Component实例引用。

**Returns:** `SceneComponent`<`ISceneComponentState`>

___

## Methods

<a id="linktocomponent"></a>

###  linkToComponent

▸ **linkToComponent**(component: *`SceneComponent`*, offsetX?: *`number`*, offsetY?: *`number`*): `void`

*Defined in Component.ts:214*

链接到一个指定的组件，链接后会在每一帧不断跟随其位置，性能开销较大。

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| component | `SceneComponent` | - |
| `Default value` offsetX | `number` | 0 |
| `Default value` offsetY | `number` | 0 |

**Returns:** `void`

___
<a id="onadd"></a>

###  onAdd

▸ **onAdd**(initState: *`IStateTypes`*): `void`

*Overrides Component.onAdd*

*Defined in Component.ts:197*

添加到世界，继承请先`super.onAdd()`。

**Parameters:**

| Name | Type |
| ------ | ------ |
| initState | `IStateTypes` |

**Returns:** `void`

___
<a id="ondestroy"></a>

###  onDestroy

▸ **onDestroy**(): `void`

*Overrides SceneComponent.onDestroy*

*Defined in Component.ts:317*

销毁，继承请先`super.onUpdate()`。

**Returns:** `void`

___
<a id="oninit"></a>

###  onInit

▸ **onInit**(initState: *`IStateTypes`*): `void`

*Overrides SceneComponent.onInit*

*Defined in Component.ts:176*

初始化，继承请先`super.onInit()`。

**Parameters:**

| Name | Type |
| ------ | ------ |
| initState | `IStateTypes` |

**Returns:** `void`

___
<a id="onupdate"></a>

###  onUpdate

▸ **onUpdate**(): `void`

*Overrides Component.onUpdate*

*Defined in Component.ts:306*

每一帧更新，继承请先`super.onUpdate()`。

**Returns:** `void`

___
<a id="synctocomponent"></a>

###  syncToComponent

▸ **syncToComponent**(component: *`SceneComponent`*, offsetX?: *`number`*, offsetY?: *`number`*): `void`

*Defined in Component.ts:225*

同步到一个指定的组件，仅仅同步一次，不会跟随。

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| component | `SceneComponent` | - |
| `Default value` offsetX | `number` | 0 |
| `Default value` offsetY | `number` | 0 |

**Returns:** `void`

___
<a id="unlinkcomponent"></a>

###  unLinkComponent

▸ **unLinkComponent**(): `void`

*Defined in Component.ts:283*

解除和当前组件的链接。

**Returns:** `void`

___
<a id="get_container"></a>

### `<Static>` GET_CONTAINER

▸ **GET_CONTAINER**(game: *`Game`*): `HTMLDivElement`

*Defined in Component.ts:70*

获取一个`game`实例对应的DOM顶层容器对象。 一般不需要自行调用。

**Parameters:**

| Name | Type |
| ------ | ------ |
| game | `Game` |

**Returns:** `HTMLDivElement`

___
<a id="init"></a>

### `<Static>` INIT

▸ **INIT**(game: *`Game`*, className?: *`string`*, container?: *`HTMLDivElement`*): `void`

*Defined in Component.ts:77*

为一个`game`实例对应的DOM顶层容器对象。

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| game | `Game` | - |
| `Default value` className | `string` | &quot;&quot; |
| `Default value` container | `HTMLDivElement` |  document.createElement(&#x27;div&#x27;) |

**Returns:** `void`

___

