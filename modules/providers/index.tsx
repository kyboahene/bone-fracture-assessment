import React from "react";
import FilterProvider from "@/lib/context/filter-context";
import { ReactQueryClientProvider } from "./react-query-client-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryClientProvider>
      <FilterProvider>{children}</FilterProvider>
    </ReactQueryClientProvider>
  );
};

export default Providers;
