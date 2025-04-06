import CustomSelect from '@/components/common/CustomSelect';
import { TCardProduct } from '@/features/dashboard/typings';

const CardProduct: React.FC<TCardProduct> = ({
  title,
  children,
  selectOptions,
  defaultValue,
  icon,
}) => (
  <div className="bg-white rounded-lg p-6 shadow-of-card h-full">
    <div className="flex justify-between items-center mb-4 gap-4">
      <h2 className="text-md sm:text-lg font-medium">{title}</h2>
      <CustomSelect
        initialValue={defaultValue}
        data={selectOptions}
        icon={icon}
      />
    </div>
    {children}
  </div>
);

export default CardProduct;
