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

const goals: Goal[] = [
  {
    id: "1",
    title: "개발 실력 향상하기",
    description: "프론트엔드 개발 스킬을 향상시키고 새로운 기술을 학습하기",
    deadline: "2024-12-31",
    method: "만다라트",
  },
  {
    id: "2",
    title: "건강 관리",
    description: "규칙적인 운동과 식단 관리를 통해 건강한 생활 습관 만들기",
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
          <h1 className={styles.title}>{goals.length}개의 목표</h1>
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
