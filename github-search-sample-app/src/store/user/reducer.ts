import { PayloadAction, createReducer } from '@reduxjs/toolkit';
import { resetUserStore, searchGithubUsers } from './actions';
import { TUsersSearchRes, TUsersSearchStore } from './types';

const INITIAL_STATE: TUsersSearchStore = {
  isLoading: false,
  isError: false,
  users: null,
};

const userReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(searchGithubUsers.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
    })
    .addCase(searchGithubUsers.rejected, (state) => {
      state.users = null;
      state.isLoading = false;
      state.isError = true;
    })
    .addCase(searchGithubUsers.fulfilled, (state, action: PayloadAction<TUsersSearchRes | null>) => {
      const { payload } = action;
      if (!payload) {
        state.users = null;
      } else {
        state.users = payload;
      }

      state.isError = false;
      state.isLoading = false;
    });

  // reset
  builder.addCase(resetUserStore, (state) => {
    state.users = null;
    state.isError = false;
  });
});

export default userReducer;
