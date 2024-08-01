import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import AdoptPet from "./pages/AdoptPet";
import PetCare from "./pages/PetCare";
import PetStatus from "./pages/PetStatus";
import ErrorPage from "./pages/ErrorPage";
import Error from "./pages/error.jsx";
import Achievements from "./pages/Achievements.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Login /> },
      { path: "/home", element: <Home /> },
      { path: "/signup", element: <Signup /> },
      { path: "/adoptpet", element: <AdoptPet /> },
      { path: "/petcare", element: <PetCare /> },
      { path: "/petstatus", element: <PetStatus /> },
      { path: "/achievements", element: <Achievements /> },
      { path: "/errorpage", element: <ErrorPage /> },
      { path: "/error", element: <Error /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
