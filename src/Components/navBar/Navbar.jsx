import React, { useState } from "react";
import Logo from "./assets/Logo.jpeg";

export default function Navbar() {
  const [selectedPage, setSelectedPage] = useState("Home");

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="w-full h-[10vh] border-b-2">
      <div className="flex h-full justify-between">
        <div>
          <img src={Logo} alt="Logo" className="h-[100%]" />
        </div>
        <div>
          <ul className="flex h-full items-center">
            {["Home", "Services", "How it works", "Contact Us", "Partners", "Careers"].map(
              (page) => (
                <li
                  key={page}
                  className={`mx-5 h-full font-bold cursor-pointer transition-all text-center duration-300 flex items-center ${selectedPage === page ? "border-b-4 border-yellow-500" : ""
                    }`}
                  onClick={() => handlePageChange(page)}>
                  {page}
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="flex items-center">
          <p className="text-center h-full flex items-center p-3">Log in</p>
          <button className="bg-black text-white p-4 h-full">Register</button>
        </div>
      </div>
    </div>
  );
}
