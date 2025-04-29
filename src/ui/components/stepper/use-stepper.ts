import { useState, useCallback } from "react";

interface UseStepperProps {
  initialStep?: number;
  count: number;
  onStepChange?: (step: number) => void;
}

export function useStepper({
  initialStep = 0,
  count,
  onStepChange,
}: UseStepperProps) {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const handleStepChange = useCallback(
    (step: number) => {
      if (step >= 0 && step < count) {
        setCurrentStep(step);
        onStepChange?.(step);
      }
    },
    [count, onStepChange]
  );

  return {
    currentStep,
    onChange: handleStepChange,
  };
}
