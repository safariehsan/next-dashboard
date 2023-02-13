import { data } from "../data/data.js";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";

const orders = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between p-4">
        <h2>Customers</h2>
        <h2>Welcome back, Client</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Order</span>
            <span className="sm:text-left text-right">Status</span>
            <span className="hidden md:grid">Last Order</span>
            <span className="hidden sm:grid">Method</span>
          </div>
          <ul>
            {data.map((order, index) => {
              return (
                <li
                  key={index}
                  className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <FaShoppingBag className="text-purple-800" />
                    </div>
                    <div className="pl-4">
                      <p className="text-gray-800 font-bold ">
                        ${order.total.toLocaleString()}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {order.name.first} {order.name.last}
                      </p>
                    </div>
                  </div>
                  <div className="text-gray-600 sm:text-left text-right">
                    <span
                      className={`p-2 rounded-lg ${
                        order.status === "Processing"
                          ? "bg-green-200"
                          : order.status === "Completed"
                          ? "bg-blue-200"
                          : "bg-yellow-200"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <div className="hidden md:flex">{order.date}</div>
                  <div className="sm:flex hidden justify-between items-center">
                    <p>{order.method}</p>
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

export default orders;
