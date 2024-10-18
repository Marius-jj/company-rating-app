import './globals.css'; // Global styles
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Company Rating App</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; {new Date().getFullYear()} Company Rating App</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
