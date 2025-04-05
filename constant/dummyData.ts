import {
  TCategory,
  TCustomer,
  TMaterial,
  TPieData,
  TProgressData,
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

export const productMethod: TPieData[] = [
  { name: 'Đang sản xuất', value: 40, color: '#3276fa' },
  { name: 'Chưa hoàn thành', value: 30, color: '#ff8f0d' },
  { name: 'Hoàn thành', value: 30, color: '#1fc583' },
];

export const progressData: TProgressData[] = [
  { name: 'Áo sơ mi dài tay', total: 123, completed: 62, percent: 50 },
  { name: 'Áo sơ mi cụt tay', total: 321, completed: 241, percent: 75 },
  { name: 'Quần baggy', total: 231, completed: 104, percent: 45 },
  { name: 'Quần tây', total: 999, completed: 799, percent: 80 },
  { name: 'Đầm maxi', total: 876, completed: 788, percent: 90 },
  { name: 'Áo hoodie', total: 765, completed: 115, percent: 15 },
  { name: 'Áo khoác bomber', total: 543, completed: 130, percent: 24 },
];

export const materials: TMaterial[] = [
  {
    id: 1,
    name: 'Chỉ cotton',
    code: 'NYL_000014',
    type: '(none)',
    unit: 'Cuộn',
    quantity: 8,
  },
  {
    id: 2,
    name: 'Vải lụa',
    code: 'NYL_000034',
    type: '(none)',
    unit: 'Mét',
    quantity: 8,
  },
  {
    id: 3,
    name: 'Vải lót',
    code: 'NYL_000024',
    type: '(none)',
    unit: 'Mét',
    quantity: 8,
  },
  {
    id: 4,
    name: 'Vải chống thấm',
    code: 'NYL_000014',
    type: '(none)',
    unit: 'Mét',
    quantity: 8,
  },
  {
    id: 5,
    name: 'Vải nỉ',
    code: 'NYL_000014',
    type: '(none)',
    unit: 'Mét',
    quantity: 8,
  },
];
