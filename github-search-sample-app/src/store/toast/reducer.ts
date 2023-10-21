import { createReducer } from '@reduxjs/toolkit';
import { setToast } from './actions';
import { TToastStore } from './types';

const INITIAL_STATE: TToastStore = {
  toast: null,
};

const toastReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(setToast, (state, action) => {
    state.toast = action.payload;
  });
});

export default toastReducer;
