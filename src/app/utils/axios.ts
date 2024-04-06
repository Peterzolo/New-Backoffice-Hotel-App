/* eslint-disable no-console */
import axios from "axios";
import { StorageVariable } from "./constants/storageVariables";
import { localStore } from "./localStore";

interface ApiCall {
  method?: string;
  route: string;
  body?: any;

  [key: string]: any;
}

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_V1,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Credentials": "true",
  },
});

export const apiCall = function ({
  method = "GET",
  route,
  body = {},
  ...args
}: ApiCall) {
  const onSuccess = function (response: { status: any; data: any }) {
    console.info("Request Successful!", response.status);
    return response.data;
  };

  const onError = function (error: {
    config: any;
    response: { statusText: string; data: { message: string } };
    message: any;
  }) {
    console.error("Request Failed:", error.config);
    if (error.response.statusText === "Unauthorized") {
      localStore.removeItem(StorageVariable.TOKEN_EXPIRY);
      localStore.removeItem(StorageVariable.TOKENS);
    }

    if (error.response.data.message === "Token has Expired") {
      localStore.removeItem(StorageVariable.TOKEN_EXPIRY);
      localStore.removeItem(StorageVariable.TOKENS);
    }
    if (error.response) {
      console.error("Error Response", error.response);
    } else {
      console.error("Error Message:", error.message);
    }

    return Promise.reject(error.response || error.message);
  };

  const token = localStore.getItem(StorageVariable.TOKENS);

  if (token) {
    client.defaults.headers.common["Authorization"] = `Bearer ${JSON.stringify(
      token
    )}`;
  }

  client.interceptors.request.use((config) => {
    return config;
  });

  return client({
    method,
    url: route,
    data: body,
    withCredentials: true,
    ...args,
  })
    .then(onSuccess)
    .catch(onError);
};

export enum ResponseStatus {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
  UNPROCESSABLE_ENTITY = 422,
}
