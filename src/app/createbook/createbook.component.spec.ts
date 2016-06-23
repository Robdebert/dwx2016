/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CreatebookComponent } from './createbook.component';

describe('Component: Createbook', () => {
  it('should create an instance', () => {
    let component = new CreatebookComponent();
    expect(component).toBeTruthy();
  });
});
