// Import necessary modules and components
import { Component } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import "./get.css"; // Import the CSS file for styling

// Define the Getdata component
class Getdata extends Component {
  constructor(props) {
    super(props);
    // Initialize component state
    this.state = {
      studentId: "", // Store input student ID
      studentName: "", // Not used in this component
      searchResults: [], // Store search results
    };
  }

  // Function to fetch data from the backend
  fetchDataFromSpringBoot = async () => {
    const { studentId, searchResults } = this.state;

    // Validate student ID input
    if (studentId === "") {
      alert("Please enter a value");
    } else {
      // Clear previous search results and reset studentId
      this.setState({ searchResults: [] });
      this.setState({ studentId: "" });
    }

    try {
      // Make GET request to backend API using Axios
      const response = await axios.get(
        `http://localhost:7080/api/students/${studentId}`
      );
      const data = response.data; // Received response data
      console.log(data);

      // Create a new item for the search result
      const newItem = {
        id: data.id,
        name: data.studentName,
        email: data.studentEmail,
        address: data.studentAddress,
      };

      // Check if the received data is valid
      if (newItem.id === undefined) {
        alert("Please enter a valid Student ID");
      } else {
        console.log(newItem);
        // Update state with the new search result
        this.setState((prevState) => ({
          searchResults: [...prevState.searchResults, newItem],
        }));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  render() {
    const { studentId, searchResults } = this.state;

    return (
      <div className="search-page">
        <h1>Student Search</h1>
        <div className="row g-3">
          <div className="form-container">
            <div className="col-auto">
              <label htmlFor="staticEmail2" className="text-studentId">
                STUDENT ID :
              </label>
              <input
                type="text"
                id="staticEmail2"
                value={studentId}
                onChange={(e) => this.setState({ studentId: e.target.value })}
              />
            </div>
            <div className="col-auto">
              <button
                className="btn btn-primary mb-3 searchbutton"
                onClick={this.fetchDataFromSpringBoot}
              >
                Search
              </button>
            </div>
          </div>

          {/* Display search results */}
          {searchResults.length > 0 ? (
            <div className="search-results">
              <h2>Search Results</h2>
              {/* Render a table for search results */}
              <table className="table">
                <thead>
                  <tr className="tab">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Map through searchResults to display each result */}
                  {searchResults.map((item, index) => (
                    <tr className="tab" key={index}>
                      <td className="id">{item.id}</td>
                      <td className="name">{item.name}</td>
                      <td className="email">{item.email}</td>
                      <td className="address">{item.address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            // Display message when no matching students found
            <p>No matching students found.</p>
          )}
        </div>
      </div>
    );
  }
}

export default Getdata;
