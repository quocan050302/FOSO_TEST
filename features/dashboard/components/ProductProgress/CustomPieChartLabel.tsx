'use client';

import { memo } from 'react';

const RADIAN = Math.PI / 180;

const CustomPieChartLabel: React.FC<any> = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  fill,
  payload,
  value,
  centerText,
}: any) => {
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 30;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';
  const percentText = `${((value / centerText.value) * 100).toFixed(0)}%`;

  return (
    <g>
      <text
        x="50%"
        y="45%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="font-bold text-2xl"
      >
        {centerText.value}
      </text>
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-xs text-[#667085]"
        color="#667085"
      >
        Lệnh sản xuất
      </text>

      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />

      <foreignObject x={ex - 20} y={ey - 12} width="60" height="40">
        <div
          className="flex items-center justify-center rounded-full text-xs font-bold text-white"
          style={{
            backgroundColor: fill,
            // width: '40px',
            height: '24px',
            borderRadius: '12px',
            textAlign: 'center',
          }}
        >
          {percentText}
        </div>
      </foreignObject>
    </g>
  );
};

export default memo(CustomPieChartLabel);
