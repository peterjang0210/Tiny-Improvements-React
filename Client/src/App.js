import React, { Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import * as $ from "axios";


class App extends Component {
  state = {
    kudos: []
  }

  componentDidMount() {
    this.getKudos();
  }

  getKudos = () => {
    $({
      url: "/api/kudos",
      method: "GET"
    }).then((kudos) => {
      this.setState({ kudos: kudos.data });
    });
  }

  deleteKudo = (event) => {
    event.preventDefault();
    $({
      url: "/api/kudos",
      method: "DELETE",
      data: {_id: event.target.value}
    }).then(() => {
      this.getKudos();
    })
  }

  render() {
    return (
      <div>
        <Header />
          <Container kudos={this.state.kudos} getKudos={this.getKudos} deleteKudo={this.deleteKudo}/>
        <Footer />
      </div>
    );
  }
}

export default App;
