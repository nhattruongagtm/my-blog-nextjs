import Dislike from "@/app/assets/icons/Dislike";
import Like from "@/app/assets/icons/Like";
import { COMMENT, DEDAULT_AVATAR } from "@/app/config/constants";
import Image from "next/image";
import React, { useRef, useState } from "react";
import ActionButton from "./ActionButton";
import { IComment } from "./interfaces";

export type CommentType = COMMENT.LIKE | COMMENT.DISLIKE;

type CommentItemProps = {
  commnent: IComment;
};

const CommentItem = ({ commnent }: CommentItemProps) => {
  const { content, user, createdDate, like, dislike, replies } = commnent;
  const { id: userID, name, avatar } = user;

  const [cmt, setCmt] = useState<IComment>(commnent);
  const baseCmt = useRef(cmt);

  const [action, setAction] = useState(COMMENT.NONE);

  const handleSubmitAction = (type: CommentType) => {
    if (action === type) {
      setAction(COMMENT.NONE);
      setCmt(baseCmt.current);
    } else {
      setAction(type);
      if (type === COMMENT.LIKE) {
        setCmt({
          ...cmt,
          like: cmt.like + 1,
          dislike: baseCmt.current.dislike,
        });
      } else {
        setCmt({
          ...cmt,
          dislike: cmt.dislike + 1,
          like: baseCmt.current.like,
        });
      }
    }
  };

  return (
    <div className="p-1 flex gap-1 items-start">
      <div className="author  flex items-center">
        <div className="avatar w-[50px] h-[50px] overflow-hidden rounded-full mb-0.5">
          <Image
            src={avatar ?? DEDAULT_AVATAR}
            alt="user-avatar"
            width={100}
            height={100}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="content ">
        <div className="text rounded-lg border dark:border-border-dark p-3 w-fit bg-gray-100 dark:bg-card-dark">
          <div className="name font-semibold text-[14px] mb-0.5 min-w-[200px]">
            {name}
          </div>
          <p>{content}</p>
        </div>
        <div className="actions h-[32px] mt-[5px] flex gap-1 items-center w-full">
          <ActionButton
            defaultValue={cmt.like}
            type={COMMENT.LIKE}
            toogle={action === COMMENT.LIKE}
            onSubmit={handleSubmitAction}
          />
          <ActionButton
            defaultValue={cmt.dislike}
            type={COMMENT.DISLIKE}
            toogle={action === COMMENT.DISLIKE}
            onSubmit={handleSubmitAction}
          />
          <p className="text-vsm">
            {new Date(createdDate).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
