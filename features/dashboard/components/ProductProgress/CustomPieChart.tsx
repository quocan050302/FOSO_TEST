'use client';
import CustomPieChartLabel from '@/features/dashboard/components/ProductProgress/CustomPieChartLabel';
import { TPieChart } from '@/features/dashboard/typings';
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const CustomPieChart: React.FC<TPieChart> = ({ data, centerText }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <PieChart
      width={500}
      height={300}
      className="max-[768px]:!w-full max-[768px]:!h-auto"
    >
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        paddingAngle={3}
        cornerRadius={10}
        innerRadius={55}
        outerRadius={80}
        label={<CustomPieChartLabel centerText={centerText} />}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip
        formatter={(value: number, name: string) => [`${value}`, `${name}`]}
        contentStyle={{
          backgroundColor: 'white',
          borderRadius: '8px',
          border: '1px solid #e5e7eb',
          fontSize: '0.875rem',
        }}
      />
    </PieChart>
  );
};

export default CustomPieChart;
