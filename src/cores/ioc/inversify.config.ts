import { Container } from "inversify";
import { AxiosAdapter } from "../adapter/AxiosAdapter";
import { HttpClient } from "../port/HttpClient";
import Katana from "./inversify-demo/Katana";
import Ninja from "./inversify-demo/Ninja";
import Shuriken from "./inversify-demo/Shuriken";
import ThrowableWeapon from "./inversify-demo/ThrowableWeapon";
import { TYPES } from "./inversify-demo/type";
import Warrior from "./inversify-demo/warrior";
import Weapon from "./inversify-demo/weapon";

const container = new Container();

container.bind<Warrior>(TYPES.Warrior).to(Ninja);
container.bind<Weapon>(TYPES.Weapon).to(Katana);
container.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

container.bind<HttpClient>(TYPES.BackendClient).to(AxiosAdapter);

export { container };
