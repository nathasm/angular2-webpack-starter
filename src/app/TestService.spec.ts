import { Injector, provide } from 'angular2/core';
import { it, describe, expect } from 'angular2/testing';
import { provideStore } from '@ngrx/store';

import { test, TestService } from './TestService';

describe('TestService', () => {
  let injector:Injector;
  let testService:TestService;

  beforeEach(() => {
    injector = Injector.resolveAndCreate([
      TestService,
      provideStore({test}, {}),
    ]);
    testService = injector.get(TestService);
  });

  fit('should be able to create a test service', () => {
    expect(testService).toBeDefined();
  });
});
