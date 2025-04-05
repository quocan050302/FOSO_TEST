'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar } from '@/components/ui/avatar';
import { materials } from '@/constant/dummyData';
import Image from 'next/image';
import logo from '../../../../public/assets/images/lg-filter.png';

export function MaterialsTable() {
  return (
    <div className="overflow-x-auto whitespace-nowrap w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10 md:w-[80px]">STT</TableHead>
            <TableHead>Nguyên vật liệu</TableHead>
            <TableHead>Đơn vị tính</TableHead>
            <TableHead className="text-right">Số lượng</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {materials.map((material) => (
            <TableRow key={material.id}>
              <TableCell className="font-medium">{material.id}</TableCell>
              <TableCell className="font-medium px-2 py-3">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 bg-[#D0D5DD] mr-3 rounded-sm">
                    <Image
                      src={logo}
                      className="w-4 h-6 m-auto"
                      width={30}
                      height={30}
                      alt="img-err"
                    ></Image>
                  </Avatar>
                  <div>
                    <div className="font-medium">{material.name}</div>
                    <div className="text-xs text-gray-500">{material.type}</div>
                    <div className="text-xs text-blue-500">{material.code}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{material.unit}</TableCell>
              <TableCell className="text-center">{material.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
