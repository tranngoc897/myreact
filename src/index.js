import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import store from "./store/index";
import Home from "./components/Home";
import AddPerson from "./components/AddPerson";
import GetPerson from "./components/GetPerson";

const root = document.getElementById("root");
const rootReact = createRoot(root);
