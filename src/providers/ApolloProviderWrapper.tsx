'use client';

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from '@/services/apolloClient';

const client = createApolloClient();

console.log('ApolloProviderWrapper inicializado no cliente.');

const ApolloProviderWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderWrapper;
