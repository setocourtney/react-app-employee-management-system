import React, { Component } from "react";
import API from "../utils/API";
import Alert from "../components/Alert";
import Container from "../components/Container";
import SearchResults from "../components/SearchResults";
import ButtonContainer from "../components/ButtonContainer";

class Directory extends Component {
  state = {
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getUsers()
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.results);
        }
        this.setState({ results: res.data.results, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  }

  handleBtnClick = event => {
    event.preventDefault();

    const btnType = event.target.attributes.getNamedItem("data-value").value;

    let newResults = [];
    if (btnType === "Name") {
      newResults = this.state.results.sort( (a, b) => {
        return a.name.first > b.name.first ? 1 : -1;
      }).sort( (a, b) => {
        return a.name.last > b.name.last ? 1 : -1;
      })
    } else if (btnType === "Location") {
      newResults = this.state.results.sort( (a, b) => {
        return a.location.state > b.location.state ? 1 : -1;
      })
    }
    this.setState({ results: newResults});
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">User Directory</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <ButtonContainer handleBtnClick={this.handleBtnClick}/>
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Directory;
