import { Button } from "@/ui/components";
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
      <h2>Choose platform to sign in</h2>
      <Button size="md" onClick={signInWithGoogle}>
        Sign In with Google
      </Button>
    </main>
  );
}

export default SignInPage;
