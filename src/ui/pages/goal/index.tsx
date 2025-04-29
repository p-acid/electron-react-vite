import { Button } from "@/ui/components";
import * as styles from "./style.css";
import { useNavigate } from "react-router";
import { pageRoutes } from "@/ui/constants/page-routes";
import GoalCard from "./ui/goal-card";

interface Goal {
  id: string;
  title: string;
  description: string;
  deadline: string;
  method: string;
}

// 임시 데이터
const goals: Goal[] = [
  {
    id: "1",
    title: "Improve Development Skills",
    description:
      "Enhance frontend development skills and learn new technologies",
    deadline: "2024-12-31",
    method: "Mandalart",
  },
  {
    id: "2",
    title: "Health Management",
    description:
      "Create healthy lifestyle habits through regular exercise and diet",
    deadline: "2024-06-30",
    method: "OKR",
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
          <h1 className={styles.title}>{goals.length} Goals</h1>
          <Button size="sm" onClick={handleAddGoal}>
            목표 생성하기
          </Button>
        </div>
      </header>

      <div className={styles.list}>
        {goals.map((goal) => (
          <GoalCard {...goal} />
        ))}
      </div>
    </div>
  );
}

export default GoalPage;
