import { useEffect } from "react";
import { useNavigate } from "react-router";

import { pageRoutes } from "@/ui/constants/page-routes";
import { supabase } from "@/ui/libs/supabase/base";

import * as styles from "./style.css";

function OauthPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleOAuthCallback = async () => {
      try {
        const hashParams = window.location.hash;

        if (hashParams) {
          const { data, error } = await supabase.auth.getSession();

          if (error) {
            navigate(pageRoutes.signIn);
          }

          if (data.session) {
            navigate(pageRoutes.home, { replace: true });
          }
        }
      } catch (error) {
        console.error("Error during OAuth callback:", error);
        navigate(pageRoutes.signIn);
      }
    };

    handleOAuthCallback();
  }, [navigate]);

  return (
    <main className={styles.pageWrapper}>
      <h2>로그인 처리 중...</h2>
    </main>
  );
}

export default OauthPage;
