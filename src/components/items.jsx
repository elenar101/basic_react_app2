import React, { Component } from "react";
import Item from "../components/item.jsx";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

class Items extends Component {
  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th className="BtnColumn"></th>
            </tr>
          </thead>
          <tbody>
            {this.props.items.map((item) => (
              <Item key={uuid()} item={item} onDelete={this.props.onDelete} />
            ))}
          </tbody>
        </table>
        <p className="total">In Total : {this.props.itemsPricesSum} $ </p>
      </React.Fragment>
    );
  }
}

Items.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Items;
