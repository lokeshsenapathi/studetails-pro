// Define the Submitted component
function Submitted() {
  // Retrieve submitted data from localStorage
  const leo = localStorage.getItem("submittedData");

  // Parse the submitted data from JSON format
  const parsed = leo ? JSON.parse(leo) : null;

  // Function to handle the button click
  const buttonHandle = () => {
    // Clear localStorage
    localStorage.clear();
    // Redirect to the "get" route
    window.location.href = "/get";
  };

  // Render the component's UI
  return (
    <div className="main">
      <h1>Submission Successful</h1>
      <p>Data received</p>
      {/* Display the received ID */}
      <p>Your id is {parsed ? parsed.id : ""}</p>
      {/* Button to acknowledge and redirect */}
      <button className="button" onClick={buttonHandle}>
        ok
      </button>
    </div>
  );
}

export default Submitted; // Export the Submitted component
