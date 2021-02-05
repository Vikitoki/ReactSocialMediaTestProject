import React, { Component } from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

import "./app.scss";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <div className="app__container">
          <div className="app__header">
            <AppHeader />
          </div>
          <div className="app__top">
            <SearchPanel />
            <PostStatusFilter />
          </div>
          <div className="app__content">
            <PostList />
          </div>
          <div className="app__bottom">
            <PostAddForm />
          </div>
        </div>
      </div>
    );
  }
}
