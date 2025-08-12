// Wrapper for form sections

const FormSelection = ({ title, children }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
};

export default FormSelection;
