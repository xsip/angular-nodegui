import { Injectable } from '@angular/core';
import { NgButton } from './button';
import { NgComponent } from './component';
import { NgWindow } from './window';
import { NgText } from './text';

export type Constructable<T> = new () => T;
export type NgComponentClass = Constructable<NgComponent>;

@Injectable()
export class ComponentsMap {
  public map: Map<string, NgComponentClass> = new Map<
    string,
    NgComponentClass
  >();

  constructor() {
    this.map.set(NgButton.nodeName, NgButton);
    this.map.set(NgWindow.nodeName, NgWindow);
    this.map.set(NgText.nodeName, NgText);
  }
}
