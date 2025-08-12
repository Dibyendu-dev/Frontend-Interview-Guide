import { FormInput } from "./UI/FormInput";
import { FormSelect } from "./UI/FormSelect";

import FormSelection from "./UI/FormSelection";



export const BankDetails = ({ data, onChange }) => {
  const accountTypeOptions = [
    { value: 'savings', label: 'Savings' },
    { value: 'checking', label: 'Checking' },
    { value: 'business', label: 'Business' }
  ];

  return (
    <FormSelection title="Bank Details">
      <div className="space-y-4">
        <FormInput
          placeholder="Bank Name"
          value={data.bankName}
          onChange={(e) => onChange('bankName', e.target.value)}
        />
        <FormInput
          placeholder="Account Holder Name"
          value={data.accountHolderName}
          onChange={(e) => onChange('accountHolderName', e.target.value)}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            placeholder="Account Number"
            value={data.accountNumber}
            onChange={(e) => onChange('accountNumber', e.target.value)}
          />
          <FormInput
            placeholder="Routing Number"
            value={data.routingNumber}
            onChange={(e) => onChange('routingNumber', e.target.value)}
          />
        </div>
        <FormSelect
          options={accountTypeOptions}
          value={data.accountType}
          onChange={(e) => onChange('accountType', e.target.value)}
          placeholder="Select Account Type"
        />
      </div>
    </FormSelection>
  );
};