import { ElementType } from "react";
import * as styles from "./style.css";

interface ObjectiveProps {
  title: string;
  description?: string;
  icon: ElementType;
}

function Objective({ title, description, icon: Icon }: ObjectiveProps) {
  return (
    <div className={styles.exampleItem}>
      <div className={styles.iconWrapper}>
        <Icon size={18} />
      </div>
      <div className={styles.exampleContent}>
        <p className={styles.exampleItemTitle}>{title}</p>
        {description && (
          <p className={styles.exampleItemDescription}>{description}</p>
        )}
      </div>
    </div>
  );
}

export default Objective;
