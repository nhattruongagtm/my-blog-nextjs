import { inject, injectable } from "inversify";
import ThrowableWeapon from "./ThrowableWeapon";
import { TYPES } from "./type";
import Warrior from "./warrior";
import Weapon from "./weapon";

@injectable()
class Ninja implements Warrior {
  private katana: Weapon;
  private shuriken: ThrowableWeapon;

  constructor(
    @inject(TYPES.Weapon) katana: Weapon,
    @inject(TYPES.ThrowableWeapon) shuriken: ThrowableWeapon
  ) {
    this.katana = katana;
    this.shuriken = shuriken;
  }

  fight(): string {
    return this.katana.hit();
  }
  sneak(): string {
    return this.shuriken.throw();
  }
}
export default Ninja;
