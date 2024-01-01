import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from "@tanstack/react-query";

// const queryClient = new QueryClient();
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <RouterProvider router={routes}></RouterProvider>
            </AuthProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
