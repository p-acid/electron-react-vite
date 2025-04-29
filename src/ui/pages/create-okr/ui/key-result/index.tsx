import { ReactNode } from "react";
import * as styles from "./style.css";

interface KeyResultProps {
  order: number;
  children: ReactNode;
}

function KeyResult({ order, children }: KeyResultProps) {
  return (
    <div className={styles.keyResult}>
      <div className={styles.keyResultNumber}>{order}</div>
      <p className={styles.keyResultContent}>{children}</p>
    </div>
  );
}

export default KeyResult;
