import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import AddItem from "./components/addItem";
import Items from "./components/items";
import { v4 as uuid } from "uuid";

class App extends Component {
  state = {
    items: [
      {
        id: "1",
        title: "Apple",
        price: "1.00",
        quantity: "10",
      },
      {
        id: "2",
        title: "Banana",
        price: "2.50",
        quantity: "4",
      },
      {
        id: "3",
        title: "Orange",
        price: "2.00",
        quantity: "5",
      },
      {
        id: "4",
        title: "Peach",
        price: "3.50",
        quantity: "12",
      },
    ],
    itemsPricesSum: "72.00",
  };

  handleDelete = (itemId) => {
    const items = this.state.items.filter((i) => i.id !== itemId);
    this.setState({ items });
    this.countPrices(items);
  };

  addItem = (id, title, price, quantity) => {
    const newItem = {
      id,
      title,
      price,
      quantity,
    };
    const items = [...this.state.items, newItem];
    this.setState({ items });
    this.countPrices(items);
  };

  countPrices = (items) => {
    let itemsPricesSum = 0;
    items.forEach((item) => {
      itemsPricesSum += parseFloat(item.price) * parseFloat(item.quantity);
      itemsPricesSum = Math.round(itemsPricesSum * 100) / 100;
    });
    this.setState({ itemsPricesSum });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <AddItem key={uuid()} addItem={this.addItem} />
        <Items
          items={this.state.items}
          onDelete={this.handleDelete}
          itemsPricesSum={this.state.itemsPricesSum}
        />
      </div>
    );
  }
}

export default App;
