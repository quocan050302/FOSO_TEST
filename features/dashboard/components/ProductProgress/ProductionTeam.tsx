'use client';

import { Bar, BarChart, XAxis } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { progressData } from '@/constant/dummyData';

export const ProductionTeam: React.FC = () => {
  const formattedData = progressData.map((item) => ({
    name: item.name,
    completed: item.percent,
    total: 100,
    info: `${item.total} cái (${item.percent}%)`,
  }));

  return (
    <div className="w-full">
      <ChartContainer>
        {formattedData.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span>{item.name}</span>
              <span className="text-gray-500">{item.info}</span>
            </div>

            <BarChart
              data={item}
              layout="vertical"
              barGap={2}
              barCategoryGap={4}
              margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
              className="w-full"
            >
              <XAxis type="number" domain={[0, 100]} hide />

              <Bar
                dataKey="total"
                fill="hsl(220, 14%, 96%)"
                radius={[4, 4, 4, 4]}
                stackId="stack"
                fillOpacity={1}
              />
              <Bar
                dataKey="completed"
                fill="hsl(158, 73%, 45%)"
                radius={[4, 4, 4, 4]}
                stackId="stack"
                fillOpacity={1}
              />
              <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
            </BarChart>
          </div>
        ))}
      </ChartContainer>
    </div>
  );
};
