import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Search, Grid, List, BookOpen, Clock, User } from "lucide-react";
import { Menu, X } from "lucide-react";

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    "technology",
    "business",
    "sports",
    "entertainment",
  ];
  const links = [
    { name: "Dashboard", route: "/" },
    { name: "News", route: "/news" },
    { name: "Payout", route: "/payouts" },
  ];
  const [sidebarOpen, setSidebarOpen] = useState(true);

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
          <h1 className="text-xl font-semibold">News Dashboard</h1>
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
          <h1 className="text-2xl font-bold">News Articles</h1>
          <p className="text-gray-600">
            Browse and manage all published articles
          </p>
        </div>
        <div className="flex gap-2">
          <button>
            <Grid size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { title: "Total Articles", value: "1,234", icon: BookOpen },
          { title: "Published Today", value: "12", icon: Clock },
          { title: "Active Authors", value: "45", icon: User },
          { title: "Avg. Read Time", value: "5.2m", icon: Clock },
        ].map((stat) => (
          <div key={stat.title} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-gray-500 text-sm">{stat.title}</h3>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <stat.icon className="text-gray-400" size={24} />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            />
          </div>
          <div className="flex gap-2">
            <select
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 capitalize"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category} className="capitalize">
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="h-48 bg-gray-200">
              <img
                src={`/api/placeholder/400/300`}
                alt="Article thumbnail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  Technology
                </span>
                <span className="text-sm text-gray-500">5 min read</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Article Title {item}: Something Interesting
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                A brief preview of the article content goes here. This helps
                readers get an idea of what the article is about...
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    A
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Author Name</p>
                    <p className="text-gray-500">Jan 12, 2024</p>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700">
                  Read more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-gray-500">Showing 1-6 of 24 articles</p>
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
  );
};

export default News;
