import React from "react";

const TopCards = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 col-span-1 transition-shadow duration-500 shadow-sm hover:shadow-lg bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full">
          <p className="text-2xl font-bold">$7,430</p>
          <p className="text-gray-600">Daily Income</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg">+18%</span>
        </p>
      </div>
      <div className="lg:col-span-2 col-span-1 transition-shadow duration-500 shadow-sm hover:shadow-lg bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full">
          <p className="text-2xl font-bold">$185,100</p>
          <p className="text-gray-600">Monthly Income</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg">+12%</span>
        </p>
      </div>
      <div className="bg-white flex transition-shadow duration-500 shadow-sm hover:shadow-lg justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full">
          <p className="text-2xl font-bold">12,810</p>
          <p className="text-gray-600">Customers</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg">+25%</span>
        </p>
      </div>
    </div>
  );
};

export default TopCards;
