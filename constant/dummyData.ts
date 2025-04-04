import {
  TCategory,
  TCustomer,
  TTopProduct,
} from '@/features/dashboard/typings';

export const topProducts: TTopProduct[] = [
  { number: 48, label: 'Áo sơ mi dài tay', percent: 8.2, up: true },
  { number: 18, label: 'Quần tây', percent: 5, up: false },
  { number: 40, label: 'Áo hoodie', percent: 12, up: true },
  { number: 23, label: 'Đầm maxi', percent: 3.5, up: true },
  { number: 48, label: 'Áo thun có trơn', percent: 4.7, up: true },
];

export const categories: TCategory[] = [
  { category: 'Áo thun polo', planned: 50, actual: 40 },
  { category: 'Áo ba lỗ', planned: 90, actual: 50 },
  { category: 'Áo sơ mi', planned: 70, actual: 45 },
  { category: 'Quần baggy', planned: 65, actual: 40 },
  { category: 'Quần jogger', planned: 80, actual: 50 },
];

export const customers: TCustomer[] = [
  { name: 'Công ty Dệt may Happy Kido', value: 2400 },
  { name: 'Công ty May mặc Saigon Trendy', value: 2200 },
  { name: 'Outlet Lemon squeeze', value: 2500 },
  { name: 'Shop quần áo streetwear New', value: 2100 },
  { name: 'Shop thời trang công sở Basic Office', value: 1900 },
];
