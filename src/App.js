// Import necessary components and modules from 'react' and 'react-router-dom'
import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import user-defined components
import Getdata from "./user_components/Getdata/get"; // Component to fetch data
import Postdata from "./user_components/Postdata/post"; // Component to post data
import NavBar from "./user_components/Navbar"; // Navigation bar component
import Submitted from "./user_components/Postdata"; // Component to show submitted data

// Define the main application component
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar /> {/* Render the navigation bar */}
          <Routes>
            {/* Define routes for different components */}
            <Route path="/get" element={<Getdata />} />{" "}
            {/* Route to fetch data */}
            <Route path="/post" element={<Postdata />} />{" "}
            {/* Route to post data */}
            <Route path="/submitted" element={<Submitted />} />{" "}
            {/* Route to show submitted data */}
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
