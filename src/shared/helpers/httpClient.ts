import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { API_KEY } from "../../api/authAPI";

const instance = axios.create();

export type ApiResponse<Response> = Promise<AxiosResponse<Response>>;

export type TGenerateOptions = {
  method: "POST" | "GET" | "PUT" | "DELETE" | "PATCH";
  url: string;
  data?: any;
  params?: string;
  config?: AxiosRequestConfig;
  instance?: AxiosInstance;
};

export type TFormatResponse = {
  data: any;
  status: number;
  statusText: string;
  headers?: any;
};

export function httpPost<TData, TResponse>(
  url: string,
  data?: TData | string
): ApiResponse<TResponse> {
  return sendRequest({
    method: "POST",
    url,
    data,
  });
}

export function httpGet<TResponse>(
  url: string,
  params?: any
): ApiResponse<TResponse> {
  return sendRequest({ method: "GET", url, params });
}
export const httpPatch = (url: string, data: any): Promise<TFormatResponse> =>
  sendRequest({ method: "PATCH", url, data });
export const httpDelete = (url: string, data?: any): Promise<TFormatResponse> =>
  sendRequest({ method: "DELETE", url, data });
export const httpPut = (url: string, data: any): Promise<TFormatResponse> =>
  sendRequest({ method: "PUT", url, data });

const formatResponse = (response: any = {}): TFormatResponse => ({
  data: response.data || {},
  status: response.status || 418,
  statusText: response.statusText || "",
  headers: response.headers || {},
});

async function sendRequest<TResponse>({
  method,
  url,
  data = undefined,
  params = undefined,
}: TGenerateOptions): Promise<AxiosResponse<TResponse>> {
  const OPTIONS = generateOptions({
    method,
    url,
    data,
    params,
  });

  try {
    return await instance(url, OPTIONS);
  } catch (error: any) {
    throw formatResponse(error?.response);
  }
}

const generateOptions = ({ method, url, data, params }: TGenerateOptions) => {
  const defaultHeaders = {
    "Content-Type": "application/json; charset=utf-8",
    "X-Authorization": API_KEY,
  };

  return {
    method,
    url,
    data,
    headers: {
      ...defaultHeaders,
      ...(params ? { "E-Driver-Id": params } : {}),
    },
  };
};
