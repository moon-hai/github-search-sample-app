import { createAction } from '@reduxjs/toolkit';
import { TToast } from './types';

export const setToast = createAction<TToast | null>('toast/set');
