import { useFieldArray, useFormContext, Controller } from "react-hook-form";
import Objective from "../objective";
import * as styles from "./style.css";
import { OkrFormSchema } from "../../types/okr-form-schema";
import { Goal, Key, Plus, Trash2 } from "lucide-react";
import { Accordion, Button, Form, Input } from "@/ui/components";
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
    append({ title: "", dueDate: new Date() });
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

      <div className={styles.keyResultForms}>
        {fields.map((field, index) => (
          <div key={field.id} className={styles.keyResultForm}>
            <Form.Group>
              <Form.Label>핵심 지표 제목</Form.Label>
              <Input
                {...register(`subGoals.${index}.title`)}
                placeholder="핵심 지표 제목"
              />
            </Form.Group>
            <Form.Group className={styles.keyResultDateGroup}>
              <Form.Label>마감일</Form.Label>
              <Controller
                control={control}
                name={`subGoals.${index}.dueDate`}
                render={({ field: { onChange, value } }) => (
                  <Input
                    type="date"
                    value={
                      value ? new Date(value).toISOString().split("T")[0] : ""
                    }
                    onChange={(e) => {
                      const date = e.target.value
                        ? new Date(e.target.value)
                        : null;
                      onChange(date);
                    }}
                  />
                )}
              />
            </Form.Group>
            <Button
              size="icon"
              variant="outline"
              onClick={() => remove(index)}
              disabled={fields.length === 1}
            >
              <Trash2 size={18} />
            </Button>
          </div>
        ))}
      </div>

      <Button onClick={handleAdd} size="md" width="full" variant="outline">
        <Plus size={16} />
        핵심 지표 추가
      </Button>
    </section>
  );
}

export default KeyResultsForm;
