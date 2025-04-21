import { useEffect } from "react";
import { useNavigate } from "react-router";

import { pageRoutes } from "@/ui/constants/page-routes";
import { supabase } from "@/ui/libs/supabase/base";

function OauthPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleOAuthCallback = async () => {
      try {
        const hashParams = window.location.hash;

        if (hashParams) {
          const { data, error } = await supabase.auth.getSession();

          if (error) {
            console.error("OAuth 에러:", error.message);

            navigate("/error", {
              state: {
                error: "로그인 중 오류가 발생했습니다.",
              },
            });
            return;
          }

          if (data.session) {
            console.log("로그인 성공:", data.session.user);

            navigate(pageRoutes.home, { replace: true });
          }
        }
      } catch (error) {
        console.error("예상치 못한 에러:", error);
        navigate(pageRoutes.signIn);
      }
    };

    handleOAuthCallback();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4">로그인 처리 중...</h2>
      </div>
    </div>
  );
}

export default OauthPage;
