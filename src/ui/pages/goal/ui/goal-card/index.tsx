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
        <Badge variant="primary">{method}</Badge>
      </Card.Header>
      <Card.Body>
        <Card.Description>{description}</Card.Description>
        <time className={styles.deadline}>
          Deadline: {new Date(deadline).toLocaleDateString()}
        </time>
      </Card.Body>
    </Card.Root>
  );
}

export default GoalCard;
