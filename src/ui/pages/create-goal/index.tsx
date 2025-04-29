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
      "Set ambitious Objectives and measure progress through Key Results. Perfect for tracking measurable outcomes and maintaining focus.",
    icon: Key,
  },
  {
    id: "mandalart",
    title: "Mandalart",
    description:
      "Achieve your goals through a systematic 3x3 grid approach. Break down your main goal into 8 sub-goals and create detailed action plans.",
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
        <h1 className={styles.title}>Select Goal Setting Method</h1>
        <p className={styles.description}>
          Choose a method that best fits your goal setting style
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

      {selectedFramework && <Button onClick={handleNext}>Next</Button>}
    </div>
  );
}

export default CreateGoalPage;
