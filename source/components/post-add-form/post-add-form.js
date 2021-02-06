import React, { Component } from "react";

import "./post-add-form.scss";

export default class PostAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }

  onChangeValue = (event) => {
    const text = event.target.value;

    this.setState({ text });
  };

  onSubmit = (event) => {
    event.preventDefault();

    if (this.state.text.length === 0) {
      return;
    }

    this.props.onAddItem(this.state.text);
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <form className="post-add-form" onSubmit={this.onSubmit}>
        <div className="post-add-form__form">
          <input
            type="text"
            placeholder="О чём вы думаете? Поделитесь!"
            className="post-add-form__input"
            onChange={this.onChangeValue}
            value={this.state.text}
          ></input>
          <button type="submit" className="post-add-form__btn">
            Поделиться
          </button>
        </div>
      </form>
    );
  }
}
