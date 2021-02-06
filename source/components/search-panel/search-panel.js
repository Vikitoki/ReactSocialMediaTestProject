import React, { Component } from "react";

import "./search-panel.scss";
export default class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
    };
  }

  onSearchUpdate = (event) => {
    const term = event.target.value;

    this.setState({ term });
    this.props.onSearchUpdate(term);
  };

  render() {
    return (
      <div className="search-panel">
        <div className="search-panel__item">
          <input
            type="text"
            placeholder="Поиск по записям"
            onChange={this.onSearchUpdate}
          ></input>
        </div>
      </div>
    );
  }
}
