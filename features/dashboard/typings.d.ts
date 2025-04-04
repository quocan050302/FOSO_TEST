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
  total: number,
  completed: number,
  percent: number
};
