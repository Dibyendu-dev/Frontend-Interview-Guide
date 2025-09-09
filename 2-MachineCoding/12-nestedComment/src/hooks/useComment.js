import { useState } from "react";

export default function useComment(commentData) {
  const [comments, setComments] = useState(commentData.comments);

  const addComment = (value, parentId) => {
    const newId = Date.now();
    const newComment = {
      id: newId,
      value,
      parentId,
      children: [],
    };

    setComments((prevComment) => {
      const updatedComment = structuredClone(prevComment);
      if (parentId) {
        if (updatedComment[parentId]?.children) {
          updatedComment[parentId].children.push(newId);
        } else {
          console.error(
            `Parent ID ${parentId} does not exist or has no children array.`
          );
        }
      }
      updatedComment[newId] = newComment;

      return updatedComment;
    });
  };
  return { comments, addComment };
}
