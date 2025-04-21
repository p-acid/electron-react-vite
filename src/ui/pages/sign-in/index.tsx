import { Button, Card } from "@/ui/components";
import { supabase } from "@/ui/libs/supabase/base";

import * as styles from "./style.css";

function SignInPage() {
  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/oauth`,
      },
    });
  };

  return (
    <main className={styles.pageWrapper}>
      <Card>
        <Card.Header>
          <Card.Title>환영합니다!</Card.Title>
          <Card.Description>
            플랫폼을 선택하여 로그인 해주세요.
          </Card.Description>
        </Card.Header>
        <Card.Body>
          <Button size="md" onClick={signInWithGoogle}>
            Sign In with Google
          </Button>
        </Card.Body>
      </Card>
    </main>
  );
}

export default SignInPage;
