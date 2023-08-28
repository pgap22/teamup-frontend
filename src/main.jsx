import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./config/i18next.config";
import "./index.css";

import { router } from "./router";
import { QueryClient, QueryClientProvider } from "react-query";
import { SessionProvider } from "./context/Session";

import TranslationComponent from "./components/ui/TranslationComponent";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <SessionProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <TranslationComponent />
    </QueryClientProvider>
  </SessionProvider>
);
