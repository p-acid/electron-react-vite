import { Goal } from "lucide-react";
import * as styles from "./style.css";
import { Accordion, Form, Input, Textarea } from "@/ui/components";
import { useFormContext } from "react-hook-form";
import { OkrFormSchema } from "../../types/okr-form-schema";
import Objective from "../objective";
import { OBJECTIVE_EXAMPLES } from "../../constants/examples";

function ObjectiveForm() {
  const { register } = useFormContext<OkrFormSchema>();

  return (
    <section className={styles.container}>
      <Accordion.Root>
        <Accordion.Item value="example">
          <Accordion.Trigger>
            <Goal size={18} />
            목표 설정 예시
          </Accordion.Trigger>
          <Accordion.Content>
            <p className={styles.description}>
              아래는 목표를 설정할 때 참고할 수 있는 몇 가지 예시입니다. 당신의
              가치관과 비전에 맞게 목표를 설정하는 것이 중요하니, 예시를 통해
              영감을 얻고 나만의 목표를 구체화해보세요.
            </p>

            <div className={styles.exampleList}>
              {OBJECTIVE_EXAMPLES.map((example) => (
                <Objective key={example.title} {...example} />
              ))}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>

      <div className={styles.form}>
        <Form.Group>
          <Form.Label htmlFor="objective" required>
            목표
          </Form.Label>
          <Input
            {...register("goal.title")}
            id="objective"
            placeholder="달성하고자 하는 목표를 입력하세요"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="description">설명</Form.Label>
          <Textarea
            {...register("goal.description")}
            id="description"
            placeholder="목표에 대한 상세 설명을 입력하세요"
          />
        </Form.Group>
      </div>
    </section>
  );
}

export default ObjectiveForm;
