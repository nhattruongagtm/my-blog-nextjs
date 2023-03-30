import { Category } from "../Category/interfaces";

export interface Product extends Category {
  linkId: string;
  link: string;
  linkName: string;
  image: string;
  linkType: string;
  groupIds: string[];
}
