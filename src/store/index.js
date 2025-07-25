/**
 * Redux Store Configuration - Simplified and Optimized
 */
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import formReducer from '../features/form/formSlice';
import favoritesReducer from '../features/favorites/favoritesSlice';

/**
 * Custom logger middleware for development
 */
const loggerMiddleware = store => next => action => {
  if (import.meta.env.DEV) {
    console.group(action.type);
    console.info('dispatching', action);
    const result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
  }
  return next(action);
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    form: formReducer,
    favorites: favoritesReducer
  },
  middleware: (getDefaultMiddleware) => 
    import.meta.env.DEV 
      ? getDefaultMiddleware().concat(loggerMiddleware)
      : getDefaultMiddleware(),
  devTools: !import.meta.env.PROD,
});

/**
 * These exports can be uncommented if converting to TypeScript in the future.
 * They provide typed versions of useSelector and useDispatch hooks.
 * 
 * Usage example with TypeScript:
 * import { useAppDispatch, useAppSelector } from '../store';
 */

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
