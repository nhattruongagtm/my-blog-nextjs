import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { IComment } from "./interfaces";

const Comments = () => {
  const [commentList, setCommentList] = useState<IComment[]>([]);

  useEffect(() => {
    setCommentList([
      {
        id: "123",
        content: "Nice post!!",
        like: 5,
        dislike: 12,
        createdDate: new Date().toISOString(),
        replies: [],
        user: { id: "123", name: "Roken Jad" },
      },
    ]);
  }, []);

  const handleSubmit = (data: any) => {
    const comment = {
      id: "123ss",
      content: "This feature is beeing implemented. We will release soon.",
      like: 0,
      createdDate: new Date().toISOString(),
      replies: [],
      user: { id: "123", name: "School" },
      dislike: 0,
    };
    commentList.length === 1 && setCommentList([...commentList, comment]);
  };
  return (
    <div className="m-auto md:w-2/3 comment-pannel">
      <CommentList comments={commentList} />
      <CommentForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Comments;
