'use client';
import { Cell, Pie, PieChart } from 'recharts';
import { ChartContainer } from '@/components/ui/chart';
import { useState } from 'react';

interface PieData {
  name: string;
  value: number;
  color: string;
}

export const ProductionPieChart: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

  const data: PieData[] = [
    { name: 'Đang sản xuất', value: 40, color: '#3276fa' },
    { name: 'Chưa hoàn thành', value: 30, color: '#ff8f0d' },
    { name: 'Hoàn thành', value: 30, color: '#1fc583' },
  ];

  const totalOrders = data.reduce((sum, item) => sum + item.value, 0);

  // Custom Label Function
  const renderLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    percent,
    index,
  }: any) => {
    const RADIAN = Math.PI / 180;
    const x = cx + (outerRadius + 20) * Math.cos(-midAngle * RADIAN); // Position label
    const y = cy + (outerRadius + 20) * Math.sin(-midAngle * RADIAN);
    const lineX = cx + (outerRadius + 5) * Math.cos(-midAngle * RADIAN);
    const lineY = cy + (outerRadius + 5) * Math.sin(-midAngle * RADIAN);

    return (
      <g>
        {/* Connector Line */}
        <line
          x1={lineX}
          y1={lineY}
          x2={x - 5}
          y2={y}
          stroke={data[index].color}
          strokeWidth="2"
        />
        {/* Percentage Label */}
        <foreignObject x={x - 15} y={y - 10} width="40" height="20">
          <div
            className="rounded-full px-2 py-1 text-xs font-bold text-white"
            style={{ backgroundColor: data[index].color, textAlign: 'center' }}
          >
            {`${(percent * 100).toFixed(0)}%`}
          </div>
        </foreignObject>
      </g>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <ChartContainer className="h-[250px] w-[250px]">
        <PieChart width={250} height={250}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={80}
            paddingAngle={3}
            cornerRadius={10}
            dataKey="value"
            label={renderLabel} // Attach the custom label function
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>

          {/* Centered Total Orders */}
          <text
            x="50%"
            y="45%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-bold text-2xl"
          >
            {totalOrders}
          </text>
          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-xs text-gray-500"
          >
            Lệnh sản xuất
          </text>
        </PieChart>
      </ChartContainer>
    </div>
  );
};
