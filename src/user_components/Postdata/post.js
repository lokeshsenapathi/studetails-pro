// Import necessary components and libraries
import React, { Component } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "./post.css";
import Submitted from "./index";

// Define the Postdata component
class Postdata extends Component {
  state = {
    studentName: "",
    studentEmail: "",
    studentAddress: "",
    id: uuidv4, // Generating a unique ID using uuidv4

    error: null,
  };

  // Handler for input changes
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  // Handler for form submission

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state);
    const { studentName, studentEmail, studentAddress, id } = this.state;
    try {
      const userDetails = { studentName, studentEmail, id, studentAddress };
      const response = await axios.post(
        "http://localhost:7080/api",
        userDetails
      );
      const submittedData = JSON.stringify(response.data);
      localStorage.setItem("submittedData", submittedData);
      //Clear form fields after successful submission
      this.setState({
        studentName: "",
        studentEmail: "",
        studentAddress: "",
        id: "",
      });
      // Redirect to the "submitted" page after a delay
      await setTimeout(() => {
        window.location.href = "/submitted";
      }, 1000);
    } catch (error) {
      console.error("Error posting data:", error);
      this.setState({ error: error });
    }
  };

  render() {
    const { studentName, studentEmail, studentAddress, id, error } = this.state;

    return (
      <div className="main">
        <div className="student-form-container">
          <h2 className="stdNme">Student Form</h2>
          <form className="student-form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="student_name">
                Name:<span className="reqfield">*</span>
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={studentName}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="student_email">
                Email:<span className="reqfield">*</span>
              </label>
              <input
                type="email"
                id="studentEmail"
                name="studentEmail"
                value={studentEmail}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="studentAddress">
                Address:<span className="reqfield">*</span>
              </label>
              <textarea
                id="studentAddress"
                name="studentAddress"
                value={studentAddress}
                onChange={this.handleChange}
                required
              />
            </div>
            {/* <div className="form-group">
            <label htmlFor="id">ID:</label>
            <input
              type="text"
              id="id"
              name="id"
              value={id}
              // onChange={this.handleChange}
              //required
            />
          </div> */}
            <button type="submit">Submit</button>
          </form>
          {error && <div className="error-message">{error}</div>}
        </div>
      </div>
    );
  }
}

export default Postdata;
