import React from 'react';
import './globals.css';
import { ThemeProvider } from '../contexts/ThemeContext';
import ApolloProviderWrapper from '../providers/ApolloProviderWrapper';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="green-code">
      <body>
        <ApolloProviderWrapper>
          <ThemeProvider>{children}</ThemeProvider>
        </ApolloProviderWrapper>
      </body>
    </html>
  );
}
