import { Grid3x3, Key } from "lucide-react";
import * as styles from "./style.css";
import { Button } from "@/ui/components";
import { useState } from "react";
import { useNavigate } from "react-router";
import { pageRoutes } from "@/ui/constants/page-routes";
import FrameworkCard from "./ui/framework-card";

const methodOptions = [
  {
    id: "okr",
    title: "OKR",
    description:
      "목표와 핵심 결과를 통해 측정 가능한 성과를 추적하고 집중력을 유지하세요. 야심찬 목표 설정에 적합한 방법입니다.",
    icon: Key,
  },
  {
    id: "mandalart",
    title: "만다라트",
    description:
      "3x3 그리드 방식으로 체계적인 목표 달성을 도와줍니다. 주요 목표를 8개의 하위 목표로 나누고 상세한 실천 계획을 수립하세요.",
    icon: Grid3x3,
  },
];

function CreateGoalPage() {
  const [selectedFramework, setSelectedFramework] = useState<string>();

  const navigate = useNavigate();

  const handleFrameworkSelect = (methodId: string) => {
    setSelectedFramework(methodId);
  };

  const handleNext = () => {
    const nextRoute: Record<string, string> = {
      okr: pageRoutes.createOkr,
      mandalart: pageRoutes.createMandalart,
    };

    if (selectedFramework) {
      navigate(nextRoute[selectedFramework]);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>목표 설정 방식 선택</h1>
        <p className={styles.description}>
          당신의 목표 설정 스타일에 가장 잘 맞는 방법을 선택하세요
        </p>
      </header>

      <div className={styles.frameworkGrid}>
        {methodOptions.map((framework) => (
          <FrameworkCard
            key={framework.id}
            selected={selectedFramework === framework.id}
            onClick={() => handleFrameworkSelect(framework.id)}
            {...framework}
          />
        ))}
      </div>

      {selectedFramework && <Button onClick={handleNext}>다음</Button>}
    </div>
  );
}

export default CreateGoalPage;
