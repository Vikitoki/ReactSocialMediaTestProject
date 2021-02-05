import React from "react";

import "./app-header.scss";

const AppHeader = () => {
  return (
    <div className="app-header">
      <div className="app-header__container">
        <h3 className="app-header__title">Svistun Vasily</h3>
        <nav className="app-header__total">Понравилось 3 записи из 10</nav>
      </div>
    </div>
  );
};

export default AppHeader;
