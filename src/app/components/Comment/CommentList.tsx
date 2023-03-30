import React from "react";
import CommentItem from "./CommentItem";
import { IComment } from "./interfaces";

type CommentListProps = {
  comments: IComment[];
};

const CommentList = ({ comments }: CommentListProps) => {
  return (
    <div className="my-[60px]">
      {comments.map((comment) => (
        <CommentItem commnent={comment} key={`comment-${comment.id}`} />
      ))}
    </div>
  );
};

export default CommentList;
