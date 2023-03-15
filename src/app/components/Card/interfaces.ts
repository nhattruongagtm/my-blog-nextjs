import { Category } from "../Category/interfaces";

export interface ICard extends Category {
  title: string;
  tags: string[];
  createdDate: string;
  readingTime: number;
}
