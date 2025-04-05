import { Calendar, ChevronDown } from 'lucide-react';
import React from 'react';
import { ProductionBarChart } from './ProductionBarChart';
import { TopCustomers } from './TopCustomers';
import { FaCaretDown } from 'react-icons/fa';
import CustomSelect from '@/components/common/CustomSelect';

const ProductPlan: React.FC = () => {
  const fakeDataKHSX = ['Quý này', 'Quý 1', 'Quý 2', 'Quý 3', 'Quý 4'];
  const fakeDataCustomer = ['Năm nay', 'Quý 1', 'Quý 2', 'Quý 3', 'Quý 4'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <div className="bg-white rounded-lg p-6 shadow-of-card">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Kế Hoạch Sản Xuất</h2>
          <CustomSelect
            initialValue={'Quý này'}
            data={fakeDataKHSX}
            icon={Calendar}
          />
        </div>
        <ProductionBarChart />
      </div>

      <div className="bg-white  rounded-lg p-6 shadow-of-card">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">
            Top 5 Khách Hàng Có Sản Lượng Nhiều Nhất
          </h2>
          <CustomSelect
            initialValue={'Năm nay'}
            data={fakeDataCustomer}
            icon={Calendar}
          />
        </div>
        <TopCustomers />
      </div>
    </div>
  );
};

export default ProductPlan;
