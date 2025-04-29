import { useFieldArray, useFormContext } from "react-hook-form";
import Objective from "../objective";
import * as styles from "./style.css";
import { OkrFormSchema } from "../../types/okr-form-schema";
import { Goal, Key, Plus, Trash2 } from "lucide-react";
import { Accordion, Button, Input, Textarea } from "@/ui/components";
import { KEY_RESULT_EXAMPLES } from "../../constants/examples";
import KeyResult from "../key-result";

function KeyResultsForm() {
  const { control, register, getValues } = useFormContext<OkrFormSchema>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "subGoals",
  });

  const goal = getValues("goal");

  const handleAdd = () => {
    append({ title: "", description: "", dueDate: new Date() });
  };

  return (
    <section className={styles.container}>
      <Objective
        icon={Goal}
        title={goal.title}
        description={goal.description}
      />

      <Accordion.Root>
        <Accordion.Item value="example">
          <Accordion.Trigger>
            <Key size={18} />
            핵심 지표 설정 예시
          </Accordion.Trigger>
          <Accordion.Content>
            <p className={styles.description}>
              Key Results는 나중에 "달성했는지" 명확히 판단할 수 있도록 수치나
              결과가 뚜렷하게 보이게 써보세요. Objective가 방향이라면, KR은 그
              방향으로 가는 체크포인트니까 "내가 뭘 하면 성장했다고 할 수
              있을까?"를 기준으로 생각해보면 편해요. 앞의 예시 목표를 토대로 몇
              가지 예시를 들어볼게요.
            </p>

            <div className={styles.exampleGroup}>
              <p className={styles.exampleSubtitle}>목표</p>
              <Objective {...KEY_RESULT_EXAMPLES.objective} />
            </div>

            <div className={styles.exampleGroup}>
              <p className={styles.exampleSubtitle}>핵심 지표</p>
              <div className={styles.keyResults}>
                {KEY_RESULT_EXAMPLES.keyResults.map((keyResult, index) => (
                  <KeyResult key={keyResult} order={index + 1}>
                    {keyResult}
                  </KeyResult>
                ))}
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>

      {fields.map((field, index) => (
        <div key={field.id} className={styles.keyResultField}>
          <div className={styles.keyResultHeader}>
            <div className={styles.keyResultNumber}>{index + 1}</div>
            <Button
              size="sm"
              onClick={() => remove(index)}
              disabled={fields.length === 1}
            >
              <Trash2 size={16} />
            </Button>
          </div>

          <div className={styles.keyResultInputs}>
            <Input
              {...register(`subGoals.${index}.title`)}
              placeholder="핵심 지표 제목"
            />
            <Textarea
              {...register(`subGoals.${index}.description`)}
              placeholder="핵심 지표 설명"
            />
            <Input type="date" {...register(`subGoals.${index}.dueDate`)} />
          </div>
        </div>
      ))}

      <Button onClick={handleAdd} size="sm">
        <Plus size={16} />
        핵심 지표 추가
      </Button>
    </section>
  );
}

export default KeyResultsForm;
