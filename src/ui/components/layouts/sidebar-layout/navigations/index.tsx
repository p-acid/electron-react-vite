import { Link } from "react-router";

import * as styles from "./style.css";
import { CheckSquare, Goal, House } from "lucide-react";
import { pageRoutes } from "@/ui/constants/page-routes";

function Navigations() {
  return (
    <nav className={styles.nav}>
      <Link to={pageRoutes.home} className={styles.navItem}>
        <House size={18} />
        <span>Home</span>
      </Link>
      <Link to={pageRoutes.goal} className={styles.navItem}>
        <Goal size={18} />
        <span>Goals</span>
      </Link>
      <Link to={pageRoutes.task} className={styles.navItem}>
        <CheckSquare size={18} />
        <span>Tasks</span>
      </Link>
    </nav>
  );
}

export default Navigations;
