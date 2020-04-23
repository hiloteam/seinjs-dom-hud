/**
 * @File   : DomHUDActor.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 2018/9/25 上午11:58:00
 * @Description:
 */
import * as Sein from 'seinjs';

import HUDComponent, {IComponentState as IHUDComponentState} from './Component';
import HUDActor from './Actor';

declare module 'seinjs' {
  export namespace DomHUD {
    export interface IComponentState extends IHUDComponentState {}
    export class Component<IStateTypes extends IComponentState = IComponentState, IEvents = {}> extends HUDComponent<IStateTypes, IEvents> {}
    export class Actor<IStateTypes extends IComponentState = IComponentState, IEvents = {}> extends HUDActor<IStateTypes, IEvents> {}
    export function isActor(value: Sein.SObject): value is Actor;
    export function isComponent(value: Sein.SObject): value is Component;
  }
}

/**
 * 判断一个实例是否为`DomHUDActor`。
 */
function isActor(value: Sein.SObject): value is HUDActor {
  return (value as HUDActor).isDomHUDActor;
}

/**
 * 判断一个实例是否为`DomHUDComponent`。
 */
function isComponent(value: Sein.SObject): value is HUDComponent {
  return (value as HUDComponent).isDomHUDComponent;
}

(Sein as any).DomHUD = {
  Component: HUDComponent,
  Actor: HUDActor,
  isActor,
  isComponent
};

export {
  IHUDComponentState as IComponentState,
  HUDComponent as Component,
  HUDActor as Actor,
  isActor,
  isComponent
};
