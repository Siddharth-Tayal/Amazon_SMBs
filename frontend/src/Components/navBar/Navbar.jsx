import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "./assets/Logo.jpeg";
import { auth, db } from "../userProfile/services/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";

const Navbar = React.memo(function Navbar() {
  const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState("Home");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handlePageChange = (page) => setSelectedPage(page);

  const handleRegister = () => {
    console.log("Navigate to login page or show login modal");
    navigate("/Amazon_SMBs/chat");
  };

  if (loading) {
    return (
      <div className="w-full h-[10vh] border-b-2 flex items-center justify-center">
        <p>Loading...</p> {/* Show loading message */}
      </div>
    );
  }

  return (
    <div className="w-full h-[10vh] border-b-2">
      <div className="flex h-full justify-between">
        <div>
          <img src={Logo} alt="Logo" className="h-[100%]" />
        </div>
        <div>
          <ul className="flex h-full items-center">
            {["Home", "Services", "About Us", "Contact Us", "Chat"].map((page) => (
              <li
                key={page}
                className={`mx-5 h-full font-bold cursor-pointer transition-all text-center duration-300 flex items-center ${selectedPage === page ? "border-b-4 border-yellow-500" : ""}`}
                onClick={() => handlePageChange(page)}
              >
                <Link to={`/${page.replace(/\s+/g, '').toLowerCase()}`} className="w-full h-full flex items-center justify-center">
                  {page}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          {(
            <>
              <button onClick={handleRegister} className="bg-black text-white p-4 h-full">
                Chat
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
});

export default Navbar;
