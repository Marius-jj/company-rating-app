import './globals.css';
import React from 'react';
import { ReviewProvider } from './context/ReviewContext'; // Ensure ReviewProvider wraps the app

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ReviewProvider> {/* Wrap the entire app with ReviewProvider */}
          <header>
            <nav>
              {/* Navigation links */}
            </nav>
          </header>
          <main>{children}</main>
          <footer>
            <p>&copy; {new Date().getFullYear()} Company Rating App</p>
          </footer>
        </ReviewProvider>
      </body>
    </html>
  );
};

export default Layout;
