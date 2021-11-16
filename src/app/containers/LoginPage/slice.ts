import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';


import { loginPageSaga } from './saga';

// The initial state of the LoginPage container
export const initialState: ContainerState = {};

const loginPageSlice = createSlice({
  name: 'loginPage',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions:LoginPageActions, reducer:LoginPageReducer, name: sliceKey } = loginPageSlice;

export const useLoginPageSlice=()=>{
useInjectReducer({ key: sliceKey, reducer: LoginPageReducer });
useInjectSaga({ key: sliceKey, saga: loginPageSaga });
return { LoginPageActions }
}