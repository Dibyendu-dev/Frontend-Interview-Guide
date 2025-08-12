import { FormInput } from "./UI/FormInput";
import { FormSelect } from "./UI/FormSelect";
import FormSelection from "./UI/FormSelection";

export const EducationalDetails = ({ data, onChange }) => {
  const degreeOptions = [
    { value: 'high-school', label: 'High School' },
    { value: 'associate', label: 'Associate Degree' },
    { value: 'bachelor', label: "Bachelor's Degree" },
    { value: 'master', label: "Master's Degree" },
    { value: 'doctorate', label: 'Doctorate' }
  ];

  return (
    <FormSelection title="Educational Details">
      <div className="space-y-4">
        <FormSelect
          options={degreeOptions}
          value={data.highestDegree}
          onChange={(e) => onChange('highestDegree', e.target.value)}
          placeholder="Select Highest Degree"
        />
        <FormInput
          placeholder="Institution Name"
          value={data.institution}
          onChange={(e) => onChange('institution', e.target.value)}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            type="number"
            placeholder="Graduation Year"
            value={data.graduationYear}
            onChange={(e) => onChange('graduationYear', e.target.value)}
          />
          <FormInput
            placeholder="GPA"
            value={data.gpa}
            onChange={(e) => onChange('gpa', e.target.value)}
          />
        </div>
        <FormInput
          placeholder="Field of Study"
          value={data.fieldOfStudy}
          onChange={(e) => onChange('fieldOfStudy', e.target.value)}
        />
      </div>
    </FormSelection>
  );
};

