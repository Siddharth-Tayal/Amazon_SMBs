import './App.css';
import MainLandingPage from './Components/landingPage/MainLandingPage';
import Navbar from './Components/navBar/Navbar';
import UserProfile from './Components/userProfile/userProfile';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <MainLandingPage />
      </div>
    ),
  },
  {
    path: "/home",
    element: (
      <div>
        <Navbar />
      </div>
    ),
  },
  {
    path: "/Users",
    element: (
      <div>
        <Navbar />
        <UserProfile />
      </div>
    ),
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
