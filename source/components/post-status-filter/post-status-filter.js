import React from "react";

import "./post-status-filter.scss";

const PostStatusFilter = () => {
  return (
    <div className="post-status-filter">
      <div className="post-status-filter__btns">
        <div className="post-status-filter__btn">
          <button
            type="button"
            className="post-status-filter__btn post-status-filter__btn_like"
          >
            Понравилось
          </button>
        </div>
        <div className="post-status-filter__btn">
          <button
            type="button"
            className="post-status-filter__btn post-status-filter__btn_all"
          >
            Все
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostStatusFilter;
