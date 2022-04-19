import { ReactNode } from "react";

interface SelectFieldProps {
  items: any[];
  onSelect: (selectId: any) => void;
  children: (item: any) => ReactNode;
  label?: any;
}

function SelectField({ label, items, children, onSelect }: SelectFieldProps) {
  const handleChange = (item: any) => {
    onSelect(item);
  };
  return (
    <>
      <label htmlFor="">{label}</label>
      <select
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      >
        {items.map((m) => children(m))}
      </select>
    </>
  );
}

export default SelectField;
