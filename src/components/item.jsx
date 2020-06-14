import React, { Component } from "react";

class Item extends Component {
  state = {};
  render() {
    return (
      <tr>
        <td>{this.props.item.title}</td>
        <td>{this.props.item.price}</td>
        <td>{this.props.item.quantity}</td>
        <td>
          <button
            className="deleteBtn"
            onClick={() => this.props.onDelete(this.props.item.id)}
          >
            x
          </button>
        </td>
      </tr>
    );
  }
}

export default Item;
