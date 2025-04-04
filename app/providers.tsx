import Layout from '@/components/layout';
import { TProvidersProps } from '@/types/layout';
import React from 'react';

const Providers: React.FC<TProvidersProps> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default Providers;
