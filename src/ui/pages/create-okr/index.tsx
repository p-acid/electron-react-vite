import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Stepper, useStepper } from "@/ui/components";
import ObjectiveForm from "./ui/objective-form";
import * as styles from "./style.css";
import { okrFormSchema, OkrFormSchema } from "./types/okr-form-schema";

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
  const methods = useForm<OkrFormSchema>({
    resolver: zodResolver(okrFormSchema),
  });

  const count = STEPPER_MOCK.length;

  const { currentStep, onChange } = useStepper({
    count,
  });

  return (
    <main className={styles.pageWrapper}>
      <Stepper.Root currentStep={currentStep}>
        {STEPPER_MOCK.map((step) => (
          <Stepper.Step key={step.id}>{step.label}</Stepper.Step>
        ))}
      </Stepper.Root>

      <FormProvider {...methods}>
        <ObjectiveForm />
      </FormProvider>

      <div className={styles.navigation}>
        <Button
          disabled={currentStep <= 0}
          onClick={() => onChange(currentStep - 1)}
        >
          이전으로
        </Button>
        <Button
          disabled={currentStep >= count - 1}
          onClick={() => onChange(currentStep + 1)}
        >
          다음으로
        </Button>
      </div>
    </main>
  );
}

export default CreateOkrPage;
