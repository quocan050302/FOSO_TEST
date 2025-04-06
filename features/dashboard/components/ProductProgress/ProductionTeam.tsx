'use client';
import { progressData } from '@/constant/dummyData';
import React from 'react';

export const ProductionTeam: React.FC = () => {
  return (
    <div className="space-y-3 w-full h-full">
      {(progressData || []).map((item, index) => (
        <div key={index} className="space-y-4">
          <div className="flex justify-between text-sm">
            <span>{item.name}</span>
            <span className="text-gray-500">
              <strong className="text-[#1C252E] font-semibold">
                {item.total} cái
              </strong>{' '}
              ({item.percent}%)
            </span>
          </div>

          <div className="w-full h-2 bg-[#919EAB1F] rounded-full relative">
            <div
              className="absolute top-0 left-0 h-full bg-[#1FC583] rounded-full"
              style={{ width: `${item.percent}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
