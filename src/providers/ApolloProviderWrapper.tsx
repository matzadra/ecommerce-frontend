"use client";

import React from "react";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "../services/apolloClient";

const client = createApolloClient();

const ApolloProviderWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderWrapper;
