import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./hover-min.css"
import { RouterProvider } from "react-router-dom";
import router from "./Layout/Router";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from "./auth provider/AuthProvider";


const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
