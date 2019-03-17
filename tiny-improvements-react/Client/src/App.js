import React, { Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import KudosContext from "./components/KudosContext";
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
      this.setState({ kudos: kudos });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <KudosContext.Provider value={{kudos: this.getKudos}}>
          <Container kudos={this.state.kudos}/>
        </KudosContext.Provider>
        <Footer />
      </div>
    );
  }
}

export default App;
