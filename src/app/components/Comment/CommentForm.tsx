import React, { useState } from "react";

type CommentFormProps = {
  onSubmit: (data: any) => void;
};

const CommentForm = ({ onSubmit }: CommentFormProps) => {
  const [value, setValue] = useState("");
  const handleSubmitCommnent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value) {
      onSubmit(value);
      setValue("");
    }
  };
  return (
    <div className="mb-[40px] min-h-[400px]">
      <hr className="dark:border-gray-600" />
      <p className="text-[20px] font-semibold mb-7 mt-10"> Leave a comment</p>
      <form className="form md:w-1/2 h-full" onSubmit={handleSubmitCommnent}>
        <textarea
          className="p-4 rounded-2xl dark:bg-card-dark bg-gray-100 border-gray-300 outline-none w-full block mb-7"
          placeholder="Drop your message here..."
          rows={4}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="float-right btn-gradient">
          Comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
