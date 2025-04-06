import React from 'react';
import { topProducts } from '@/constant/dummyData';
import { ArrowUp, Calendar, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import arUp from '../../../../public/assets/images/ar-up.png';
import arDown from '../../../../public/assets/images/ar-down.png';

const TopProduct: React.FC = () => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4 gap-4">
        <h2 className="text-md md:text-lg font-medium">
          Top Sản Phẩm Sản Xuất Nhiều Nhất
        </h2>
        <div className="flex items-center space-x-2 bg-white border rounded-md px-3 py-1.5 text-sm">
          <Calendar className="h-4 w-4 text-gray-500" />
          <span>Tháng này</span>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 min-[430px]:grid-cols-2 md:grid-cols-5 gap-4">
        {topProducts.map((item, index) => (
          <div
            key={index}
            className="bg-white flex justify-between rounded-lg p-6 bg-[var(--background-paper, #FFF)] shadow-of-card "
          >
            <div>
              <div className="text-3xl font-bold text-[#3276fa] mb-1">
                {item.number ?? 0}
              </div>
              <div className="text-sm text-gray-600 mb-2 font-medium">
                {item.label ?? 'Chưa có mặt hàng'}
              </div>
            </div>
            <div className="flex items-center text-xs self-start ">
              <Image
                className="w-6 h-6"
                width={30}
                height={30}
                alt="arr-error"
                src={item.up ? arUp : arDown}
              ></Image>
              <span className="text-[#3A3E4C]">{item.percent ?? 0}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProduct;
