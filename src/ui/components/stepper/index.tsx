import {
  createContext,
  useContext,
  useMemo,
  ReactNode,
  Children,
  isValidElement,
  cloneElement,
} from "react";
import { Check } from "lucide-react";
import * as styles from "./style.css.ts";
import type { Step, Status, StepperContextValue } from "./types";

const StepperContext = createContext<StepperContextValue | null>(null);

interface RootProps {
  currentStep: number;
  children: ReactNode;
}

function Root({ currentStep, children }: RootProps) {
  const count = Children.count(children);

  const value = useMemo<StepperContextValue>(() => {
    const getStepStatus = (index: number): Status => {
      if (index < currentStep) return "completed";
      if (index === currentStep) return "current";
      return "pending";
    };

    return {
      currentStep,
      getStepStatus,
      canGoNext: currentStep < count - 1,
      canGoPrev: currentStep > 0,
    };
  }, [currentStep, count]);

  return (
    <StepperContext.Provider value={value}>
      <div className={styles.stepper}>
        {Children.map(children, (child, index) => {
          if (isValidElement<StepProps>(child) && child.type === Step) {
            return cloneElement(child, { index });
          }
          return child;
        })}
      </div>
    </StepperContext.Provider>
  );
}

interface StepProps {
  index?: number;
  children: ReactNode;
}

function Step({ children, index = 0 }: StepProps) {
  const context = useContext(StepperContext);
  if (!context) throw new Error("StepIndicator must be used within Stepper");

  const { getStepStatus } = context;
  const status = getStepStatus(index);

  return (
    <div className={styles.step}>
      <div className={styles.indicator({ status })}>
        {status === "completed" ? <Check size={12} /> : index + 1}
      </div>
      <span className={styles.label({ status })}>{children}</span>
    </div>
  );
}

const Stepper = {
  Root,
  Step,
};

export default Stepper;
