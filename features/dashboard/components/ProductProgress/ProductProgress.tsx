import { Calendar, ChevronDown } from 'lucide-react';
import React from 'react';
import { ProductionPieChart } from './ProductionPieChart';
import { ProductionTeam } from '@/features/dashboard/components/ProductProgress/ProductionTeam';

const ProductProgress: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white col-span-2  rounded-lg p-6 shadow-of-card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Tình Hình Sản Xuất</h2>
            <div className="flex items-center space-x-2 bg-white border rounded-md px-3 py-1.5 text-sm">
              <Calendar className="h-4 w-4 text-gray-500" />
              <span>Hôm nay</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
          </div>
          <div className="flex justify-center">
            <ProductionPieChart />
          </div>
        </div>

        <div className="bg-white col-span-2 rounded-lg p-6 shadow-of-card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Tiến Độ Sản Xuất Theo Nhóm</h2>
            <div className="flex items-center space-x-2 bg-white border rounded-md px-3 py-1.5 text-sm">
              <span>Hoàn thành</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
          </div>
          <div className="flex justify-center">
            <ProductionTeam />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductProgress;
