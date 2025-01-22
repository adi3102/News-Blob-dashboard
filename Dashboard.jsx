import React, { useState } from "react";
import { Link } from "react-router-dom";
React;
import { Search, Menu, X } from "lucide-react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const links = [
    { name: "Dashboard", route: "/" },
    { name: "News", route: "/news" },
    { name: "Payout", route: "/payouts" },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm px-4 h-16 fixed w-full flex items-center justify-between z-10">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <h1 className="text-xl font-semibold">Home Page</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2"
            />
          </div>

          <Link
            to={"/login"}
            className="w-fit bg-blue-500 rounded-md flex items-center justify-center text-white px-4 py-2"
          >
            Login
          </Link>
        </div>
      </nav>

      <aside
        className={`fixed left-0 top-16 h-full bg-white w-64 shadow-sm transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="space-y-2 flex flex-col">
            {links.map((item, id) => (
              <Link
                key={id}
                className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                to={item.route}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </aside>

      <main
        className={`pt-20 px-4 transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {[
            { title: "Total Articles", value: "1,234" },
            { title: "Total Authors", value: "56" },
            { title: "Total Payout", value: "Rs.  12,345" },
          ].map((stat) => (
            <div key={stat.title} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-gray-500 text-sm font-medium">
                {stat.title}
              </h3>
              <p className="text-2xl font-bold mt-2">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Recent News</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Article Title {item}</h3>
                  <p className="text-gray-600">Author • Date • Type</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Recent Payouts</h2>
          </div>
          <div className="p-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Author</th>
                  <th className="text-left p-2">Articles</th>
                  <th className="text-left p-2">Amount</th>
                  <th className="text-left p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((item) => (
                  <tr key={item} className="border-b">
                    <td className="p-2">Author {item}</td>
                    <td className="p-2">{item * 5}</td>
                    <td className="p-2">Rs. {item * 100}</td>
                    <td className="p-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        Paid
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
