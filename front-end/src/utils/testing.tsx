import { getDefaultMiddleware } from "@reduxjs/toolkit";
import { render, RenderResult } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import React from "react";
import { Provider } from "react-redux";
import { Middleware, Store } from "redux";
import createAxiosMiddleware from "store/middleware/axios";
import { buildStore } from "store";
import axios from "axios";

export type RenderWithStoreResult = RenderResult & {
  store: Store;
};

export function createTestMiddleware(): Middleware[] {
  return [...getDefaultMiddleware(), createAxiosMiddleware()];
}

export function createTestStore({ initialState = {} } = {}): Store {
  const store = buildStore(initialState);
  return store;
}

export function renderWithStore(
  ui: React.ReactNode,
  { initialState = {}, store = createTestStore({ initialState }) } = {}
): RenderWithStoreResult {
  const result = render(<Provider store={store}>{ui}</Provider>);
  return {
    ...result,
    store,
  };
}

export function mockAxios(): MockAdapter {
  return new MockAdapter(axios);
}
