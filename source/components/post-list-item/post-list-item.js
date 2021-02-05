import React from "react";

import "./post-list-item.scss";
import ImgTrash from "../../public/imgs/delete.svg";
import ImgHeart from "../../public/imgs/heart.svg";
import ImgStar from "../../public/imgs/star.svg";

const PostListItem = ({
  label,
  important,
  onToggleLike,
  onToggleImportant,
  onDeleteItem,
  id,
  liked,
}) => {
  let clsForItem = "post-list-item";

  if (important) {
    clsForItem += " important";
  }

  if (liked) {
    clsForItem += " liked";
  }

  return (
    <div className={clsForItem}>
      <div className="post-list-item__text">{label}</div>
      <div className="post-list-item__actions actions-post">
        <ul className="actions-post__list">
          <li
            className="actions-post__item"
            onClick={() => {
              onDeleteItem(id);
            }}
          >
            <img src={ImgTrash}></img>
          </li>
          <li
            className="actions-post__item"
            onClick={() => onToggleImportant(id)}
          >
            <img src={ImgStar}></img>
          </li>
          <li className="actions-post__item" onClick={() => onToggleLike(id)}>
            <img src={ImgHeart}></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PostListItem;
