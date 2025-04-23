import { useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

import * as styles from "./style.css";

import { pageRoutes } from "@/ui/constants/page-routes";
import { supabase } from "@/ui/libs/supabase/base";

function OauthPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleOAuthError = () => {
      navigate(pageRoutes.signIn);
      toast.error("로그인에 실패했습니다. 잠시 후 다시 시도해주세요.");
    };

    const handleOAuthCallback = async () => {
      try {
        const hashParams = window.location.hash;

        if (hashParams) {
          const { data, error } = await supabase.auth.getSession();

          if (error) {
            handleOAuthError();
            return;
          }

          if (data.session) {
            navigate(pageRoutes.home);
            toast.success("Sign in successful");
          }
        }
      } catch (error) {
        console.error("OAuth error:", error);
        handleOAuthError();
      }
    };

    handleOAuthCallback();
  }, [navigate]);

  return (
    <main className={styles.pageWrapper}>
      <h2>Loading...</h2>
    </main>
  );
}

export default OauthPage;
