import React from "react";
import Post from "./Post";

function NewsFeed() {
  return (
    <div className="bg-white p-2 mt-2 rounded-xl shadow-lg">
      <Post />
      <hr />
      <Post />
      <hr />
      <Post />
    </div>
  );
}

export default NewsFeed;
