'use client';

import React from 'react';
import './globals.css';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { Provider } from 'react-redux';
import store, { persistor } from '@/store';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <html lang="en" className="green-code">
            <body>
              <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </body>
          </html>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}
