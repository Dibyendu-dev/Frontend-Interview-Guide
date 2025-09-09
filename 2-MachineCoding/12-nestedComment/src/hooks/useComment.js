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

  const deleteComment = (id) => {
  setComments((prevComment) => {
    const updatedComments = structuredClone(prevComment); // Deep copy to avoid mutation

    // Validate if the comment exists
    if (!updatedComments[id]) {
      console.error(`Comment with ID ${id} does not exist.`);
      return prevComment;
    }

    // Remove the comment ID from the parent's children array
    const parentId = updatedComments[id].parentId;
    if (parentId && updatedComments[parentId]?.children) {
      updatedComments[parentId].children = updatedComments[parentId].children.filter(
        (childId) => childId !== id
      );
    }

    // Recursive function to delete a comment and its children
    const deleteRecursively = (commentId) => {
      const comment = updatedComments[commentId];
      if (comment?.children?.length > 0) {
        comment.children.forEach((childId) => deleteRecursively(childId));
      }
      delete updatedComments[commentId];
    };

    // Start recursive deletion
    deleteRecursively(id);

    return updatedComments;
  });
};

  return { comments, addComment, deleteComment };
}
