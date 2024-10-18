import './globals.css';
import React from 'react';
import Link from 'next/link';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">Submit Review</Link>
              </li>
              <li>
                <Link href="/reviews">View Reviews</Link>
              </li>
            </ul>
          </nav>
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
