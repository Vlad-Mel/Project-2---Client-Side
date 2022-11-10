import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { AuthState } from './auth.reducer';

export const selectAuthorized = (state: AppState) => state.auth;

export const selectAuth = createSelector(
    selectAuthorized,
    (state: AuthState) => state.auth
);