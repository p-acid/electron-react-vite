import { Card } from "@/ui/components";
import { ElementType, HTMLAttributes } from "react";

import * as styles from "./style.css";

interface FrameworkCardProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  description: string;
  icon: ElementType;
  selected?: boolean;
}

function FrameworkCard({
  id,
  title,
  description,
  icon: Icon,
  selected,
  ...props
}: FrameworkCardProps) {
  return (
    <Card.Root
      key={id}
      selectable
      className={styles.framworkCard}
      data-selected={selected}
      {...props}
    >
      <Card.Header>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div className={styles.iconWrapper}>
            <Icon size={20} />
          </div>
          <Card.Title>{title}</Card.Title>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Description>{description}</Card.Description>
      </Card.Body>
    </Card.Root>
  );
}

export default FrameworkCard;
