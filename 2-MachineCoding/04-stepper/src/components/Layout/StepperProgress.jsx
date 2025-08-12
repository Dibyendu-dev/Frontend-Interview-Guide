export const StepperProgress = ({ steps, currentStep }) => (
  <div className="flex flex-col">
    {steps.map((step, index) => {
      const Icon = step.icon;
      const isActive = index === currentStep;
      const isCompleted = index < currentStep;

      return (
        <div key={index} className="flex flex-col">
          <div className="flex items-center">
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                isActive
                  ? "bg-blue-500 text-white border-blue-500"
                  : isCompleted
                  ? "bg-green-500 text-white border-green-500"
                  : "bg-gray-200 text-gray-500 border-gray-300"
              }`}
            >
              <Icon size={20} />
            </div>
            <div className="ml-3">
              <p
                className={`text-sm font-medium ${
                  isActive
                    ? "text-blue-600"
                    : isCompleted
                    ? "text-green-600"
                    : "text-gray-400"
                }`}
              >
                {step.title}
              </p>
            </div>
          </div>

          {index < steps.length - 1 && (
            <div className="ml-6 pl-5">
              <div
                className={`w-0.5 h-6 ${
                  index < currentStep ? "bg-green-500" : "bg-gray-300"
                }`}
              />
            </div>
          )}
        </div>
      );
    })}
  </div>
);
