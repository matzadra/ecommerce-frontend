'use client';

import React from 'react';
import './globals.css';
import { ThemeProvider } from '../contexts/ThemeContext';
import ApolloProviderWrapper from '../providers/ApolloProviderWrapper';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { Provider } from 'react-redux';
import store from '@/store';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en" className="green-code">
        <body>
          <ApolloProviderWrapper>
            <ThemeProvider>
              <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </ThemeProvider>
          </ApolloProviderWrapper>
        </body>
      </html>
    </Provider>
  );
}
