import { useState } from "react";
import {
  User,
  MapPin,
  GraduationCap,
  Briefcase,
  CreditCard,
} from "lucide-react";
import { PersonalDetails } from "./PersonalDetails";
import { AddressDetails } from "./AddressDetails";
import { EducationalDetails } from "./EducationalDetails";
import { WorkExperience } from "./WorkExperience";
import { BankDetails } from "./BankDetails";
import { NavigationButtons } from "./Layout/NavigationButtons";
import { StepperProgress } from "./Layout/StepperProgress";

const StepperForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    personal: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      gender: "",
    },
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
    education: {
      highestDegree: "",
      institution: "",
      graduationYear: "",
      gpa: "",
      fieldOfStudy: "",
    },
    workExperience: {
      currentCompany: "",
      position: "",
      yearsOfExperience: "",
      previousCompany: "",
      skills: "",
    },
    bankDetails: {
      bankName: "",
      accountNumber: "",
      routingNumber: "",
      accountType: "",
      accountHolderName: "",
    },
  });

  const steps = [
    { title: "Personal Details", icon: User },
    { title: "Address Details", icon: MapPin },
    { title: "Educational Details", icon: GraduationCap },
    { title: "Work Experience", icon: Briefcase },
    { title: "Bank Details", icon: CreditCard },
  ];

  const updateFormData = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleApply = () => {
    console.log("All Form Data:", formData);
    alert("Application submitted! Check console for details.");
  };

  const isFormComplete = () => {
    return Object.values(formData).every((section) =>
      Object.values(section).every((field) => field.trim() !== "")
    );
  };

  const renderStepContent = () => {
    const stepComponents = [
      <PersonalDetails
        data={formData.personal}
        onChange={(field, value) => updateFormData("personal", field, value)}
      />,
      <AddressDetails
        data={formData.address}
        onChange={(field, value) => updateFormData("address", field, value)}
      />,
      <EducationalDetails
        data={formData.education}
        onChange={(field, value) => updateFormData("education", field, value)}
      />,
      <WorkExperience
        data={formData.workExperience}
        onChange={(field, value) =>
          updateFormData("workExperience", field, value)
        }
      />,
      <BankDetails
        data={formData.bankDetails}
        onChange={(field, value) => updateFormData("bankDetails", field, value)}
      />,
    ];

    return stepComponents[currentStep];
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Application Form</h2>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 md:flex-shrink-0">
          <StepperProgress steps={steps} currentStep={currentStep} />
        </aside>

        <main className="flex-1">
          <div className="mb-8">{renderStepContent()}</div>

          <NavigationButtons
            currentStep={currentStep}
            totalSteps={steps.length}
            onBack={handleBack}
            onNext={handleNext}
            onApply={handleApply}
            isFormComplete={isFormComplete()}
          />
        </main>
      </div>
    </div>
  );
};

export default StepperForm;
