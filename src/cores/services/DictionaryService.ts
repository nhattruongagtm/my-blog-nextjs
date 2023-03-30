import { injectable } from "inversify";
import BackendService from "./BackendService";

@injectable()
class DictionaryService extends BackendService {
  private baseUrl: string;

  constructor() {
    super();
    this.baseUrl = "";
  }
}

export default DictionaryService;
