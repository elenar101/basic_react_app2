import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

class AddItem extends Component {
  state = {
    id: "",
    title: "",
    price: "",
    quantity: "",
  };

  onSubmit = (e) => {
    e.preventDefault();

    document.querySelectorAll("input").forEach((input) => {
      input = !input.value ? input.classList.add("error") : "";
    });

    if (!this.state.title || !this.state.price || !this.state.quantity) {
    } else {
      this.props.addItem(
        uuid(),
        this.state.title,
        Math.round(this.state.price * 100) / 100,
        Math.round(this.state.quantity)
      );
      this.setState({ id: "", title: "", price: "", quantity: "" });
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    document.querySelectorAll("input").forEach((input) => {
      input.classList.remove("error");
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="number"
          min="0"
          name="price"
          id="price"
          placeholder="Price..."
          value={this.state.price}
          onChange={this.onChange}
        />
        <input
          type="number"
          min="0"
          name="quantity"
          id="quantity"
          placeholder="Quantity..."
          value={this.state.quantity}
          onChange={this.onChange}
        />
        <input className="addItemBtn" type="submit" value="Add Item"></input>
      </form>
    );
  }
}

AddItem.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default AddItem;
