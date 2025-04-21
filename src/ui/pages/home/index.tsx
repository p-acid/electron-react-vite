import * as styles from "./style.css";

import { Card, MultiStep } from "@/ui/components";

function HomePage() {
  return (
    <main className={styles.pageWrapper}>
      <Card>
        <Card.Body>
          <MultiStep>
            <MultiStep.Header>
              <MultiStep.Indicator step={0} title="기본 정보" />
              <MultiStep.Indicator step={1} title="상세 정보" />
              <MultiStep.Indicator step={2} title="완료" />
            </MultiStep.Header>
            <MultiStep.Step step={0} title="기본 정보">
              <h2>기본 정보 입력</h2>
              {/* 폼 내용 */}
              <MultiStep.Navigation />
            </MultiStep.Step>
            <MultiStep.Step step={1} title="상세 정보">
              <h2>상세 정보 입력</h2>
              {/* 폼 내용 */}
              <MultiStep.Navigation />
            </MultiStep.Step>
            <MultiStep.Step step={2} title="완료">
              <h2>완료</h2>
              {/* 완료 내용 */}
              <MultiStep.Navigation />
            </MultiStep.Step>
          </MultiStep>
        </Card.Body>
      </Card>
    </main>
  );
}

export default HomePage;
