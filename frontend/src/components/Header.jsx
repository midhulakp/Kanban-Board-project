import React from "react";
import { ArrowLeft, Search } from "lucide-react";
import { FaApple } from "react-icons/fa";
import { PiShare } from "react-icons/pi";
import { IoIosSettings } from "react-icons/io";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="flex items-center px-4 py-2">
        <button className="p-2 hover:bg-gray-100 hover:text-gray-500 rounded-lg border border-gray-200">
          <ArrowLeft className="w-5 h-5 text-gray-400" />
        </button>
        <div className="flex items-center space-x-3 ml-4">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
            <FaApple className="w-4 h-4" />
          </div>
          <div>
            <h1 className="text-md font-semibold">Apple</h1>
            <p className="text-sm text-gray-500">5 boards • 24 members</p>
          </div>
        </div>
        <div className="ml-auto flex items-center space-x-2">
          <div className="relative border border-2 border-gray-200 rounded-lg">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <PiShare className="w-6 h-6 text-gray-400" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <IoIosSettings className="w-7 h-7 text-gray-400" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
