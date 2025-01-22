import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Search,
  Download,
  Filter,
  ChevronDown,
  Edit2,
  Trash2,
  Plus,
} from "lucide-react";

const Payouts = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = ["All", "Pending", "Paid", "Failed"];
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const links = [
    { name: "Dashboard", route: "/" },
    { name: "News", route: "/news" },
    { name: "Payout", route: "/payouts" },
  ];
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <nav className="bg-white shadow-sm h-16 mb-7  w-full flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <h1 className="text-xl font-semibold">Payout Dashboard</h1>
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
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold">Payout Management</h1>
          <p className="text-gray-600">Manage and track all author payouts</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
          <Plus size={20} />
          New Payout
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          {
            title: "Total Paid",
            value: "Rs. 45,678",
            change: "+12%",
            color: "text-green-600",
          },
          {
            title: "Pending Amount",
            value: "Rs. 3,456",
            change: "-5%",
            color: "text-orange-600",
          },
          {
            title: "Active Authors",
            value: "123",
            change: "+8%",
            color: "text-green-600",
          },
          {
            title: "Average Payout",
            value: "Rs. 234",
            change: "+3%",
            color: "text-green-600",
          },
        ].map((stat) => (
          <div key={stat.title} className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-gray-500 text-sm">{stat.title}</h3>
            <div className="flex items-end gap-2 mt-1">
              <p className="text-2xl font-bold">{stat.value}</p>
              <span className={`text-sm ${stat.color}`}>{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <div className="flex gap-2">
            <div className="relative">
              <Filter className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <select
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 appearance-none"
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
              >
                {filters.map((filter) => (
                  <option key={filter} value={filter}>
                    {filter}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search authors..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
              />
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Download size={20} />
            Export
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-4">Author</th>
                <th className="text-left p-4">Articles</th>
                <th className="text-left p-4">Rate</th>
                <th className="text-left p-4">Amount</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Date</th>
                <th className="text-left p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="border-t hover:bg-gray-50">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        {String.fromCharCode(64 + item)}
                      </div>
                      <div>
                        <p className="font-medium">Author {item}</p>
                        <p className="text-sm text-gray-500">
                          author{item}@example.com
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">{item * 5}</td>
                  <td className="p-4">Rs. {item * 10}</td>
                  <td className="p-4">Rs. {item * 50}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        item % 3 === 0
                          ? "bg-green-100 text-green-800"
                          : item % 3 === 1
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {item % 3 === 0
                        ? "Paid"
                        : item % 3 === 1
                        ? "Pending"
                        : "Failed"}
                    </span>
                  </td>
                  <td className="p-4">
                    2024-01-{item.toString().padStart(2, "0")}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded text-red-500">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Showing 1-5 of 25 entries</p>
            <div className="flex gap-2">
              <button className="px-3 py-1 border rounded hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 border rounded bg-blue-50 text-blue-600">
                1
              </button>
              <button className="px-3 py-1 border rounded hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-1 border rounded hover:bg-gray-50">
                3
              </button>
              <button className="px-3 py-1 border rounded hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payouts;
