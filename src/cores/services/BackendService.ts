import { HttpClient } from "@/cores/port/HttpClient";
import { AxiosAdapter } from "@/cores/adapter/AxiosAdapter";
import { container } from "@/cores/ioc/inversify.config";
class BackendService {
  protected readonly client: HttpClient;

  constructor() {
    this.client = container.get<HttpClient>(AxiosAdapter);
  }
}

export default BackendService;
