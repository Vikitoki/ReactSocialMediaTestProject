import React from "react";
import PostListItem from "../post-list-item/post-list-item";

import "./post-list.scss";

const PostList = () => {
  return (
    <div className="post-list">
      <div className="post-list__container">
        <ul className="post-list__list">
          <li>
            <PostListItem />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PostList;
