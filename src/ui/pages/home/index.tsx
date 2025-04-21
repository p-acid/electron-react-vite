import { pageRoutes } from "@/ui/constants/page-routes";

function HomePage() {
  return (
    <main>
      Home<a href={pageRoutes.signIn}>로그인 페이지로</a>
    </main>
  );
}

export default HomePage;
