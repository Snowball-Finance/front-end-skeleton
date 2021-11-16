/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import { InjectedReducersType } from 'utils/types/injector-typings';
import { history } from 'utils/history';
import { globalReducer } from './slice';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(injectedReducers: InjectedReducersType = {}) {
  // Initially we don't have any injectedReducers, so returning identity function to avoid the error
  if (Object.keys(injectedReducers).length === 0) {
    return combineReducers({
      global: globalReducer,
      router: connectRouter(history),
    });
  } else {
    return combineReducers({
      ...injectedReducers,
      global: globalReducer,
      router: connectRouter(history),
    });
  }
}
