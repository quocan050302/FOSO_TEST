'use client';

import { categories } from '@/constant/dummyData';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { CustomLegend } from './CustomLegend';

export function ProductionBarChart() {
  return (
    <div className="w-full ">
      <ChartContainer
        config={{
          planned: {
            label: 'Kế hoạch',
            color: 'hsl(217, 95%, 59%)',
          },
          actual: {
            label: 'Thực hiện',
            color: 'hsl(158, 73%, 45%)',
          },
        }}
      >
        <ResponsiveContainer width="100%">
          <BarChart
            data={categories}
            margin={{ top: 10, right: 10, left: 10, bottom: 24 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <Legend
              verticalAlign="top"
              align="right"
              content={<CustomLegend />}
              wrapperStyle={{ padding: '10px' }}
            />
            <XAxis
              dataKey="category"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
              tickMargin={8}
              label={{
                value: 'Mặt hàng',
                position: 'insideLeft',
                offset: -40,
                transform: 'translate(-20, 10)',
              }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
              tickCount={6}
              domain={[0, 100]}
              label={{
                value: 'Cái',
                position: 'insideTop',
                offset: 10,
                transform: 'translate(15, -45)',
              }}
            />
            <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
            <Bar
              dataKey="planned"
              fill="var(--color-planned)"
              radius={[4, 4, 0, 0]}
              barSize={20}
              name="Kế hoạch"
            />
            <Bar
              dataKey="actual"
              fill="var(--color-actual)"
              radius={[4, 4, 0, 0]}
              barSize={20}
              name="Thực hiện"
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}
