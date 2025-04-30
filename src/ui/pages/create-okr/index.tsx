import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Stepper, useStepper } from "@/ui/components";
import ObjectiveForm from "./ui/objective-form";
import * as styles from "./style.css";
import { okrFormSchema, OkrFormSchema } from "./types/okr-form-schema";
import KeyResultsForm from "./ui/key-results-form";
import Confirm from "./ui/confirm";
import { useMemo } from "react";

const STEPPER_MOCK = [
  {
    id: 1,
    title: "목표 설정",
    description: (
      <>
        목표(Objective)는 당신이 진심으로 바라는 방향을 담아야 합니다.
        <br />
        구체적인 방법은 차차 찾아가면 되니, 먼저 마음을 움직이는 목표를
        세워보세요.
      </>
    ),
  },
  {
    id: 2,
    title: "핵심 지표 설정",
    description: (
      <>
        핵심 지표는(Key Results)는 목표를 달성했다고 생각할 수 있는 지표들이어야
        합니다.
        <br />
        작성한 목표를 달성하기 위한 구체적인 기준과 수치를 정의해보세요.
      </>
    ),
  },
  {
    id: 3,
    title: "확인하기",
    description: (
      <>
        마지막으로 목표와 핵심 지표를 확인하며 둘 사이의 연관성이 어색하지
        않은지 확인해보세요.
      </>
    ),
  },
];

function CreateOkrPage() {
  const methods = useForm<OkrFormSchema>({
    resolver: zodResolver(okrFormSchema),
    defaultValues: {
      subGoals: [
        {
          title: "",
          dueDate: new Date(),
        },
      ],
    },
  });

  const count = STEPPER_MOCK.length;

  const { currentStep, onChange } = useStepper({
    count,
  });

  const { title, description } = STEPPER_MOCK[currentStep];

  const stepComponents = useMemo(
    () => [<ObjectiveForm />, <KeyResultsForm />, <Confirm />],
    []
  );

  return (
    <main className={styles.pageWrapper}>
      <Stepper.Root currentStep={currentStep}>
        {STEPPER_MOCK.map((step) => (
          <Stepper.Step key={step.id}>{step.title}</Stepper.Step>
        ))}
      </Stepper.Root>

      <div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>

      <FormProvider {...methods}>{stepComponents[currentStep]}</FormProvider>

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
