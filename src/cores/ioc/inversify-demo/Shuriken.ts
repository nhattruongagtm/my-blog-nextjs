import { injectable } from "inversify";
import ThrowableWeapon from "./ThrowableWeapon";

@injectable()
class Shuriken implements ThrowableWeapon {
  public throw() {
    return "hit!";
  }
}

export default Shuriken;
