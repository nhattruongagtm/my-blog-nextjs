import { AxiosRequestHeaders } from "axios";

export type PlainObject = Record<string, any>;

export type ResponseHttp = {
  status: number;
  headers: PlainObject;
  data: unknown;
};

export interface HttpClient {
  get(url: string, query?: PlainObject): Promise<ResponseHttp>;
  post(url: string, data: PlainObject): Promise<ResponseHttp>;
  put(url: string, data: PlainObject): Promise<ResponseHttp>;
  delete(url: string): Promise<ResponseHttp>;
  setHeader(headers: AxiosRequestHeaders): this;
}
