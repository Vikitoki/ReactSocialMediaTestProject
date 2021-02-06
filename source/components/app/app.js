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
        term: "",
        filter: "all",
        data: [
          {
            label: "I need some sleep",
            important: false,
            liked: false,
          },
          {
            label: "I cant go on like this",
            important: false,
            liked: false,
          },
          {
            label: "I try to count the sheeps",
            important: false,
            liked: false,
          },
        ],
      });
  }

  onToggleLike = (id) => {
    this.setState((state) => {
      const newData = state.data.slice();

      newData[id].liked = !newData[id].liked;

      return {
        data: newData,
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState((state) => {
      const newData = state.data.slice();

      newData[id].important = !newData[id].important;

      return {
        data: newData,
      };
    });
  };

  onDeleteItem = (id) => {
    this.setState((state) => {
      const newData = [...state.data];
      newData.splice(id, 1);
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
    };

    this.setState((state) => {
      const newData = [...state.data, newPost];

      return {
        data: newData,
      };
    });
  };

  onSearchUpdate = (term) => {
    this.setState({ term });
  };

  searchPost = (posts, term) => {
    if (term.length === 0) {
      return posts;
    }

    return posts.filter((post) => post.label.includes(term));
  };

  filterPost = (posts, filter) => {
    if (filter === "liked") {
      return posts.filter((post) => post.liked);
    } else {
      return posts;
    }
  };

  onUpdateFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const likedPosts = this.state.data.filter((post) => post.liked).length,
      allPosts = this.state.data.length;

    const visiblePosts = this.filterPost(
      this.searchPost(this.state.data, this.state.term),
      this.state.filter
    );

    return (
      <div className="app">
        <div className="app__container">
          <div className="app__header">
            <AppHeader allPosts={allPosts} likedPosts={likedPosts} />
          </div>
          <div className="app__top">
            <SearchPanel onSearchUpdate={this.onSearchUpdate} />
            <PostStatusFilter onUpdateFilter={this.onUpdateFilter} filter={this.state.filter} />
          </div>
          <div className="app__content">
            <PostList
              posts={visiblePosts}
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
