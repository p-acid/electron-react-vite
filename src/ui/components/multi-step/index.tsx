import { createContext, useContext, useState, ReactNode } from "react";
import { Button } from "@/ui/components";
import * as styles from "./style.css";
import clsx from "clsx";

interface StepContextValue {
  currentStep: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  next: () => void;
  prev: () => void;
  goTo: (step: number) => void;
}

const StepContext = createContext<StepContextValue | null>(null);

interface MultiStepRootProps {
  children: ReactNode;
  initialStep?: number;
}

function Root({ children, initialStep = 0 }: MultiStepRootProps) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const steps = Array.isArray(children) ? children : [children];

  const next = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prev = () => setCurrentStep((prev) => Math.max(prev - 1, 0));
  const goTo = (step: number) => setCurrentStep(step);

  const value = {
    currentStep,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
    next,
    prev,
    goTo,
  };

  return (
    <StepContext.Provider value={value}>
      <div className={styles.wrapper}>{children}</div>
    </StepContext.Provider>
  );
}

interface StepProps {
  children: ReactNode;
  title: string;
  step: number;
}

function Step({ children, step }: StepProps) {
  const ctx = useContext(StepContext);
  if (!ctx) throw new Error("Step must be used within MultiStep");

  const { currentStep } = ctx;
  const isActive = step === currentStep;

  if (!isActive) return null;

  return <div className={styles.content}>{children}</div>;
}

interface StepHeaderProps {
  children: ReactNode;
}

function StepHeader({ children }: StepHeaderProps) {
  return <div className={styles.header}>{children}</div>;
}

interface StepIndicatorProps {
  step: number;
  title: string;
}

function StepIndicator({ step, title }: StepIndicatorProps) {
  const ctx = useContext(StepContext);
  if (!ctx) throw new Error("StepIndicator must be used within MultiStep");

  const { currentStep } = ctx;
  const isActive = step === currentStep;
  const isCompleted = step < currentStep;

  return (
    <div className={styles.step}>
      <div
        className={clsx(
          styles.stepIndicator,
          isActive && styles.activeStep,
          isCompleted && styles.completedStep
        )}
      >
        {step + 1}
      </div>
      <span className={styles.stepTitle}>{title}</span>
    </div>
  );
}

function Navigation() {
  const ctx = useContext(StepContext);
  if (!ctx) throw new Error("Navigation must be used within MultiStep");

  const { isFirstStep, isLastStep, prev, next } = ctx;

  return (
    <div className={styles.navigation}>
      {!isFirstStep && <Button onClick={prev}>이전</Button>}
      {!isLastStep && <Button onClick={next}>다음</Button>}
    </div>
  );
}

const MultiStep = Object.assign(Root, {
  Step,
  Header: StepHeader,
  Indicator: StepIndicator,
  Navigation,
});

export default MultiStep;
