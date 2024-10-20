import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation to access the passed state
import PersonIcon from "@mui/icons-material/Person";

// Initial jobs data, you can remove or update this as needed

const Professional_Dashboard = () => {
  // Use state to manage jobs
  const [jobs, setJobs] = useState([]); // Start with an empty array
  const [name, setName] = useState([]); //
  // Access the location to get the state (which includes the email)
  const location = useLocation();

  // Extract the email from the state object or set a default value if not provided
  const email = location.state?.email || "No email provided";

  // Function to fetch job data
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(email);
        // POST request with email in the body
        const response = await fetch(
          "http://localhost:8000/professional-dashboard",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }), // Send email in the request body
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }

        const result = await response.json();
        console.log("Data fetched successfully:", result);
        setName(result.name);
        // Set the pending_jobs array in the state
        setJobs(result.pending_jobs); // Access the pending_jobs array from the response
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [email]); // Trigger fetch when the email is available

  // Function to mark a job as completed
  const markAsCompleted = (jobId) => {
    setJobs(
      jobs.map((job) =>
        job._id === jobId ? { ...job, status: "Completed" } : job
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">Hello , {name}</h1>
          <p className="text-xl mt-4">Welcome to the Pending Jobs Dashboard</p>
          <p className="mt-2">
            Logged in as: <strong>{email}</strong>
          </p>
        </div>
      </div>

      {/* Dashboard Section */}
      <div className="container mx-auto p-5">
        <h2 className="text-3xl font-bold mb-6">Pending Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div
                key={job._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Job Details */}
                <div className="flex items-start mb-4">
                  {/* Icon */}
                  <PersonIcon className="h-8 w-8 text-blue-500 mr-4" />

                  {/* Job Information */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      Job ID: {job._id}
                    </h3>
                    <p className="text-gray-600">
                      <strong>Customer Phone:</strong> {job.cust_phone}
                    </p>
                    <p className="text-gray-600">
                      <strong>Professional Phone:</strong> {job.prof_phone}
                    </p>
                    <p className="text-gray-600">
                      <strong>Address:</strong> {job.address}
                    </p>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="mb-4">
                  <span
                    className={`py-1 px-3 rounded-full text-sm ${
                      job.status === "Completed"
                        ? "bg-green-200 text-green-600"
                        : "bg-yellow-200 text-yellow-600"
                    }`}
                  >
                    {job.status}
                  </span>
                </div>

                {/* Mark as Completed Button */}
                {job.status === "Initiated" && (
                  <button
                    onClick={() => markAsCompleted(job._id)}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full"
                  >
                    Mark as Completed
                  </button>
                )}
              </div>
            ))
          ) : (
            <p>No pending jobs available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Professional_Dashboard;
