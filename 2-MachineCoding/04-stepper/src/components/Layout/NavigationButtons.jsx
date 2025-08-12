import { ChevronLeft, ChevronRight } from "lucide-react";

export const NavigationButtons = ({
  currentStep,
  totalSteps,
  onBack,
  onNext,
  onApply,
  isFormComplete,
}) => (
  <div className="flex justify-between">
    <button
      onClick={onBack}
      disabled={currentStep === 0}
      className={`flex items-center px-6 py-3 rounded-lg font-medium ${
        currentStep === 0
          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
          : "bg-gray-500 text-white hover:bg-gray-600"
      }`}
    >
      <ChevronLeft size={20} className="mr-2" />
      Back
    </button>

    {currentStep < totalSteps - 1 ? (
      <button
        onClick={onNext}
        className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600"
      >
        Continue
        <ChevronRight size={20} className="ml-2" />
      </button>
    ) : (
      <button
        onClick={onApply}
        disabled={!isFormComplete}
        className={`px-8 py-3 rounded-lg font-medium ${
          isFormComplete
            ? "bg-green-500 text-white hover:bg-green-600"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Apply
      </button>
    )}
  </div>
);
