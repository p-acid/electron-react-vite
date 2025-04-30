import { ReactNode } from "react";
import * as styles from "./style.css";
import { Badge } from "@/ui/components";

interface KeyResultProps {
  order: number;
  dueDate?: Date;
  children: ReactNode;
}

function KeyResult({ order, dueDate, children }: KeyResultProps) {
  return (
    <div className={styles.keyResult}>
      <div className={styles.keyResultNumber}>{order}</div>
      <p className={styles.keyResultContent}>{children}</p>
      <Badge>
        {dueDate ? `${dueDate.toLocaleDateString()} 까지` : "기한 없음"}
      </Badge>
    </div>
  );
}

export default KeyResult;
