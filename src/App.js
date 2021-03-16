import React, { Component } from "react";
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import Menu from "./components/MenuComponent";
import "./App.css";
import { DISHES } from "./shared/dishes";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    return (
      <BrowserRouter>
      <div>
        <Header />
        <Menu dishes={this.state.dishes} />
        <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
