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
      <Card.Root>
        <Card.Header>
          <Card.Title>Welcome!</Card.Title>
          <Card.Description>Choose platform to sign in</Card.Description>
        </Card.Header>
        <Card.Body>
          <Button size="md" onClick={signInWithGoogle}>
            Sign In with Google
          </Button>
        </Card.Body>
      </Card.Root>
    </main>
  );
}

export default SignInPage;
