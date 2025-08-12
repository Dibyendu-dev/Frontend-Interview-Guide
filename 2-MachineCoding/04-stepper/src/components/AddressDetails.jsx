import { FormInput } from "./UI/FormInput";

import FormSelection from "./UI/FormSelection";

export const AddressDetails = ({ data, onChange }) => (
  <FormSelection title="Address Details">
    <div className="space-y-4">
      <FormInput
        placeholder="Street Address"
        value={data.street}
        onChange={(e) => onChange('street', e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          placeholder="City"
          value={data.city}
          onChange={(e) => onChange('city', e.target.value)}
        />
        <FormInput
          placeholder="State"
          value={data.state}
          onChange={(e) => onChange('state', e.target.value)}
        />
        <FormInput
          placeholder="ZIP Code"
          value={data.zipCode}
          onChange={(e) => onChange('zipCode', e.target.value)}
        />
        <FormInput
          placeholder="Country"
          value={data.country}
          onChange={(e) => onChange('country', e.target.value)}
        />
      </div>
    </div>
  </FormSelection>
);