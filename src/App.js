import React, { Component } from "react";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Networks from "./Components/Networks";
import Team from './Components/Team';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      networksData: {}
    };
  }

  getNetworksData() {
    $.ajax({
      url: "./networksData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ networksData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getNetworksData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.networksData.main} />
        <About data={this.state.networksData.main} />
        <Team data={this.state.networksData.main} />
        <Networks data={this.state.networksData.networks} />
        <Footer data={this.state.networksData.main} />
      </div>
    );
  }
}

export default App;
