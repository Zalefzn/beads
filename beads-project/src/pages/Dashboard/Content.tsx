'use client'


import React from 'react';
import './content.scss';

interface ContentProps {
  page: string;
}

const Content: React.FC<ContentProps> = ({ page }) => {
  return (
    <main className="main-content">
      {page === 'product' && <h2>Product Page</h2>}
      {page === 'transaction' && <h2>Transaction Page</h2>}
      {page === 'wishlist' && <h2>Wishlist Page</h2>}
    </main>
  );
};

export default Content;
