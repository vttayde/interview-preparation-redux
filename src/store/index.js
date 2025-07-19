/**
 * Redux Store Configuration
 * 
 * This is the main Redux store configuration for the application.
 * It combines all reducers from feature slices and configures the Redux store with middleware.
 * 
 * Our project follows Redux Toolkit's recommended feature-based architecture:
 * - Store configuration is centralized here
 * - Feature slices are located in their respective feature folders
 * - This approach organizes code by domain rather than technical type
 * 
 * Redux Toolkit's configureStore provides good defaults:
 * - Redux DevTools extension is automatically set up
 * - thunk middleware is included by default
 * - Immutability check middleware prevents state mutations
 * - Serializability check middleware catches non-serializable values
 */
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import formReducer from '../features/form/formSlice';

/**
 * Custom logger middleware for development
 * A simplified version of redux-logger that doesn't overwhelm the console
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

/**
 * Configure and create the Redux store
 */
export const store = configureStore({
  reducer: {
    auth: authReducer,
    form: formReducer
  },
  // Add custom middleware in development, use defaults in production
  middleware: (getDefaultMiddleware) => 
    import.meta.env.DEV 
      ? getDefaultMiddleware().concat(loggerMiddleware)
      : getDefaultMiddleware(),
  
  // DevTools configuration
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
