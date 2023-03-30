import Dislike from "@/app/assets/icons/Dislike";
import Like from "@/app/assets/icons/Like";
import { COMMENT } from "@/app/config/constants";
import { CommentType } from "./CommentItem";

type ActionButtonProps = {
  defaultValue: number;
  toogle: boolean;
  type: CommentType;
  onSubmit: (type: CommentType) => void;
};

const ActionButton = ({
  defaultValue,
  type,
  toogle,
  onSubmit,
}: ActionButtonProps) => {
  
  const handleClick = () => {
    onSubmit(type);
  };

  return (
    <div className="action-item flex items-center gap-[5px]">
      <div className="value text-vsm">{defaultValue}</div>
      <button onClick={handleClick}>
        {type === COMMENT.LIKE ? (
          <Like isToogle={toogle} />
        ) : (
          <Dislike isToogle={toogle} />
        )}
      </button>
    </div>
  );
};

export default ActionButton;
