import React from "react";

import "./search-panel.scss";
const SearchPanel = () => {
  return (
    <div className="search-panel">
      <div className="search-panel__item">
        <input type="text" placeholder="Поиск по записям"></input>
      </div>
    </div>
  );
};

export default SearchPanel;
