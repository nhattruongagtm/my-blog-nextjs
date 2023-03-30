import { injectable } from "inversify";
import Weapon from "./weapon";

@injectable()
class Katana implements Weapon {
  hit(): string {
    return "cut!";
  }
}

export default Katana;
