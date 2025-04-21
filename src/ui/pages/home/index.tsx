import { Button } from "@/ui/components";
import { pageRoutes } from "@/ui/constants/page-routes";
import { supabase } from "@/ui/libs/supabase/base";
import { toast } from "sonner";

function HomePage() {
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      toast.error("로그아웃에 실패했습니다.");
    } else {
      toast.success("성공적으로 로그아웃 되었습니다.");
    }
  };

  return (
    <main>
      Home<a href={pageRoutes.signIn}>로그인 페이지로</a>
      <Button onClick={signOut}>Sign Out</Button>
    </main>
  );
}

export default HomePage;
