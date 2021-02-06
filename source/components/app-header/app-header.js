import React from "react";

import "./app-header.scss";

const AppHeader = ({ allPosts, likedPosts }) => {
  return (
    <div className="app-header">
      <div className="app-header__container">
        <h3 className="app-header__title">Svistun Vasily</h3>
        <nav className="app-header__total">
          Понравилось {likedPosts} записи из {allPosts}
        </nav>
      </div>
    </div>
  );
};

export default AppHeader;
