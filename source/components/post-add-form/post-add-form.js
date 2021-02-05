import React from "react";

import "./post-add-form.scss";

const PostAddForm = () => {
  return (
    <div className="post-add-form">
      <div className="post-add-form__form">
        <input
          type="text"
          placeholder="О чём вы думаете? Поделитесь!"
          className="post-add-form__input"
        ></input>
        <button type="submit" className="post-add-form__btn">
          Поделиться
        </button>
      </div>
    </div>
  );
};

export default PostAddForm;
