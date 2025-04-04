'use client';

import { Bar, BarChart, XAxis, YAxis, Legend } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import React from 'react';
import { customers } from '@/constant/dummyData';

export const TopCustomers: React.FC = () => {
  const formattedData = customers.map((customer) => ({
    name: customer.name,
    production: customer.value,
  }));

  return (
    <div className="h-[250px]">
      <ChartContainer
        config={{
          production: {
            label: 'Sản lượng',
            color: 'hsl(217, 95%, 59%)',
          },
        }}
      >
        <BarChart
          accessibilityLayer
          data={formattedData}
          layout="vertical"
          margin={{ top: 25, right: 30, left: 0, bottom: 5 }}
        >
          <Bar
            dataKey="production"
            fill="var(--color-production)"
            radius={[0, 4, 4, 0]}
            barSize={10}
            name="Sản lượng"
          />
          <XAxis
            type="number"
            tickLine={false}
            axisLine={false}
            domain={[0, 3200]}
            ticks={[0, 800, 1600, 2400, 3200]}
            label={{
              value: 'Sản lượng',
              position: 'insideLeft',
              offset: -90,
              transform: 'translate(0, -3)',
            }}
          />
          <YAxis
            dataKey="name"
            type="category"
            width={150}
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
            label={{
              value: 'Khách hàng',
              position: 'insideTop',
              offset: -10,
              transform: 'translate(20, 7)',
            }}
          />
          <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
          <Legend wrapperStyle={{ paddingTop: 10 }} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};
