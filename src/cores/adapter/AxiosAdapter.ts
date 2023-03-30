import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders
} from "axios";
import { HttpClient, PlainObject, ResponseHttp } from "../port/HttpClient";

export class AxiosAdapter implements HttpClient {
  readonly #client: Readonly<AxiosInstance>;
  #headers: Partial<AxiosRequestHeaders>;
  constructor(
    headers: Partial<AxiosRequestHeaders>,
    timeout: number,
    baseURL: string
  ) {
    this.#headers = headers;
    this.#client = axios.create({
      baseURL,
      timeout,
      headers,
    });
  }
  getConfig(params?: PlainObject) {
    return {
      headers: this.#headers,
      params,
    } as AxiosRequestConfig;
  }
  async get(
    url: string,
    query?: PlainObject | undefined
  ): Promise<ResponseHttp> {
    const params = query || {};
    return await this.#client.get(url, this.getConfig(params));
  }
  async post(
    url: string,
    data?: PlainObject | undefined
  ): Promise<ResponseHttp> {
    const params = data || {};
    return await this.#client.post(url, this.getConfig(params));
  }
  async put(
    url: string,
    data?: PlainObject | undefined
  ): Promise<ResponseHttp> {
    const params = data || {};
    return await this.#client.put(url, this.getConfig(params));
  }
  async delete(url: string): Promise<ResponseHttp> {
    return await this.#client.delete(url, this.getConfig());
  }
  setHeader(headers: AxiosRequestHeaders): this {
    this.#headers = {
      ...this.#headers,
      ...headers,
    } as AxiosRequestHeaders;
    return this;
  }
}
