/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { BiboComponent } from './bibo.component';

describe('Component: Bibo', () => {
  it('should create an instance', () => {
    let component = new BiboComponent();
    expect(component).toBeTruthy();
  });
});
