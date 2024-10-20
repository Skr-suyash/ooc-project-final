import React from "react";

const Cards = ({ data, url }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-5">
      {data.length > 0 ? (
        data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg max-w-xs w-full hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image */}
            <div className="h-32 bg-gray-200">
              <img
                src={
                  
                  "../assets/electrician.jpeg"
                }
                alt={item.role}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            {/* Card Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.role}
              </h3>
              <p className="text-gray-600">
                Name: {item.name} <br />
                Email: {item.email} <br />
                Phone: {item.phone} <br />
                City: {item.city}
              </p>
            </div>

            {/* Card Actions */}
            <div className="p-4 border-t border-gray-200">
              <button className="bg-blue-500 text-white py-1 px-3 rounded-md mr-2 hover:bg-blue-600 transition-colors">
                Share
              </button>
              <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded-md hover:bg-gray-300 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center">No data available</p>
      )}
    </div>
  );
};

export default Cards;
