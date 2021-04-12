import React, { Component } from "react";
import "./form.css";
import Button from "../../button/Button";
import { useHistory } from "react-router-dom";
import MainForm from "./MainForm";

class CkeckListForm extends Component {
  constructor() {
    super();
    this.state = { value: "" };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  addedclass = (e) => {
    e.preventDefault();
    console.log("{}{}{");
    const added = document.getElementById("mainner");
    added.classList.toggle("opencontact");
  };

  render() {
    return (
      <>
        <div className="radio-btn">
          <form onSubmit={this.addedclass}>
            <label>
              <input
                type="radio"
                checked="checked"
                name="radio"
                value={this.state.value}
                onChange={this.handleChange}
              ></input>
              Your great Project
            </label>
            <label>
              <input
                type="radio"
                checked="checked"
                name="radio"
                value={this.state.value}
                onChange={this.handleChange}
              ></input>
              Meeting for a Coffee
            </label>
            <label>
              <input
                type="radio"
                checked="checked"
                name="radio"
                value={this.state.value}
                onChange={this.handleChange}
              ></input>
              Birds and Bees
            </label>
            <label className="container">
              <input
                type="radio"
                checked="checked"
                name="radio"
                value={this.state.value}
                onChange={this.handleChange}
              ></input>
              Plan a video call
            </label>
            <Button onClick={() => this.addedclass()} />
          </form>
        </div>
      </>
    );
  }
}

export default CkeckListForm;
