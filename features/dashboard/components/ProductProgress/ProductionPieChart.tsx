'use client';
import { Cell, Pie, PieChart } from 'recharts';
import { ChartContainer } from '@/components/ui/chart';
import { useState } from 'react';
import { TPieData } from '@/features/dashboard/typings';
import CustomPieChart from '@/features/dashboard/components/ProductProgress/CustomPieChart';
import { productMethod } from '@/constant/dummyData';

export const ProductionPieChart: React.FC = () => {
  const totalOrders = productMethod.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="flex flex-col items-center">
      <CustomPieChart
        centerText={{ title: 'Lệnh sản xuất', value: totalOrders }}
        data={productMethod}
      />
      <div className="grid grid-cols-3 gap-2 mt-4 text-center w-full">
        {productMethod.map((item, index) => (
          <div
            key={index}
            className="shadow-of-card p-3 rounded-md col-span-1 border border-[#DDDDE2]"
          >
            <div style={{ color: item.color }} className="text-2xl font-bold">
              {item.value}
            </div>
            <div className="text-xs text-gray-600">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
