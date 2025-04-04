import React from 'react';
import Header from '../Header';
import { TProvidersProps } from '@/types/layout';

const Layout: React.FC<TProvidersProps> = ({ children }) => {
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  );
};

export default Layout;
