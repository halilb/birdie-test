import { AxiosRequestConfig } from "axios";

declare module "redux-axios-middleware" {
  export interface AxiosAction<Type> {
    type: Type;
    payload: {
      client?: string;
      request: AxiosRequestConfig;
    };
  }

  export interface SuccessAction<Type, Data = {}> {
    type: Type;
    error: undefined;
    payload: {
      data: Data;
    };
  }

  export interface FailureAction<Type, Data = {}> {
    type: Type;
    error: {
      response: {
        data: Data;
      };
      message?: string;
    };
  }
}
