import { createStore, GenericStoreEnhancer } from "redux";
import createBrowserHistory from "history/createBrowserHistory";
import { rootReducer } from "@App/store/reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: () => undefined;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (
      arg: GenericStoreEnhancer
    ) => undefined;
  }
}

export const history = createBrowserHistory();

const store = createStore(rootReducer);

export default store;
