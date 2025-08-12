// Reusable dropdown with options

export const FormSelect = ({
  options,
  value,
  onChange,
  placeholder,
  className = "",
}) => {
  return (
    <>
      <select
        value={value}
        onChange={onChange}
        className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};


