import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./config/i18next.config";
import "./index.css";

import { router } from "./router";
import { QueryClient, QueryClientProvider } from "react-query";
import { SessionProvider } from "./context/Session";
import ServerStatus from "./pages/serverStatus";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <ServerStatus>
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
      </QueryClientProvider>
    </SessionProvider>
  </ServerStatus>
);
