[seinjs-dom-hud](../README.md) > [Actor](../classes/actor.md)

# Class: Actor

DomHUD.Component的一个容器封装，但添加了一些特别的功能使其可以追踪其他Actor。

*__template__*: IStateTypes 可进行初始化参数扩展。

*__template__*: IEvents 可扩展事件类型。

## Type parameters
#### IStateTypes :  [IComponentState](../interfaces/icomponentstate.md)
#### IEvents 
## Hierarchy

 `SceneActor`<[IComponentState](../interfaces/icomponentstate.md), [Component](component.md)<`IStateTypes`, `IEvents`>>

**↳ Actor**

↳  [Actor](_seinjs_.domhud.actor.md)

## Implements

* `ISceneActor`<[IComponentState](../interfaces/icomponentstate.md), [Component](component.md)<`IStateTypes`, `IEvents`>>

## Index

### Properties

* [isDomHUDActor](actor.md#isdomhudactor)
* [GET_CONTAINER](actor.md#get_container)
* [INIT](actor.md#init)

### Accessors

* [dom](actor.md#dom)
* [linkedActor](actor.md#linkedactor)
* [linkedComponent](actor.md#linkedcomponent)
* [offsetX](actor.md#offsetx)
* [offsetY](actor.md#offsety)
* [root](actor.md#root)

### Methods

* [linkToActor](actor.md#linktoactor)
* [linkToComponent](actor.md#linktocomponent)
* [onCreateRoot](actor.md#oncreateroot)
* [syncToActor](actor.md#synctoactor)
* [syncToComponent](actor.md#synctocomponent)
* [unLinkComponent](actor.md#unlinkcomponent)

---

## Properties

<a id="isdomhudactor"></a>

###  isDomHUDActor

**● isDomHUDActor**: *`boolean`* = true

*Defined in Actor.ts:27*

___
<a id="get_container"></a>

### `<Static>` GET_CONTAINER

**● GET_CONTAINER**: *[GET_CONTAINER](component.md#get_container)* =  Component.GET_CONTAINER

*Defined in Actor.ts:25*

___
<a id="init"></a>

### `<Static>` INIT

**● INIT**: *[INIT](component.md#init)* =  Component.INIT

*Defined in Actor.ts:26*

___

## Accessors

<a id="dom"></a>

###  dom

**get dom**(): `HTMLElement`

*Defined in Actor.ts:56*

当前对应的DOM实例引用。

**Returns:** `HTMLElement`

___
<a id="linkedactor"></a>

###  linkedActor

**get linkedActor**(): `SceneActor`<`ISceneComponentState`, `SceneComponent`<`ISceneComponentState`>>

*Defined in Actor.ts:42*

获取当前链接到的Actor实例引用。

**Returns:** `SceneActor`<`ISceneComponentState`, `SceneComponent`<`ISceneComponentState`>>

___
<a id="linkedcomponent"></a>

###  linkedComponent

**get linkedComponent**(): `SceneComponent`<`ISceneComponentState`>

*Defined in Actor.ts:49*

获取当前链接到的Component实例引用或者链接到的Actor的根组件实例引用。

**Returns:** `SceneComponent`<`ISceneComponentState`>

___
<a id="offsetx"></a>

###  offsetX

**get offsetX**(): `number`

**set offsetX**(value: *`number`*): `void`

*Defined in Actor.ts:70*

获取相对于绑定的Actor的横向偏移量（像素）。

**Returns:** `number`

*Defined in Actor.ts:63*

设置相对于绑定的Actor的横向偏移量（像素）。

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `number` |

**Returns:** `void`

___
<a id="offsety"></a>

###  offsetY

**get offsetY**(): `number`

**set offsetY**(value: *`number`*): `void`

*Defined in Actor.ts:84*

获取相对于绑定的Actor的纵向偏移量（像素）。

**Returns:** `number`

*Defined in Actor.ts:77*

设置相对于绑定的Actor的纵向偏移量（像素）。

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `number` |

**Returns:** `void`

___
<a id="root"></a>

###  root

**get root**(): [Component](component.md)<`IStateTypes`, `IEvents`>

*Overrides Actor.root*

*Defined in Actor.ts:35*

根级DomHUD.Component组件。

**Returns:** [Component](component.md)<`IStateTypes`, `IEvents`>

___

## Methods

<a id="linktoactor"></a>

###  linkToActor

▸ **linkToActor**(actor: *`SceneActor`*, offsetX?: *`number`*, offsetY?: *`number`*): `void`

*Defined in Actor.ts:98*

链接到一个特定的Actor，链接后会在每一帧不断跟随其位置，性能开销较大。

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| actor | `SceneActor` | - |
| `Default value` offsetX | `number` | 0 |
| `Default value` offsetY | `number` | 0 |

**Returns:** `void`

___
<a id="linktocomponent"></a>

###  linkToComponent

▸ **linkToComponent**(component: *`SceneComponent`*, offsetX?: *`number`*, offsetY?: *`number`*): `void`

*Defined in Actor.ts:114*

链接到一个指定的组件，链接后会在每一帧不断跟随其位置，性能开销较大。

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| component | `SceneComponent` | - |
| `Default value` offsetX | `number` | 0 |
| `Default value` offsetY | `number` | 0 |

**Returns:** `void`

___
<a id="oncreateroot"></a>

###  onCreateRoot

▸ **onCreateRoot**(initState: *`IStateTypes`*): [Component](component.md)<`IStateTypes`, `IEvents`>

*Overrides SceneActor.onCreateRoot*

*Defined in Actor.ts:91*

创建根组件。

**Parameters:**

| Name | Type |
| ------ | ------ |
| initState | `IStateTypes` |

**Returns:** [Component](component.md)<`IStateTypes`, `IEvents`>

___
<a id="synctoactor"></a>

###  syncToActor

▸ **syncToActor**(actor: *`SceneActor`*, offsetX?: *`number`*, offsetY?: *`number`*): `void`

*Defined in Actor.ts:107*

同步到一个特定的Actor，仅仅同步一次，不会跟随。

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| actor | `SceneActor` | - |
| `Default value` offsetX | `number` | 0 |
| `Default value` offsetY | `number` | 0 |

**Returns:** `void`

___
<a id="synctocomponent"></a>

###  syncToComponent

▸ **syncToComponent**(component: *`SceneComponent`*, offsetX?: *`number`*, offsetY?: *`number`*): `void`

*Defined in Actor.ts:123*

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

*Defined in Actor.ts:130*

解除和当前组件的链接。

**Returns:** `void`

___

