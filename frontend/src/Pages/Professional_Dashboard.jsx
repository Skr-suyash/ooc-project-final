import React, { useState, useEffect } from "react";
import PersonIcon from '@mui/icons-material/Person';
import { useAuth0 } from "@auth0/auth0-react";

const initialJobs = [
  {
    _id: "6714e8c83573398e8cad7c96",
    cust_phone: "9709200999",
    prof_phone: "9709200999",
    address: "Hello World",
    status: "Initiated",
  },
];

const Professional_Dashboard = () => {
    const { isAuthenticated, user, isLoading } = useAuth0();
    
    // Use state to manage jobs
    const [jobs, setJobs] = useState(initialJobs);

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
                    <h1 className="text-5xl font-bold">Hello</h1>
                    <p className="text-xl mt-4">Welcome to the Pending Jobs Dashboard</p>
                </div>
            </div>

            {/* Dashboard Section */}
            <div className="container mx-auto p-5">
                <h2 className="text-3xl font-bold mb-6">Pending Jobs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.map((job) => (
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
                                    <h3 className="text-xl font-semibold mb-3">Job ID: {job._id}</h3>
                                    <p className="text-gray-600"><strong>Customer Phone:</strong> {job.cust_phone}</p>
                                    <p className="text-gray-600"><strong>Professional Phone:</strong> {job.prof_phone}</p>
                                    <p className="text-gray-600"><strong>Address:</strong> {job.address}</p>
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Professional_Dashboard;
