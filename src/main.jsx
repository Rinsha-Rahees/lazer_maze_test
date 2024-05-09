import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Description from "./components/Description.jsx";
import Instructions from "./components/Instructions.jsx";
import GameStartsIn from "./components/GameStartsIn.jsx";
import { gameDesc } from "./utils/Constants.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Description desc={gameDesc}/>,
      },
      {
        path: "/instruction",
        element: <Instructions />,
      },
    ],
  },
  {
    path: "/startgame",
    element: <GameStartsIn />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
