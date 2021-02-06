import React, { Component } from "react";

import "./post-status-filter.scss";

export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btns: [
        { name: "all", label: "Все" },
        { name: "liked", label: "Понравилось" },
      ],
    };
  }

  render() {
    const content = this.state.btns.map(({ name, label }) => {
      const active = this.props.filter === name;
      const clsBtn = active
        ? "post-status-filter__btn active"
        : "post-status-filter__btn";
      return (
        <div key={name} className={clsBtn}>
          <button type="button" onClick={() => this.props.onUpdateFilter(name)}>
            {label}
          </button>
        </div>
      );
    });

    return (
      <div className="post-status-filter">
        <div className="post-status-filter__btns">{content}</div>
      </div>
    );
  }
}
