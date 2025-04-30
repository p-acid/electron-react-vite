import { ElementType } from "react";
import * as styles from "./style.css";

interface ObjectiveProps {
  title: string;
  description?: string;
  icon: ElementType;
}

function Objective({ title, description, icon: Icon }: ObjectiveProps) {
  return (
    <div className={styles.objective}>
      <div className={styles.iconWrapper}>
        <Icon size={18} />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
}

export default Objective;
