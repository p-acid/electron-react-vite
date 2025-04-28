import { ChangeEvent, useState } from "react";
import { Code2, Brain, GraduationCap, Goal } from "lucide-react";
import * as styles from "./style.css";
import { Accordion, Form, Input, Textarea } from "@/ui/components";

const examples = [
  {
    icon: Code2,
    title: "개발자로서 한 단계 성장하기",
    description:
      "프론트엔드 개발 스킬을 향상시키고 새로운 기술을 습득하여 더 나은 개발자로 성장하기",
  },
  {
    icon: Brain,
    title: "건강한 루틴 확립하기",
    description:
      "규칙적인 운동과 식단 관리를 통해 건강한 생활 습관을 만들고 유지하기",
  },
  {
    icon: GraduationCap,
    title: "정보처리기사 자격증 취득하기",
    description:
      "체계적인 학습 계획을 수립하고 실천하여 정보처리기사 자격증 시험에 합격하기",
  },
];

function ObjectiveForm() {
  const [objective, setObjective] = useState("");
  const [description, setDescription] = useState("");

  const handleObjectiveChange = (e: ChangeEvent<HTMLInputElement>) => {
    setObjective(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>목표 설정하기</h2>
        <p className={styles.description}>
          목표(Objective)는 당신이 진심으로 바라는 방향을 담아야 합니다.
          <br />
          구체적인 방법은 차차 찾아가면 되니, 먼저 마음을 움직이는 목표를
          세워보세요.
        </p>
      </div>

      <Accordion.Root>
        <Accordion.Item value="example">
          <Accordion.Trigger>
            <Goal size={18} />
            목표 설정 예시 알아보기
          </Accordion.Trigger>
          <Accordion.Content>
            <p className={styles.exampleDescription}>
              아래는 목표를 설정할 때 참고할 수 있는 몇 가지 예시입니다.
              <br />
              당신의 가치관과 비전에 맞게 목표를 설정하는 것이 중요하니, 예시를
              통해 영감을 얻고 나만의 목표를 구체화해보세요.
            </p>

            <div className={styles.exampleList}>
              {examples.map((example, index) => (
                <div key={index} className={styles.exampleItem}>
                  <div className={styles.iconWrapper}>
                    <example.icon size={20} />
                  </div>
                  <div className={styles.exampleContent}>
                    <h4 className={styles.exampleItemTitle}>{example.title}</h4>
                    <p className={styles.exampleItemDescription}>
                      {example.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>

      <Form.Root>
        <Form.Group>
          <Form.Label htmlFor="objective">Objective</Form.Label>
          <Input
            id="objective"
            value={objective}
            onChange={handleObjectiveChange}
            placeholder="달성하고자 하는 목표를 입력하세요"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="description">Description</Form.Label>
          <Textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="목표에 대한 상세 설명을 입력하세요"
          />
        </Form.Group>
      </Form.Root>
    </div>
  );
}

export default ObjectiveForm;
