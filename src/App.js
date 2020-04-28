import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Directory from "./pages/Directory";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/react-app-employee-management-system/" component={Directory} />
          <Route exact path="/react-app-employee-management-system/directory" component={Directory} />
          <Route exact path="/react-app-employee-management-system/search" component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
