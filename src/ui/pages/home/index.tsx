import { MultiStep } from "@/ui/components";
import * as styles from "./style.css";

function HomePage() {
  return (
    <main className={styles.pageWrapper}>
      <MultiStep.Root>
        <MultiStep.Header>
          <MultiStep.Indicator step={0} title="Base" />
          <MultiStep.Indicator step={1} title="Details" />
          <MultiStep.Indicator step={2} title="Finish" />
        </MultiStep.Header>

        <MultiStep.Step step={0} title="Base">
          <h2>Write your main targets</h2>
        </MultiStep.Step>
        <MultiStep.Step step={1} title="Details">
          <h2>Write your sub targets for main target</h2>
          {/* 폼 내용 */}
        </MultiStep.Step>
        <MultiStep.Step step={2} title="Finish">
          <h2>Done!</h2>
          {/* 완료 내용 */}
        </MultiStep.Step>
        <MultiStep.Navigation />
      </MultiStep.Root>
    </main>
  );
}

export default HomePage;
