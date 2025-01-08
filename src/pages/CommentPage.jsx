import React, { useState } from "react";

const CommentPage = () => {
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");
  const backendURL = "http://localhost:5001";

  const postComment = async () => {
    try {
     
      const response = await fetch(`${backendURL}/comment`, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment }),
      });

      const data = await response.text();
      setMessage(data);

      // Execute scripts in the response after it's received
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = data;

      // Execute any scripts found in the response
      const scripts = tempDiv.getElementsByTagName("script");
      for (let script of scripts) {
        eval(script.innerHTML);  // Execute the script
      }

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Post a Comment</h2>
      <textarea
        className="w-full px-4 py-2 border rounded focus:outline-none mb-4"
        rows="3"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        onClick={postComment}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
      >
        Post Comment
      </button>
      <p className="mt-4" dangerouslySetInnerHTML={{ __html: message }}></p>
    </div>
  );
};

export default CommentPage;
