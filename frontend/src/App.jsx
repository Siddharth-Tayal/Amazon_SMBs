import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import List from "./Components/list/List";
import Navbar from "./Components/navBar/Navbar";
import MainLandingPage from "./Components/landingPage/MainLandingPage";
import { useAuthContext } from "./context/AuthContext";
import Services from "./Components/services/Services";
import AboutUs from "./Components/aboutUs/AboutUs";
import ContactUs from "./Components/contactUs/ContactUs";

const BASE_PATH = "/Amazon_SMBs/";

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="">
      <Routes>
        {/* Protected Route */}
        <Route
          path={`/`}
          element={
            <div>
              <Navbar />
              <MainLandingPage />
            </div>
          }
        />{" "}
        <Route
          path={`${BASE_PATH}`}
          element={
            <div>
              <Navbar />
              <MainLandingPage />
            </div>
          }
        />
        <Route
          path={`${BASE_PATH}home`}
          element={
            <div>
              <Navbar />
              <MainLandingPage />
            </div>
          }
        />
        {/* chat Route */}
        <Route
          path={`${BASE_PATH}chat`}
          element={
            authUser ? (
              <>
                <Navbar />
                <Home />
              </>
            ) : (
              <Navigate to={`${BASE_PATH}login`} />
            )
          }
        />
        {/* Login Route */}
        <Route
          path={`${BASE_PATH}login`}
          element={
            authUser ? (
              <Navigate to={`${BASE_PATH}home`} />
            ) : (
              <>
                <Navbar />
                <div className="w-[40%] m-auto mt-20 shadow-xl">
                  <Login />
                </div>
              </>
            )
          }
        />
        {/* SignUp Route */}
        <Route
          path={`${BASE_PATH}signup`}
          element={
            authUser ? (
              <Navigate to={`${BASE_PATH}home`} />
            ) : (
              <>
                <Navbar />
                <div className="w-[40%] m-auto mt-20 shadow-xl">
                  <SignUp />
                </div>
              </>
            )
          }
        />
        {/* list */}
        <Route
          path={`${BASE_PATH}list`}
          element={
            <div className="flex flex-col">
              <Navbar />
              <div className="m-5"></div>
              <List />
            </div>
          }
        />
        <Route
          path={`${BASE_PATH}services`}
          element={
            <div className="flex flex-col">
              <Navbar />
              <div className="m-5"></div>
              <Services />
            </div>
          }
        />
        <Route
          path={`${BASE_PATH}aboutus`}
          element={
            <div className="flex flex-col">
              <Navbar />
              <div className="m-5"></div>
              <AboutUs />
            </div>
          }
        />
        <Route
          path={`${BASE_PATH}contactus`}
          element={
            <div className="flex flex-col">
              <Navbar />
              <div className="m-5"></div>
              <ContactUs />
            </div>
          }
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
