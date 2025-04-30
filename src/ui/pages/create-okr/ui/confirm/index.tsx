import { useFormContext } from "react-hook-form";
import { OkrFormSchema } from "../../types/okr-form-schema";
import KeyResult from "../key-result";
import Objective from "../objective";
import { Goal } from "lucide-react";

import * as styles from "./style.css";

function Confirm() {
  const { getValues } = useFormContext<OkrFormSchema>();

  const goal = getValues("goal");
  const subGoals = getValues("subGoals");

  return (
    <div className={styles.container}>
      <Objective
        icon={Goal}
        title={goal.title}
        description={goal.description}
      />
      {subGoals?.map(({ title, dueDate }, index) => (
        <KeyResult key={index} order={index + 1} dueDate={dueDate}>
          {title}
        </KeyResult>
      ))}
    </div>
  );
}

export default Confirm;
