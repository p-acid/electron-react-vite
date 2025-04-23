import { supabase } from "@/ui/libs/supabase/base";
import * as styles from "./style.css";

import { Button, MultiStep } from "@/ui/components";
import { toast } from "sonner";

function HomePage() {
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      toast.error("로그아웃 실패");
    } else {
      toast.success("로그아웃 성공");
    }
  };

  return (
    <main className={styles.pageWrapper}>
      <MultiStep.Root>
        <MultiStep.Header>
          <MultiStep.Indicator step={0} title="기본 정보" />
          <MultiStep.Indicator step={1} title="상세 정보" />
          <MultiStep.Indicator step={2} title="완료" />
        </MultiStep.Header>

        <MultiStep.Step step={0} title="기본 정보">
          <h2>기본 정보 입력</h2>
          <Button onClick={signOut}>로그아웃</Button>
        </MultiStep.Step>
        <MultiStep.Step step={1} title="상세 정보">
          <h2>상세 정보 입력</h2>
          {/* 폼 내용 */}
        </MultiStep.Step>
        <MultiStep.Step step={2} title="완료">
          <h2>완료</h2>
          {/* 완료 내용 */}
        </MultiStep.Step>
        <MultiStep.Navigation />
      </MultiStep.Root>
    </main>
  );
}

export default HomePage;
