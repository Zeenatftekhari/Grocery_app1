
  // Helper function to handle responses
  function handleResponse(res) {
    if (!res.ok) {
      throw new Error(`Server responded with status: ${res.status}`);
    }
    return res.json();
  }
  
  // Helper function to handle errors
  function handleError(error) {
    console.error("Error fetching data:", error);
    throw error;  // or handle it in some other way, e.g., return a default value or error object
  }
  