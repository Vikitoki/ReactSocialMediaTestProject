import React from "react";
import PostListItem from "../post-list-item/post-list-item";

import "./post-list.scss";

const PostList = ({ posts, onToggleLike, onToggleImportant, onDeleteItem }) => {
  const content = posts.map(({ label, important, id, liked }) => {
    return (
      <li key={id}>
        <PostListItem
          label={label}
          important={important}
          onToggleLike={onToggleLike}
          onToggleImportant={onToggleImportant}
          onDeleteItem={onDeleteItem}
          id={id}
          liked={liked}
        />
      </li>
    );
  });

  return (
    <div className="post-list">
      <div className="post-list__container">
        <ul className="post-list__list">{content}</ul>
      </div>
    </div>
  );
};

export default PostList;
