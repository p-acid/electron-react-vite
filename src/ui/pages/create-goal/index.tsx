import { Grid3x3, Key } from "lucide-react";
import * as styles from "./style.css";
import { Button } from "@/ui/components";
import { useState } from "react";
import { useNavigate } from "react-router";
import { pageRoutes } from "@/ui/constants/page-routes";

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
  const [framework, setFramework] =
    useState<(typeof methodOptions)[number]["id"]>();

  const navigate = useNavigate();

  const handleMethodSelect = (methodId: string) => {
    setFramework(methodId);
  };

  const handleNext = () => {
    const nextRoute: Record<(typeof methodOptions)[number]["id"], string> = {
      okr: pageRoutes.createOkr,
      mandalart: pageRoutes.createMandalart,
    };

    if (framework) {
      navigate(nextRoute[framework]);
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

      <div className={styles.methodGrid}>
        {methodOptions.map((method) => (
          <div
            key={method.id}
            className={styles.methodCard}
            onClick={() => handleMethodSelect(method.id)}
            data-selected={framework === method.id}
            role="button"
            tabIndex={0}
          >
            <div className={styles.methodHeader}>
              <div className={styles.iconWrapper}>
                <method.icon
                  size={20}
                  color={framework === method.id ? "#3B82F6" : "#E0E0E0"}
                />
              </div>
              <h2 className={styles.methodTitle}>{method.title}</h2>
            </div>
            <p className={styles.methodDescription}>{method.description}</p>
          </div>
        ))}
      </div>

      {framework && <Button onClick={handleNext}>Next</Button>}
    </div>
  );
}

export default CreateGoalPage;
