import React, { useState } from "react";
import Comment from "../components/Comment";
import useAddComment from "../customhooks/useAddComment";
import useDeleteComment from "../customhooks/useDeleteComment";

function NestedComments() {
  const { addcomment } = useAddComment();
  const deleteComment  = useDeleteComment();
  let commentData = {
    id: 0,
    text: "outer hello",
    replies: [
      {
        id: 1,
        text: "hello",
        replies: [{ id: 2, text: "inner hello", replies: [] }],
      },
      {
        id: 3,
        text: "world",
        replies: [{ id: 4, text: "inner world", replies: [] }],
      },
    ],
  };
  const [comments, setcomments] = useState(commentData);
  const handleAddComments = (commentsId, newcomment) => {
    const updatedTree = addcomment(commentsId, newcomment, comments);
    setcomments(updatedTree);
  };
  const handleDeleteComments = (commentsId) => {
    const updatedTree = deleteComment(commentsId, comments);
    setcomments(updatedTree);
    console.log(updatedTree)
  };
  return (
    <div>
      <Comment comments={comments} handleAddComments={handleAddComments} handleDeleteComments={handleDeleteComments}/>
    </div>
  );
}

export default NestedComments;
