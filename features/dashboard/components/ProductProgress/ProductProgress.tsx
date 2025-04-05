import { Calendar, ChevronDown } from 'lucide-react';
import React from 'react';
import { ProductionPieChart } from './ProductionPieChart';
import { ProductionTeam } from '@/features/dashboard/components/ProductProgress/ProductionTeam';
import { MaterialsTable } from './MaterialsTable';
import CustomSelect from '@/components/common/CustomSelect';

const fakeDataProgress = ['Hôm nay', 'Hôm qua', 'Tháng này', 'Tháng trước'];
const fakeDataProduce = ['Hoàn thành', 'Đang sản xuất', 'Chưa hoàn thành'];
const fakeDataMaterial = ['Tuần này', 'Tuần trước', 'Tháng trước'];

const ProductProgress: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white col-span-1  rounded-lg p-6 shadow-of-card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Tình Hình Sản Xuất</h2>
            <CustomSelect
              initialValue={'Hôm nay'}
              data={fakeDataProgress}
              icon={Calendar}
            />
          </div>
          <div className="flex justify-center">
            <ProductionPieChart />
          </div>
        </div>

        <div className="bg-white col-span-1 rounded-lg p-6 shadow-of-card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Tiến Độ Sản Xuất Theo Nhóm</h2>
            <CustomSelect
              initialValue={'Hoàn thành'}
              data={fakeDataProduce}
              icon={null}
            />
          </div>
          <div className="flex justify-center">
            <ProductionTeam />
          </div>
        </div>
        <div className="bg-white col-span-1 rounded-lg p-6 shadow-of-card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Nguyên Vật Liệu Cần Mua</h2>
            <CustomSelect
              initialValue={'Tuần này'}
              data={fakeDataMaterial}
              icon={Calendar}
            />
          </div>
          <MaterialsTable />
        </div>
      </div>
    </div>
  );
};

export default ProductProgress;
