import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { TSelectComponent } from './typings';

const CustomSelect: React.FC<TSelectComponent> = ({
  initialValue,
  data,
  icon: Icon,
}) => (
  <Select value={initialValue}>
    <SelectTrigger className="w-[140px] text-opacityBlack">
      {Icon && <Icon className="h-4 w-4 text-gray-500" />}
      <SelectValue placeholder="Chọn quý" className="text-opacityBlack" />
    </SelectTrigger>
    <SelectContent>
      {data.map((option, index) => (
        <SelectItem key={index} value={option}>
          {option}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

export default CustomSelect;
