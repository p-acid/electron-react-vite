import ObjectiveForm from "./objective-form";
import * as styles from "./style.css";

function CreateOkrPage() {
  return (
    <main className={styles.pageWrapper}>
      <ObjectiveForm />
    </main>
  );
}

export default CreateOkrPage;
