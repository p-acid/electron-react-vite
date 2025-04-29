export type Status = "completed" | "current" | "pending";

export interface Step {
  id: string;
  label: string;
  content?: React.ReactNode;
}

export interface StepperContextValue {
  currentStep: number;
  getStepStatus: (index: number) => Status;
  canGoNext: boolean;
  canGoPrev: boolean;
}
