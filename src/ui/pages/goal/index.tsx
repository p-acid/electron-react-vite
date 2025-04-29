import { Button } from "@/ui/components";
import * as styles from "./style.css";
import { useNavigate } from "react-router";
import { pageRoutes } from "@/ui/constants/page-routes";

interface Goal {
  id: string;
  title: string;
  description: string;
  deadline: string;
  method: "mandalart" | "okr";
}

// 임시 데이터
const goals: Goal[] = [
  {
    id: "1",
    title: "Improve Development Skills",
    description:
      "Enhance frontend development skills and learn new technologies",
    deadline: "2024-12-31",
    method: "mandalart",
  },
  {
    id: "2",
    title: "Health Management",
    description:
      "Create healthy lifestyle habits through regular exercise and diet",
    deadline: "2024-06-30",
    method: "okr",
  },
];

function GoalPage() {
  const navigate = useNavigate();

  const handleAddGoal = () => {
    navigate(pageRoutes.createGoal);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>{goals.length} Goals</h1>
          </div>
          <Button size="sm" onClick={handleAddGoal}>
            목표 생성하기
          </Button>
        </div>
      </header>

      <div className={styles.list}>
        {goals.map((goal) => (
          <article key={goal.id} className={styles.goalItem}>
            <div className={styles.goalContent}>
              <div className={styles.goalHeader}>
                <h2 className={styles.goalTitle}>{goal.title}</h2>
                <span className={styles.methodBadge}>
                  {goal.method === "mandalart" ? "Mandalart" : "OKR"}
                </span>
              </div>
              <p className={styles.goalDescription}>{goal.description}</p>
              <div className={styles.goalMeta}>
                <time className={styles.deadline}>
                  Deadline: {new Date(goal.deadline).toLocaleDateString()}
                </time>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default GoalPage;
