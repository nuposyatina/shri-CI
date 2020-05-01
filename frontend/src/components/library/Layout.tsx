import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <main className="Layout">
    { children }
  </main>
);

export default Layout;
