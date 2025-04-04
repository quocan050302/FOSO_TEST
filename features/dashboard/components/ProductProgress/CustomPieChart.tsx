import CustomPieChartLabel from '@/features/dashboard/components/ProductProgress/CustomPieChartLabel';
import { TPieChart } from '@/features/dashboard/typings';
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const CustomPieChart: React.FC<TPieChart> = ({ data, centerText }) => {
  return (
    <PieChart width={600} height={300}>
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
    </PieChart>
  );
};

export default CustomPieChart;
