interface SelectFieldProps {
  items: any[];
  onSelect: any
  itemKey: any;
  itemName: any;
  label?: string
}

function SelectField({ label, items, itemName, itemKey, onSelect }: SelectFieldProps) {
  const handleChange = (item: any) => {
    onSelect(item);
  };
  return (
      <>
      <label htmlFor="">{label}</label>
    <select
      onChange={(e) => {
        handleChange(items.find(f => f[itemKey] === e.target.value));
      }}
    >
      {items.map((m) => (
        <option key={m[itemKey]} value={m[itemKey]}>
          {m[itemName]}
        </option>
      ))}
    </select>
    </>
  );
}

export default SelectField;
