import { Badge, Card } from "@/ui/components";
import * as styles from "./style.css";

interface GoalCardProps {
  title: string;
  description: string;
  deadline: string;
  method: string;
}

function GoalCard({
  title,
  description,
  deadline,
  method,
  ...props
}: GoalCardProps) {
  return (
    <Card.Root selectable {...props}>
      <Card.Header className={styles.header}>
        <Card.Title>{title}</Card.Title>
        <div className={styles.badges}>
          <Badge variant="primary">{method}</Badge>
          <Badge>{new Date(deadline).toLocaleDateString()} 까지</Badge>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Description>{description}</Card.Description>
      </Card.Body>
    </Card.Root>
  );
}

export default GoalCard;
