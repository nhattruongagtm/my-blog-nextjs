export interface IComment {
  id: string;
  createdDate: string;
  content: string;
  like: number;
  dislike: number;
  replies: (IComment & { commentId: string })[];
  user: IUser;
}

export interface IUser {
  id: string;
  avatar?: string;
  name: string;
}
