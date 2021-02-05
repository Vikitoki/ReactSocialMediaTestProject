import React from "react";

import "./post-list-item.scss";
import ImgTrash from "../../public/imgs/delete.svg";
import ImgHeart from "../../public/imgs/heart.svg";
import ImgStar from "../../public/imgs/star.svg";

const PostListItem = () => {
  return (
    <div className="post-list-item">
      <div className="post-list-item__text">I need some sleep...</div>
      <div className="post-list-item__actions actions-post">
        <ul className="actions-post__list">
          <li className="actions-post__item">
            <img src={ImgTrash}></img>
          </li>
          <li className="actions-post__item">
            <img src={ImgStar}></img>
          </li>
          <li className="actions-post__item">
            <img src={ImgHeart}></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PostListItem;
