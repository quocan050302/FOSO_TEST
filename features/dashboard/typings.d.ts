export type TTopProduct = {
  number: number;
  label: string;
  percent: number;
  up: boolean;
};

export type TCategory = {
  category: string;
  planned: number;
  actual: number;
};
export type TCustomer = {
  name: string;
  value: number;
};

export type TPieData = {
  name: string;
  value: number;
  color: string;
};

export type TPieChart = {
  data: TPieData[];
  centerText: { title: string; value: number };
};
export type TProgressData = {
  name: string;
  total: number;
  completed: number;
  percent: number;
};

export type TMaterial = {
  id: number;
  name: string;
  code: string;
  type: string;
  unit: string;
  quantity: number;
};

export type TCardProduct = {
  title: string;
  children: React.ReactNode;
  selectOptions: string[];
  defaultValue: string;
  icon?: any;
};
