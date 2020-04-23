[seinjs-dom-hud](../README.md) > ["seinjs"](../modules/_seinjs_.md) > [DomHUD](../modules/_seinjs_.domhud.md) > [Component](../classes/_seinjs_.domhud.component.md)

# Class: Component

## Type parameters
#### IStateTypes :  [IComponentState](../interfaces/_seinjs_.domhud.icomponentstate.md)
#### IEvents 
## Hierarchy

↳  [Component](component.md)<`IStateTypes`, `IEvents`>

**↳ Component**

## Implements

* `ISceneComponent`<`ISceneComponentState`>

## Index

### Constructors

* [constructor](_seinjs_.domhud.component.md#constructor)

### Properties

* [absolutePosition](_seinjs_.domhud.component.md#absoluteposition)
* [canBeRemoved](_seinjs_.domhud.component.md#canberemoved)
* [children](_seinjs_.domhud.component.md#children)
* [className](_seinjs_.domhud.component.md#classname)
* [classType](_seinjs_.domhud.component.md#classtype)
* [forwardVector](_seinjs_.domhud.component.md#forwardvector)
* [isComponent](_seinjs_.domhud.component.md#iscomponent)
* [isDomHUDComponent](_seinjs_.domhud.component.md#isdomhudcomponent)
* [isRoot](_seinjs_.domhud.component.md#isroot)
* [isSObject](_seinjs_.domhud.component.md#issobject)
* [isSceneComponent](_seinjs_.domhud.component.md#isscenecomponent)
* [isStatic](_seinjs_.domhud.component.md#isstatic)
* [layers](_seinjs_.domhud.component.md#layers)
* [matrix](_seinjs_.domhud.component.md#matrix)
* [name](_seinjs_.domhud.component.md#name)
* [ndcPosition](_seinjs_.domhud.component.md#ndcposition)
* [needReleaseGlRes](_seinjs_.domhud.component.md#needreleaseglres)
* [needUpdateAndDestroy](_seinjs_.domhud.component.md#needupdateanddestroy)
* [offsetX](_seinjs_.domhud.component.md#offsetx)
* [offsetY](_seinjs_.domhud.component.md#offsety)
* [parent](_seinjs_.domhud.component.md#parent)
* [pivot](_seinjs_.domhud.component.md#pivot)
* [pivotX](_seinjs_.domhud.component.md#pivotx)
* [pivotY](_seinjs_.domhud.component.md#pivoty)
* [pivotZ](_seinjs_.domhud.component.md#pivotz)
* [position](_seinjs_.domhud.component.md#position)
* [quaternion](_seinjs_.domhud.component.md#quaternion)
* [rightVector](_seinjs_.domhud.component.md#rightvector)
* [rotation](_seinjs_.domhud.component.md#rotation)
* [rotationX](_seinjs_.domhud.component.md#rotationx)
* [rotationY](_seinjs_.domhud.component.md#rotationy)
* [rotationZ](_seinjs_.domhud.component.md#rotationz)
* [scale](_seinjs_.domhud.component.md#scale)
* [scaleX](_seinjs_.domhud.component.md#scalex)
* [scaleY](_seinjs_.domhud.component.md#scaley)
* [scaleZ](_seinjs_.domhud.component.md#scalez)
* [upVector](_seinjs_.domhud.component.md#upvector)
* [updateOnEverTick](_seinjs_.domhud.component.md#updateonevertick)
* [uuid](_seinjs_.domhud.component.md#uuid)
* [visible](_seinjs_.domhud.component.md#visible)
* [worldMatrix](_seinjs_.domhud.component.md#worldmatrix)
* [x](_seinjs_.domhud.component.md#x)
* [y](_seinjs_.domhud.component.md#y)
* [z](_seinjs_.domhud.component.md#z)
* [CLASS_NAME](_seinjs_.domhud.component.md#class_name)
* [CLASS_TYPE](_seinjs_.domhud.component.md#class_type)
* [CONTAINERS](_seinjs_.domhud.component.md#containers)

### Accessors

* [dom](_seinjs_.domhud.component.md#dom)
* [event](_seinjs_.domhud.component.md#event)
* [linkedActor](_seinjs_.domhud.component.md#linkedactor)
* [linkedComponent](_seinjs_.domhud.component.md#linkedcomponent)

### Methods

* [clone](_seinjs_.domhud.component.md#clone)
* [deserialize](_seinjs_.domhud.component.md#deserialize)
* [getBounds](_seinjs_.domhud.component.md#getbounds)
* [getGame](_seinjs_.domhud.component.md#getgame)
* [getLevel](_seinjs_.domhud.component.md#getlevel)
* [getNdcPosition](_seinjs_.domhud.component.md#getndcposition)
* [getOwner](_seinjs_.domhud.component.md#getowner)
* [getPhysicWorld](_seinjs_.domhud.component.md#getphysicworld)
* [getRoot](_seinjs_.domhud.component.md#getroot)
* [getWorld](_seinjs_.domhud.component.md#getworld)
* [linkToComponent](_seinjs_.domhud.component.md#linktocomponent)
* [lookAt](_seinjs_.domhud.component.md#lookat)
* [onAdd](_seinjs_.domhud.component.md#onadd)
* [onDestroy](_seinjs_.domhud.component.md#ondestroy)
* [onError](_seinjs_.domhud.component.md#onerror)
* [onInit](_seinjs_.domhud.component.md#oninit)
* [onReLink](_seinjs_.domhud.component.md#onrelink)
* [onUnLink](_seinjs_.domhud.component.md#onunlink)
* [onUpdate](_seinjs_.domhud.component.md#onupdate)
* [removeFromParent](_seinjs_.domhud.component.md#removefromparent)
* [rename](_seinjs_.domhud.component.md#rename)
* [rotate](_seinjs_.domhud.component.md#rotate)
* [serialize](_seinjs_.domhud.component.md#serialize)
* [setAbsolutePosition](_seinjs_.domhud.component.md#setabsoluteposition)
* [setPivot](_seinjs_.domhud.component.md#setpivot)
* [setPosition](_seinjs_.domhud.component.md#setposition)
* [setQuaternion](_seinjs_.domhud.component.md#setquaternion)
* [setRotation](_seinjs_.domhud.component.md#setrotation)
* [setScale](_seinjs_.domhud.component.md#setscale)
* [syncToComponent](_seinjs_.domhud.component.md#synctocomponent)
* [translate](_seinjs_.domhud.component.md#translate)
* [unLinkComponent](_seinjs_.domhud.component.md#unlinkcomponent)
* [updateMatrixWorld](_seinjs_.domhud.component.md#updatematrixworld)
* [verifyAdding](_seinjs_.domhud.component.md#verifyadding)
* [verifyRemoving](_seinjs_.domhud.component.md#verifyremoving)
* [GET_CONTAINER](_seinjs_.domhud.component.md#get_container)
* [INIT](_seinjs_.domhud.component.md#init)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Component**(name: *`string`*, actor: *`Actor`*, initState?: *`IStateTypes`*): [Component](_seinjs_.domhud.component.md)

*Inherited from Component.__constructor*

*Overrides SObject.__constructor*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1352*

构造Component，**不可自行构造！！！**请参见`actor.addComponent`方法。

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| actor | `Actor` |
| `Optional` initState | `IStateTypes` |

**Returns:** [Component](_seinjs_.domhud.component.md)

___

## Properties

<a id="absoluteposition"></a>

###  absolutePosition

**● absolutePosition**: *`Vector3`*

*Inherited from SceneComponent.absolutePosition*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4228*

直接设置组件在世界空间的位置数据。

**注意此设置会涉及矩阵的clone和乘法，有一些性能开销，**

___
<a id="canberemoved"></a>

###  canBeRemoved

**● canBeRemoved**: *`boolean`*

*Inherited from Component.canBeRemoved*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1345*

是否允许自身在运行时被动态移除，用于保护某些特殊Component，比如根组件默认不可移除。

___
<a id="children"></a>

###  children

**● children**: *`SArray`<`SceneComponent`<`ISceneComponentState`>>*

*Inherited from SceneComponent.children*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4167*

获取自身的所有子级SceneComponent，一般不需要自己使用。

___
<a id="classname"></a>

###  className

**● className**: *`SName`*

*Inherited from SObject.className*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1015*

实例的类名，代理到类的静态属性`CLASS_NAME`。

___
<a id="classtype"></a>

###  classType

**● classType**: *`SName`*

*Inherited from SObject.classType*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1020*

实例的类型，代理到类的静态属性`CLASS_NAME`。 预留，暂时没啥用。

___
<a id="forwardvector"></a>

###  forwardVector

**● forwardVector**: *`Vector3`*

*Inherited from SceneComponent.forwardVector*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4238*

直接获取组件在本地空间的forward向量。

___
<a id="iscomponent"></a>

###  isComponent

**● isComponent**: *`boolean`*

*Inherited from Component.isComponent*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1326*

___
<a id="isdomhudcomponent"></a>

###  isDomHUDComponent

**● isDomHUDComponent**: *`boolean`* = true

*Inherited from [Component](component.md).[isDomHUDComponent](component.md#isdomhudcomponent)*

*Defined in Component.ts:115*

___
<a id="isroot"></a>

###  isRoot

**● isRoot**: *`boolean`*

*Inherited from Component.isRoot*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1330*

自身是否为根组件。

___
<a id="issobject"></a>

###  isSObject

**● isSObject**: *`boolean`*

*Inherited from SObject.isSObject*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:996*

一个实例是否为SObject的判据。

___
<a id="isscenecomponent"></a>

###  isSceneComponent

**● isSceneComponent**: *`boolean`*

*Inherited from SceneComponent.isSceneComponent*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4144*

___
<a id="isstatic"></a>

###  isStatic

**● isStatic**: *`boolean`*

*Inherited from SceneComponent.isStatic*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4182*

获取是否为静态对象，若是，则从此层开始的所有子级实例都不会在每一帧更新`WorldMatrix`。 用于性能优化。

___
<a id="layers"></a>

###  layers

**● layers**: *`Layers`*

*Inherited from SceneComponent.layers*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4155*

图层属性，详见[Layers](../layers)。

___
<a id="matrix"></a>

###  matrix

**● matrix**: *`Matrix4`*

*Inherited from SceneComponent.matrix*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4206*

获取本地矩阵数据。

___
<a id="name"></a>

###  name

**● name**: *`SName`*

*Inherited from SObject.name*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1000*

实例的名字。

___
<a id="ndcposition"></a>

###  ndcPosition

**● ndcPosition**: *`Vector3`*

*Inherited from SceneComponent.ndcPosition*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4234*

直接获取组件在**当前摄像机**下标准设备空间的位置数据。

**注意此值从世界矩阵和视图矩阵实时计算而来，有一些性能消耗。**

___
<a id="needreleaseglres"></a>

###  needReleaseGlRes

**● needReleaseGlRes**: *`boolean`*

*Inherited from SceneComponent.needReleaseGlRes*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4151*

是否需要在销毁时释放Gl资源，如果确定以后还会使用相同的材质、几何体等，可以设为`false`，性能优化。 对于GlTF模型实例化的资源默认会设为`false`，而在资源释放时统一释放Gl资源。

*__default__*: true

___
<a id="needupdateanddestroy"></a>

###  needUpdateAndDestroy

**● needUpdateAndDestroy**: *`boolean`*

*Inherited from Component.needUpdateAndDestroy*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1341*

是否要将自身加入其挂载的Actor的更新队列中，同时决定自身是否要跟随Actor销毁。 如果为`false`，则说明此Component是一个纯静态组件（比如单纯的图元组件，没有逻辑）。 用于性能优化。

___
<a id="offsetx"></a>

###  offsetX

**● offsetX**: *`number`* = 0

*Inherited from [Component](component.md).[offsetX](component.md#offsetx)*

*Defined in Component.ts:119*

相对于绑定的组件的横向偏移量（像素）。

___
<a id="offsety"></a>

###  offsetY

**● offsetY**: *`number`* = 0

*Inherited from [Component](component.md).[offsetY](component.md#offsety)*

*Defined in Component.ts:123*

相对于绑定的组件的纵向偏移量（像素）。

___
<a id="parent"></a>

###  parent

**● parent**: *`ISceneActor` \| `SceneComponent`*

*Inherited from SceneComponent.parent*

*Overrides Component.parent*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4163*

获取自身的父级实例，根据情况不同可能有不同的类型，一般不需要自己使用。

___
<a id="pivot"></a>

###  pivot

**● pivot**: *`Vector3`*

*Inherited from SceneComponent.pivot*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4198*

获取本地空间锚点数据。

___
<a id="pivotx"></a>

###  pivotX

**● pivotX**: *`number`*

*Inherited from SceneComponent.pivotX*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4216*

___
<a id="pivoty"></a>

###  pivotY

**● pivotY**: *`number`*

*Inherited from SceneComponent.pivotY*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4217*

___
<a id="pivotz"></a>

###  pivotZ

**● pivotZ**: *`number`*

*Inherited from SceneComponent.pivotZ*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4218*

___
<a id="position"></a>

###  position

**● position**: *`Vector3`*

*Inherited from SceneComponent.position*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4186*

获取本地空间位置数据。

___
<a id="quaternion"></a>

###  quaternion

**● quaternion**: *`Quaternion`*

*Inherited from SceneComponent.quaternion*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4202*

获取本地空间四元数数据。

___
<a id="rightvector"></a>

###  rightVector

**● rightVector**: *`Vector3`*

*Inherited from SceneComponent.rightVector*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4246*

直接获取组件在本地空间的right向量。

___
<a id="rotation"></a>

###  rotation

**● rotation**: *`Vector3`*

*Inherited from SceneComponent.rotation*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4190*

获取本地空间旋转数据。

___
<a id="rotationx"></a>

###  rotationX

**● rotationX**: *`number`*

*Inherited from SceneComponent.rotationX*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4210*

___
<a id="rotationy"></a>

###  rotationY

**● rotationY**: *`number`*

*Inherited from SceneComponent.rotationY*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4211*

___
<a id="rotationz"></a>

###  rotationZ

**● rotationZ**: *`number`*

*Inherited from SceneComponent.rotationZ*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4212*

___
<a id="scale"></a>

###  scale

**● scale**: *`Vector3`*

*Inherited from SceneComponent.scale*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4194*

获取本地空间缩放数据。

___
<a id="scalex"></a>

###  scaleX

**● scaleX**: *`number`*

*Inherited from SceneComponent.scaleX*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4213*

___
<a id="scaley"></a>

###  scaleY

**● scaleY**: *`number`*

*Inherited from SceneComponent.scaleY*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4214*

___
<a id="scalez"></a>

###  scaleZ

**● scaleZ**: *`number`*

*Inherited from SceneComponent.scaleZ*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4215*

___
<a id="upvector"></a>

###  upVector

**● upVector**: *`Vector3`*

*Inherited from SceneComponent.upVector*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4242*

直接获取组件在本地空间的up向量。

___
<a id="updateonevertick"></a>

###  updateOnEverTick

**● updateOnEverTick**: *`boolean`*

*Inherited from Component.updateOnEverTick*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1335*

Component是否需要在每一帧进行进行`update`调用，如果为`false`，则将不会触发`onUpdate`生命周期（包括挂载在其下的所有Component）。 用于性能优化。

___
<a id="uuid"></a>

###  uuid

**● uuid**: *`number`*

*Inherited from SObject.uuid*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1011*

所有继承自`SObject`的类的实例的唯一ID。

___
<a id="visible"></a>

###  visible

**● visible**: *`boolean`*

*Inherited from SceneComponent.visible*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4177*

获取该组件在世界中是否可见。

___
<a id="worldmatrix"></a>

###  worldMatrix

**● worldMatrix**: *`Matrix4`*

*Inherited from SceneComponent.worldMatrix*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4222*

直接获取世界矩阵的数据。

___
<a id="x"></a>

###  x

**● x**: *`number`*

*Inherited from SceneComponent.x*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4207*

___
<a id="y"></a>

###  y

**● y**: *`number`*

*Inherited from SceneComponent.y*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4208*

___
<a id="z"></a>

###  z

**● z**: *`number`*

*Inherited from SceneComponent.z*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4209*

___
<a id="class_name"></a>

### `<Static>` CLASS_NAME

**● CLASS_NAME**: *`SName`*

*Inherited from SObject.CLASS_NAME*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:986*

实例的类名，用于反射，在类被实例化后有`object.className`作为代理。

___
<a id="class_type"></a>

### `<Static>` CLASS_TYPE

**● CLASS_TYPE**: *`SName`*

*Inherited from SObject.CLASS_TYPE*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:991*

实例的类型用于反射，在类被实例化后有`object.classType`作为代理。 预留，暂时没用。

___
<a id="containers"></a>

### `<Static>` CONTAINERS

**● CONTAINERS**: *`object`*

*Inherited from [Component](component.md).[CONTAINERS](component.md#containers)*

*Defined in Component.ts:64*

存储DOM顶层容器对象，原则上一个`Game`一个容器。 一般不需要自行调用。

#### Type declaration

[gameId: `number`]: `HTMLDivElement`

___

## Accessors

<a id="dom"></a>

###  dom

**get dom**(): `HTMLElement`

*Inherited from [Component](component.md).[dom](component.md#dom)*

*Defined in Component.ts:169*

当前对应的DOM实例引用。

**Returns:** `HTMLElement`

___
<a id="event"></a>

###  event

**get event**(): `EventManager`<`IEvents` & `object`> & `IEvents`

*Inherited from [Component](component.md).[event](component.md#event)*

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

*Inherited from [Component](component.md).[linkedActor](component.md#linkedactor)*

*Defined in Component.ts:147*

获取当前链接到的组件的父级Actor实例引用。

**Returns:** `SceneActor`<`ISceneComponentState`, `SceneComponent`<`ISceneComponentState`>>

___
<a id="linkedcomponent"></a>

###  linkedComponent

**get linkedComponent**(): `SceneComponent`<`ISceneComponentState`>

*Inherited from [Component](component.md).[linkedComponent](component.md#linkedcomponent)*

*Defined in Component.ts:140*

获取当前链接到的Component实例引用。

**Returns:** `SceneComponent`<`ISceneComponentState`>

___

## Methods

<a id="clone"></a>

###  clone

▸ **clone**(object: *`this`*): `this`

*Inherited from SObject.clone*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1028*

克隆一个实例，交由子类实现。

**Parameters:**

| Name | Type |
| ------ | ------ |
| object | `this` |

**Returns:** `this`

___
<a id="deserialize"></a>

###  deserialize

▸ **deserialize**(json: *`any`*): `void`

*Inherited from SObject.deserialize*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1040*

从一个json序列反序列化，交由子类实现。

*__todo:__*: 暂未实现，预留。

**Parameters:**

| Name | Type |
| ------ | ------ |
| json | `any` |

**Returns:** `void`

___
<a id="getbounds"></a>

###  getBounds

▸ **getBounds**(bounds?: *`Bounds`*, currentMatrix?: *`Matrix4`*): `Bounds`

*Inherited from SceneComponent.getBounds*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4266*

获取组件的的包围盒(AABB)信息。

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` bounds | `Bounds` |  当前计算的包围盒信息，可用于节省开销 |
| `Optional` currentMatrix | `Matrix4` |  当前计算的矩阵，可用于节省开销 |

**Returns:** `Bounds`

___
<a id="getgame"></a>

###  getGame

▸ **getGame**<`IGameState`>(): `Game`<`IGameState`>

*Inherited from Component.getGame*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1448*

获取当前`Game`实例。

*__template__*: IGameState 当前游戏状态管理器的类型。

**Type parameters:**

#### IGameState :  `StateActor`

**Returns:** `Game`<`IGameState`>

___
<a id="getlevel"></a>

###  getLevel

▸ **getLevel**<`ILevelState`>(): `Level`<`ILevelState`>

*Inherited from Component.getLevel*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1460*

获取当前`Level`实例。

*__template__*: ILevelState 当前关卡状态管理器的类型。

**Type parameters:**

#### ILevelState :  `StateActor`

**Returns:** `Level`<`ILevelState`>

___
<a id="getndcposition"></a>

###  getNdcPosition

▸ **getNdcPosition**(camera: *`CameraComponent`*): `Vector3`

*Inherited from SceneComponent.getNdcPosition*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4252*

直接获取组件在**指定摄像机**下标准设备空间的位置数据。

**注意此值从世界矩阵和视图矩阵实时计算而来，有一些性能消耗。**

**Parameters:**

| Name | Type |
| ------ | ------ |
| camera | `CameraComponent` |

**Returns:** `Vector3`

___
<a id="getowner"></a>

###  getOwner

▸ **getOwner**<`TOwner`>(): `TOwner`

*Inherited from Component.getOwner*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1471*

获取当前拥有自己的`Actor`。

*__template__*: TOwner Actor的类型。

**Type parameters:**

#### TOwner :  `Actor`

**Returns:** `TOwner`

___
<a id="getphysicworld"></a>

###  getPhysicWorld

▸ **getPhysicWorld**(): `IPhysicWorld`

*Inherited from Component.getPhysicWorld*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1465*

仅在初始化了物理引擎之后，用于获取当前物理世界`PhysicWorld`实例。 如何使用物理引擎请见**Guide**和**Demo**。

**Returns:** `IPhysicWorld`

___
<a id="getroot"></a>

###  getRoot

▸ **getRoot**<`TRoot`>(): `TRoot`

*Inherited from Component.getRoot*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1477*

获取当前拥有自己的`Actor`的根组件。

*__template__*: TRoot 根组件的类型。

**Type parameters:**

#### TRoot :  `Component`

**Returns:** `TRoot`

___
<a id="getworld"></a>

###  getWorld

▸ **getWorld**<`IWorldState`>(): `World`<`IWorldState`>

*Inherited from Component.getWorld*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1454*

获取当前`World`实例。

*__template__*: IWorldState 当前世界状态管理器的类型。

**Type parameters:**

#### IWorldState :  `StateActor`

**Returns:** `World`<`IWorldState`>

___
<a id="linktocomponent"></a>

###  linkToComponent

▸ **linkToComponent**(component: *`SceneComponent`*, offsetX?: *`number`*, offsetY?: *`number`*): `void`

*Inherited from [Component](component.md).[linkToComponent](component.md#linktocomponent)*

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
<a id="lookat"></a>

###  lookAt

▸ **lookAt**(target: *`Vector3` \| `ISceneActor` \| `SceneComponent`*): `this`

*Inherited from SceneComponent.lookAt*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4323*

修改自身的朝向。

**Parameters:**

| Name | Type |
| ------ | ------ |
| target | `Vector3` \| `ISceneActor` \| `SceneComponent` |

**Returns:** `this`

___
<a id="onadd"></a>

###  onAdd

▸ **onAdd**(initState: *`IStateTypes`*): `void`

*Inherited from [Component](component.md).[onAdd](component.md#onadd)*

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

*Inherited from [Component](component.md).[onDestroy](component.md#ondestroy)*

*Overrides SceneComponent.onDestroy*

*Defined in Component.ts:317*

销毁，继承请先`super.onUpdate()`。

**Returns:** `void`

___
<a id="onerror"></a>

###  onError

▸ **onError**(error: *`BaseException`*, details?: *`any`*): `boolean` \| `void`

*Inherited from Component.onError*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1394*

生命周期，用于错误边界处理。将在游戏中大部分可预知错误发生时被调用（通常是生命周期中的非异步错误）。 错误将会根据一定的路径向上传递，一直到`Engine`的层次，你可以在确保完美处理了问题后返回`true`来通知引擎不再向上传递。 当然你也可以将自定义的一些错误加入错误边界机制中，详见[Exception](../../guide/exception)。

**Parameters:**

| Name | Type |
| ------ | ------ |
| error | `BaseException` |
| `Optional` details | `any` |

**Returns:** `boolean` \| `void`

___
<a id="oninit"></a>

###  onInit

▸ **onInit**(initState: *`IStateTypes`*): `void`

*Inherited from [Component](component.md).[onInit](component.md#oninit)*

*Overrides SceneComponent.onInit*

*Defined in Component.ts:176*

初始化，继承请先`super.onInit()`。

**Parameters:**

| Name | Type |
| ------ | ------ |
| initState | `IStateTypes` |

**Returns:** `void`

___
<a id="onrelink"></a>

###  onReLink

▸ **onReLink**(): `void`

*Inherited from Component.onReLink*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1402*

当父级Actor被`reLink`时触发，详见[actor.reLink](../classes/actor#relink).

**Returns:** `void`

___
<a id="onunlink"></a>

###  onUnLink

▸ **onUnLink**(): `void`

*Inherited from Component.onUnLink*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1398*

当父级Actor被`unLink`时触发，详见[actor.unLink](../classes/actor#unlink).

**Returns:** `void`

___
<a id="onupdate"></a>

###  onUpdate

▸ **onUpdate**(): `void`

*Inherited from [Component](component.md).[onUpdate](component.md#onupdate)*

*Overrides Component.onUpdate*

*Defined in Component.ts:306*

每一帧更新，继承请先`super.onUpdate()`。

**Returns:** `void`

___
<a id="removefromparent"></a>

###  removeFromParent

▸ **removeFromParent**(): `this`

*Inherited from SceneComponent.removeFromParent*

*Overrides Component.removeFromParent*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4319*

将自己从父级移除，基本等同于`destroy`方法，从Owner中销毁自身，同时递归移除所有子级组件。 若父级也为`SceneComponent`，则会将自身从父级`children`中移除。

**Returns:** `this`

___
<a id="rename"></a>

###  rename

▸ **rename**(name: *`string`*): `void`

*Inherited from SObject.rename*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1024*

通过字符串修改实例名字。

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `void`

___
<a id="rotate"></a>

###  rotate

▸ **rotate**(axis: *`Vector3`*, rad: *`number`*): `this`

*Inherited from SceneComponent.rotate*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4310*

绕着某个轴`axis`旋转`rad`弧度。

**Parameters:**

| Name | Type |
| ------ | ------ |
| axis | `Vector3` |
| rad | `number` |

**Returns:** `this`

___
<a id="serialize"></a>

###  serialize

▸ **serialize**(): `any`

*Inherited from SObject.serialize*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1034*

实例序列化，交由子类实现。

*__todo:__*: 暂未实现，预留。

**Returns:** `any`

___
<a id="setabsoluteposition"></a>

###  setAbsolutePosition

▸ **setAbsolutePosition**(x: *`number`*, y: *`number`*, z: *`number`*): `this`

*Inherited from SceneComponent.setAbsolutePosition*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4302*

设置世界空间位置数据。

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |
| z | `number` |

**Returns:** `this`

___
<a id="setpivot"></a>

###  setPivot

▸ **setPivot**(x: *`number`*, y: *`number`*, z: *`number`*): `this`

*Inherited from SceneComponent.setPivot*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4294*

设置本地空间锚点数据。

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |
| z | `number` |

**Returns:** `this`

___
<a id="setposition"></a>

###  setPosition

▸ **setPosition**(x: *`number`*, y: *`number`*, z: *`number`*): `this`

*Inherited from SceneComponent.setPosition*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4282*

设置本地空间位置数据。

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |
| z | `number` |

**Returns:** `this`

___
<a id="setquaternion"></a>

###  setQuaternion

▸ **setQuaternion**(x: *`number`*, y: *`number`*, z: *`number`*, w: *`number`*): `this`

*Inherited from SceneComponent.setQuaternion*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4298*

设置本地空间四元数数据。

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |
| z | `number` |
| w | `number` |

**Returns:** `this`

___
<a id="setrotation"></a>

###  setRotation

▸ **setRotation**(x: *`number`*, y: *`number`*, z: *`number`*): `this`

*Inherited from SceneComponent.setRotation*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4286*

设置本地空间旋转数据。

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |
| z | `number` |

**Returns:** `this`

___
<a id="setscale"></a>

###  setScale

▸ **setScale**(x: *`number`*, y: *`number`*, z: *`number`*): `this`

*Inherited from SceneComponent.setScale*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4290*

设置本地空间位移数据。

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |
| z | `number` |

**Returns:** `this`

___
<a id="synctocomponent"></a>

###  syncToComponent

▸ **syncToComponent**(component: *`SceneComponent`*, offsetX?: *`number`*, offsetY?: *`number`*): `void`

*Inherited from [Component](component.md).[syncToComponent](component.md#synctocomponent)*

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
<a id="translate"></a>

###  translate

▸ **translate**(axis: *`Vector3`*, distance: *`number`*): `this`

*Inherited from SceneComponent.translate*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4306*

沿着某个轴`axis`平移`distance`距离。

**Parameters:**

| Name | Type |
| ------ | ------ |
| axis | `Vector3` |
| distance | `number` |

**Returns:** `this`

___
<a id="unlinkcomponent"></a>

###  unLinkComponent

▸ **unLinkComponent**(): `void`

*Inherited from [Component](component.md).[unLinkComponent](component.md#unlinkcomponent)*

*Defined in Component.ts:283*

解除和当前组件的链接。

**Returns:** `void`

___
<a id="updatematrixworld"></a>

###  updateMatrixWorld

▸ **updateMatrixWorld**(force?: *`boolean`*): `this`

*Inherited from SceneComponent.updateMatrixWorld*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4314*

更新当前实例以及子级组件的世界矩阵。

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` force | `boolean` |

**Returns:** `this`

___
<a id="verifyadding"></a>

###  verifyAdding

▸ **verifyAdding**(initState: *`IStateTypes`*): `void`

*Inherited from Component.verifyAdding*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1370*

用于验证一个该组件在当前状态是否可被添加，一般用于防止重复添加不可重复的组件。 你可以重写此方法来达成验证，如果验证不通过请抛出异常。 注意，此验证仅会在`development`环境下被执行！

**Parameters:**

| Name | Type |
| ------ | ------ |
| initState | `IStateTypes` |

**Returns:** `void`

___
<a id="verifyremoving"></a>

###  verifyRemoving

▸ **verifyRemoving**(): `void`

*Inherited from Component.verifyRemoving*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1376*

用于验证一个该组件在当前状态是否可被移除。 你可以重写此方法来达成验证，如果验证不通过请抛出异常。 注意，此验证仅会在`development`环境下被执行！

**Returns:** `void`

___
<a id="get_container"></a>

### `<Static>` GET_CONTAINER

▸ **GET_CONTAINER**(game: *`Game`*): `HTMLDivElement`

*Inherited from [Component](component.md).[GET_CONTAINER](component.md#get_container)*

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

*Inherited from [Component](component.md).[INIT](component.md#init)*

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

