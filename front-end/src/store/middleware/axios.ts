import axios from "axios";
import { Middleware } from "redux";
import axiosMiddleware from "redux-axios-middleware";

const client = axios.create({
  // TODO: read from a config file
  baseURL: "http://localhost:8000",
  responseType: "json",
});

export default function createAxiosMiddleware(): Middleware {
  return axiosMiddleware(client, {
    successSuffix: "_SUCCESS",
    errorSuffix: "_FAILURE",
  });
}
