import React, { useState } from "react";
import useAddComment from "../customhooks/useAddComment";

function Comment({ comments, handleAddComments ,handleDeleteComments}) {
  const [inputshow, setinputshow] = useState(false);
  const [input, setinput] = useState("");
  

  function handlereply() {
    const newcomment = {
      text: input,
      id:  Date.now(),
      replies: [],
    };
    
    
    handleAddComments(comments.id, newcomment);


    setinputshow(false);
  }
  function handledelete() {
    handleDeleteComments(comments.id)
    setinputshow(false);
  }
if(!comments?.text){
    return null
}
  return (
    <div >
      <div className="pl-20 p-1 border">
        <h1>{comments?.text}</h1>
        {inputshow && (
          <div>
            <input
              className="px-2 py-1 outline-none border-b-2"
              type="text"
              name="text"
              id="text"
              placeholder="enter comment..."
              onChange={(e) => setinput(e.target.value)}
              autoFocus
            />
          </div>
        )}
        {!inputshow && (
          <div className="flex flex-row gap-4">
            <button
              onClick={() => setinputshow(true)}
              className="border p-1 text-xs rounded px-2 bg-green-400 text-white font-bold"
            >
              reply
            </button>
            <button
              onClick={handledelete}
              className="border p-1 text-xs rounded px-2 bg-green-400 text-white font-bold"
            >
              delete
            </button>
          </div>
        )}
        {inputshow && (
          <div className="flex flex-row gap-4">
            <button
              onClick={handlereply}
              className="border p-1 text-xs rounded px-2 bg-green-400 text-white font-bold"
            >
              save
            </button>
            <button
              onClick={()=>setinputshow(!inputshow)}
              className="border p-1 text-xs rounded px-2 bg-green-400 text-white font-bold"
            >
              cancle
            </button>
          </div>
        )}
        {comments?.replies?.map((ele) => {
          return <Comment comments={ele} key={Math.random()} handleAddComments={handleAddComments} handleDeleteComments={handleDeleteComments}/>;
        })}
      </div>
    </div>
  );
}

export default Comment;
