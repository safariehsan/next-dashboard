import { data } from "../data/data.js";
import React from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import orders from "./orders.jsx";

const customers = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between p-4">
        <h2>Customers</h2>
        <h2>Welcome back, Client</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Name</span>
            <span className="sm:text-left text-right">Email</span>
            <span className="hidden md:grid">Last Order</span>
            <span className="hidden sm:grid">Method</span>
          </div>
          <ul>
            {data.map((customer, index) => {
              return (
                <li
                  key={index}
                  className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <BsPersonFill className="text-purple-800" />
                    </div>
                    <p className="pl-4">{`${customer.name.first} ${customer.name.last}`}</p>
                  </div>
                  <p className="text-gray-600 sm:text-left text-right">
                    {customer.name.first}@gmail.com
                  </p>
                  <p className="hidden md:flex">{customer.date}</p>
                  <div className="sm:flex hidden justify-between items-center">
                    <p>{customer.method}</p>
                    <BsThreeDotsVertical />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default customers;
