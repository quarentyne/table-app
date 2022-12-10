import { API_KEY, PATH } from "../constants/api";

interface IFetchPath{
  path: string;
  method: string;
  id?: number;
  headers?: string;
  body?: string;
};

type THeaders = {
  'X-Authorization': string;
  'E-Driver-Id'?: string;
};

export const fetchPath = async (request: IFetchPath) => { 
  const path = PATH + request.path + (request.id ? request.id + '/' : "")
  const headers: THeaders = {
    'X-Authorization': API_KEY,
  };
  if (request.headers) {
    headers['E-Driver-Id'] = request.headers;
  };
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
  };
};