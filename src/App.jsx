import './App.css';
import MainLandingPage from './Components/landingPage/MainLandingPage';
import Navbar from './Components/navBar/Navbar';
import Chat from './Components/chat/Chat';
import Register from './Components/userProfile/Register';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Components/userProfile/Login';

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
    path: "/register",
    element: (
      <div>
        <Navbar />
        <Register />
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <Navbar />
        <Login />
      </div>
    ),
  },
  {
    path: "/chat",
    element: (
      <div>
        <Navbar />
        <Chat />
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
