import React from "react";

import "./post-status-filter.scss";

const PostStatusFilter = () => {
  return (
    <div className="post-status-filter">
      <div className="post-status-filter__btns">
        <div className="post-status-filter__btn">
          <button type="button">Понравилось</button>
        </div>
        <div className="post-status-filter__btn active">
          <button type="button">Все</button>
        </div>
      </div>
    </div>
  );
};

export default PostStatusFilter;
