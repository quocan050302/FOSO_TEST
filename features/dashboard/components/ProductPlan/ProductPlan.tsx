import { Calendar, ChevronDown } from 'lucide-react';
import React from 'react';
import { ProductionBarChart } from './ProductionBarChart';
import { TopCustomers } from './TopCustomers';

const ProductPlan: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <div className="bg-white rounded-lg p-6 shadow-of-card">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Kế Hoạch Sản Xuất</h2>
          <div className="flex items-center space-x-2 bg-white border rounded-md px-3 py-1.5 text-sm">
            <Calendar className="h-4 w-4 text-gray-500" />
            <span>Quý này</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
        </div>
        <ProductionBarChart />
      </div>

      <div className="bg-white  rounded-lg p-6 shadow-of-card">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">
            Top 5 Khách Hàng Có Sản Lượng Nhiều Nhất
          </h2>
          <div className="flex items-center space-x-2 bg-white border rounded-md px-3 py-1.5 text-sm">
            <Calendar className="h-4 w-4 text-gray-500" />
            <span>Năm nay</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
        </div>
        <TopCustomers />
      </div>
    </div>
  );
};

export default ProductPlan;
