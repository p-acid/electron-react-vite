import { Button, Card } from "../../components";

import * as styles from "./style.css";

function SignInPage() {
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
          <Button size="md">GitHub로 로그인</Button>
        </Card.Body>
      </Card>
    </main>
  );
}

export default SignInPage;
