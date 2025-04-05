import { Calendar } from 'lucide-react';
import React from 'react';
import { ProductionPieChart } from './ProductionPieChart';
import { ProductionTeam } from '@/features/dashboard/components/ProductProgress/ProductionTeam';
import { MaterialsTable } from './MaterialsTable';
import CardProduct from '@/features/dashboard/components/ProductProgress/CardProduct';

const selects = {
  progress: ['Hôm nay', 'Hôm qua', 'Tháng này', 'Tháng trước'],
  produce: ['Hoàn thành', 'Đang sản xuất', 'Chưa hoàn thành'],
  material: ['Tuần này', 'Tuần trước', 'Tháng trước'],
};

const ProductProgress: React.FC = () => (
  <div className="grid grid-cols-12 gap-6 mb-8">
    <div className="col-span-12 lg:col-span-6 2xl:col-span-4">
      <CardProduct
        title="Tình Hình Sản Xuất"
        selectOptions={selects.progress}
        defaultValue="Hôm nay"
        icon={Calendar}
      >
        <div className="flex justify-center">
          <ProductionPieChart />
        </div>
      </CardProduct>
    </div>
    <div className="col-span-12 lg:col-span-6 2xl:col-span-4">
      <CardProduct
        title="Tiến Độ Sản Xuất Theo Nhóm"
        selectOptions={selects.produce}
        defaultValue="Hoàn thành"
      >
        <div className="flex justify-center">
          <ProductionTeam />
        </div>
      </CardProduct>
    </div>

    <div className="col-span-12 2xl:col-span-4">
      <CardProduct
        title="Nguyên Vật Liệu Cần Mua"
        selectOptions={selects.material}
        defaultValue="Tuần này"
        icon={Calendar}
      >
        <MaterialsTable />
      </CardProduct>
    </div>
  </div>
);

export default ProductProgress;
