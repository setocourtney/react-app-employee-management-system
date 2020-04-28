import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import Card from "../components/Card";
import Alert from "../components/Alert";
import UserCard from "../components/UserCard";

class Search extends Component {
  state = {
    search: "",
    employees: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available employees and update this.state.employees
  componentDidMount() {
    API.getUsers()
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.results);
        }
        this.setState({ employees: res.data.results, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  }

  // Set target employee
  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  // Populate results for target employee
  handleFormSubmit = event => {
    event.preventDefault();
    
    API.getUsers()
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        //filter by selected employee
        let employeeRes = res.data.results.filter(employee => {
          return (`${employee.name.last}, ${employee.name.first}`) === this.state.search;
        });
        this.setState({ results: employeeRes, error: "" , search: ""});
      })
      .catch(err => this.setState({ error: err.message }));
  };


  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search Employee</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            employees={this.state.employees}
          />
          <Card results={this.state.results.length > 0 ? this.state.results[0] : null} />
          <UserCard results={this.state.results.length > 0 ? this.state.results[0] : null}/>    
        </Container>
      </div>
    );
  }
}

export default Search;
