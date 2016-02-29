import { Action, Reducer, Store } from '@ngrx/store';
import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/subject/BehaviorSubject';

export const test: Reducer< any > = (state:any = {}, action: Action) => {
  return state;
};

@Injectable()
export class TestService {
  test$: Observable<any>;

  private actions$ = new BehaviorSubject<Action>({type: 'INIT', payload: null});

  constructor(private store:Store<any>) {
    this.test$ = this.store.select<any>('test');

    // Comment out these lines below to get the tests to pass
    let loads = this.actions$
    .filter((action:Action) => action.type === 'TEST');
    Observable.merge(loads).subscribe((action:Action) => this.store.dispatch(action));
    // End comment

  }
}
