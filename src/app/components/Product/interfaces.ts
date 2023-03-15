import { Category } from "../Category/interfaces";

export interface Product extends Category {
  tags?: string[];
  title?: string;
  createdDate?: string;
  readingTime?: number;
}
