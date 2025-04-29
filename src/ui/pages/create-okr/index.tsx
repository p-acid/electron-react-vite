import { Button, Stepper, useStepper } from "@/ui/components";
import ObjectiveForm from "./objective-form";
import * as styles from "./style.css";

const STEPPER_MOCK = [
  {
    id: 1,
    label: "목표 설정",
  },
  {
    id: 2,
    label: "핵심 지표 설정",
  },
  {
    id: 3,
    label: "확인",
  },
];

function CreateOkrPage() {
  const { currentStep, onChange } = useStepper({
    count: STEPPER_MOCK.length,
  });

  return (
    <main className={styles.pageWrapper}>
      <Stepper.Root currentStep={currentStep}>
        {STEPPER_MOCK.map((step, index) => (
          <Stepper.Step key={step.id} index={index}>
            {step.label}
          </Stepper.Step>
        ))}
      </Stepper.Root>
      <ObjectiveForm />
      <Button onClick={() => onChange(currentStep + 1)}>다음으로</Button>
    </main>
  );
}

export default CreateOkrPage;
