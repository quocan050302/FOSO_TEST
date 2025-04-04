import { Calendar, ChevronDown } from 'lucide-react';
import React from 'react';

const ProductProgress = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Tình Hình Sản Xuất</h2>
            <div className="flex items-center space-x-2 bg-white border rounded-md px-3 py-1.5 text-sm">
              <Calendar className="h-4 w-4 text-gray-500" />
              <span>Hôm nay</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
          </div>
          <div className="flex justify-center">
            {/* <ProductionPieChart /> */}
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4 text-center">
            <div className="bg-gray-50 p-3 rounded-md">
              <div className="text-2xl font-bold text-orange-500">5</div>
              <div className="text-xs text-gray-600">Chưa hoàn thành</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-md">
              <div className="text-2xl font-bold text-[#3276fa]">6</div>
              <div className="text-xs text-gray-600">Đang sản xuất</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-md">
              <div className="text-2xl font-bold text-[#1fc583]">5</div>
              <div className="text-xs text-gray-600">Hoàn thành</div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Tiến Độ Sản Xuất Theo Nhóm</h2>
            <div className="flex items-center space-x-2 bg-white border rounded-md px-3 py-1.5 text-sm">
              <span>Hoàn thành</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
          </div>
          {/* <ProductionProgress /> */}
        </div>
      </div>
    </div>
  );
};

export default ProductProgress;
