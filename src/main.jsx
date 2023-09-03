import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./config/i18next.config";
import "./index.css";

import { router } from "./router";
import { QueryClient, QueryClientProvider } from "react-query";
import { SessionProvider } from "./context/Session";
import ServerStatus from "./pages/serverStatus";
import { TranaslationProvider } from "./context/Translate";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <ServerStatus>
    <SessionProvider>
      <TranaslationProvider>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
      </TranaslationProvider>
    </SessionProvider>
  </ServerStatus>
);
