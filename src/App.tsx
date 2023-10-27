import * as React from "react";

import "./App.css";
import AppRouter from "./AppRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ABPolloClient from "./api/apollo";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <ABPolloClient>
        <QueryClientProvider client={queryClient}>
          <AppRouter />
        </QueryClientProvider>
      </ABPolloClient>
    </>
  );
}
