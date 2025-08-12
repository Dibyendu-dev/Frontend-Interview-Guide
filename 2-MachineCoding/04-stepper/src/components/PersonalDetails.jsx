import { FormInput } from "./UI/FormInput";
import { FormSelect } from "./UI/FormSelect";
import FormSelection from "./UI/FormSelection";
 


export  const PersonalDetails = ({ data, onChange }) => {
  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <FormSelection title="Personal Details">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          placeholder="First Name"
          value={data.firstName}
          onChange={(e) => onChange('firstName', e.target.value)}
        />
        <FormInput
          placeholder="Last Name"
          value={data.lastName}
          onChange={(e) => onChange('lastName', e.target.value)}
        />
        <FormInput
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => onChange('email', e.target.value)}
        />
        <FormInput
          type="tel"
          placeholder="Phone"
          value={data.phone}
          onChange={(e) => onChange('phone', e.target.value)}
        />
        <FormInput
          type="date"
          placeholder="Date of Birth"
          value={data.dateOfBirth}
          onChange={(e) => onChange('dateOfBirth', e.target.value)}
        />
        <FormSelect
          options={genderOptions}
          value={data.gender}
          onChange={(e) => onChange('gender', e.target.value)}
          placeholder="Select Gender"
        />
      </div>
    </FormSelection>
  );
};