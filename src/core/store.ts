import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";

const rootReducer = combineReducers({});

export const createStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    preloadedState,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
  });
};

export type RootState = ReturnType<typeof rootReducer>;

/**
 * getDefaultMiddleware
 * it returns an array of default list of middleware [thunk, immutableStateInvariant, serializableStateInvariant]
 */
