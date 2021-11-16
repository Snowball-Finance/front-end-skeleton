import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.loginPage || initialState;

export const selectLoginPage = createSelector(
  [selectDomain],
  loginPageState => loginPageState,
);
