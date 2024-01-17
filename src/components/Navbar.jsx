import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Navbar({ handleSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery]);
  return (
    <>
      <div className=" flex justify-between px-12  py-2 shadow-lg">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img
            className="h-10"
            src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Stack_Overflow_logo.png"
            alt="logo"
          />
        </div>
        <div className=" w-[60%]">
          <>
            <div className="relative  ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none rounded-lg">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                required=""
              />
            </div>
          </>
        </div>
        <div className="hidden 2xl:flex gap-9 py-3">
          <div className="cursor-pointer">About</div>
          <div className="cursor-pointer">Product</div>
          <div className="cursor-pointer">For teams</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
