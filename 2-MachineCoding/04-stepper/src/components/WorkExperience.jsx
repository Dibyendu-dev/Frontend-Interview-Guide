import { FormInput } from "./UI/FormInput";

import FormSelection from "./UI/FormSelection";


export const WorkExperience = ({ data, onChange }) => (
  <FormSelection title="Work Experience Details">
    <div className="space-y-4">
      <FormInput
        placeholder="Current Company"
        value={data.currentCompany}
        onChange={(e) => onChange('currentCompany', e.target.value)}
      />
      <FormInput
        placeholder="Current Position"
        value={data.position}
        onChange={(e) => onChange('position', e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          type="number"
          placeholder="Years of Experience"
          value={data.yearsOfExperience}
          onChange={(e) => onChange('yearsOfExperience', e.target.value)}
        />
        <FormInput
          placeholder="Previous Company"
          value={data.previousCompany}
          onChange={(e) => onChange('previousCompany', e.target.value)}
        />
      </div>
      <textarea
        placeholder="Key Skills (comma separated)"
        value={data.skills}
        onChange={(e) => onChange('skills', e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24"
      />
    </div>
  </FormSelection>
);