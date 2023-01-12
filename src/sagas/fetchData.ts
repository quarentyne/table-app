import { API_KEY } from "../api/authAPI";
import { BASE_API_URL } from "../api/constants";

interface IFetchData {
  path: string;
  method: string;
  id?: number;
  headers?: string;
  body?: string;
}

type THeaders = {
  "X-Authorization": string;
  "E-Driver-Id"?: string;
};

export const fetchData = async (request: IFetchData) => {
  const path =
    BASE_API_URL + request.path + (request.id ? request.id + "/" : "");
  const headers: THeaders = {
    "X-Authorization": API_KEY,
  };
  if (request.headers) {
    headers["E-Driver-Id"] = request.headers;
  }
  const body = request.body ? request.body : null;

  try {
    const respone = await fetch(path, {
      method: request.method,
      headers: headers,
      body: body,
    });
    return await respone.json();
  } catch (error) {
    throw error;
  }
};
