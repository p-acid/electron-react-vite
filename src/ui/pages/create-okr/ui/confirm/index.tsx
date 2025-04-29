import { useFormContext } from "react-hook-form";
import { OkrFormSchema } from "../../types/okr-form-schema";
import KeyResult from "../key-result";
import Objective from "../objective";
import { Goal } from "lucide-react";

function Confirm() {
  const { getValues } = useFormContext<OkrFormSchema>();

  const goal = getValues("goal");
  const subGoals = getValues("subGoals");

  return (
    <div>
      <Objective
        icon={Goal}
        title={goal.title}
        description={goal.description}
      />
      {subGoals?.map(({ title, description }, index) => (
        <KeyResult order={index}>
          <p>{title}</p>
          <p>{description}</p>
        </KeyResult>
      ))}
    </div>
  );
}

export default Confirm;
