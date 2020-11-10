import {
  configureStore,
  EnhancedStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { Middleware } from "redux";
import { createReducer, OrmState } from "redux-orm";
import createAxiosMiddleware from "./middleware/axios";
import orm, { Schema } from "./orm";

export type RootState = {
  orm: OrmState<Schema>;
};

export type Store = EnhancedStore<RootState>;

function getMiddleware(): Middleware[] {
  return [...getDefaultMiddleware(), createAxiosMiddleware()];
}

export function buildStore(): Store {
  const store = configureStore({
    reducer: {
      // @ts-ignore
      orm: createReducer(orm),
    },
    middleware: getMiddleware(),
  });

  // @ts-ignore
  return store;
}
