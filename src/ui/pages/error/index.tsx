import { useNavigate } from "react-router";
import * as styles from "./style.css";
import { Button } from "@/ui/components";
import { pageRoutes } from "@/ui/constants/page-routes";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>오류가 발생했습니다.</h1>
        <Button onClick={() => navigate(pageRoutes.home)}>
          홈으로 돌아가기
        </Button>
      </div>
    </main>
  );
}

export default ErrorPage;
