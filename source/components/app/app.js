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

    (this.maxId = 4),
      (this.state = {
        data: [
          {
            label: "I need some sleep",
            important: false,
            liked: false,
            id: 1,
          },
          {
            label: "I cant go on like this",
            important: false,
            liked: false,
            id: 2,
          },
          {
            label: "I try to count the sheeps",
            important: false,
            liked: false,
            id: 3,
          },
        ],
      });
  }

  onToggleLike = (id) => {
    this.setState((state) => {
      const newData = state.data.slice();

      newData[id - 1].liked = !newData[id - 1].liked;

      return {
        data: newData,
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState((state) => {
      const newData = state.data.slice();

      newData[id - 1].important = !newData[id - 1].important;

      return {
        data: newData,
      };
    });
  };

  onDeleteItem = (id) => {
    this.setState((state) => {
      const newData = state.data.filter((post) => post.id !== id);

      return {
        data: newData,
      };
    });
  };

  onAddItem = (body) => {
    const newPost = {
      label: body,
      important: false,
      liked: false,
      id: this.maxId++,
    };

    this.setState((state) => {
      const newData = [...state.data, newPost];

      return {
        data: newData,
      };
    });
  };

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
            <PostList
              posts={this.state.data}
              onToggleLike={this.onToggleLike}
              onToggleImportant={this.onToggleImportant}
              onDeleteItem={this.onDeleteItem}
            />
          </div>
          <div className="app__bottom">
            <PostAddForm onAddItem={this.onAddItem} />
          </div>
        </div>
      </div>
    );
  }
}
