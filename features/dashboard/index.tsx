import React from 'react';
import TopProduct from './components/TopProduct/TopProduct';
import '../../styles/dashboard.css';
import ProductPlan from './components/ProductPlan/ProductPlan';
import ProductProgress from './components/ProductProgress/ProductProgress';

const Dashboard: React.FC = () => {
  return (
    <>
      <TopProduct />
      <ProductPlan />
      <ProductProgress />
    </>
  );
};

export default Dashboard;
