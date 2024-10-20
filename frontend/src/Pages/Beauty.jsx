import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import Cards from "../Components/Cards.jsx";
import bimg from "../assets/beauty.jpeg";
const Electrician = () => {
  const [beautyData, setBeautyData] = useState([]); // Initialize state for fetched data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/get-professional/Women's Beauty?role=Women's Beauty`, // Passing "electrician" as a query parameter
          {
            method: "GET", // Changed to GET request
            headers: {
              "Content-Type": "application/json", // Ensure the headers are set correctly
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log("Data fetched successfully:", result);
        setBeautyData(result); // Set the fetched data in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures the fetch runs once on component mount

  return (
    <div>
      <section
        className="py-5 text-center container background-image"
        style={{
          height: "200vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        {/* Pass the fetched data as props to Cards component */}
        <Cards data={beautyData} url={bimg} />
      </section>
      <Footer />
    </div>
  );
};

export default Electrician;
