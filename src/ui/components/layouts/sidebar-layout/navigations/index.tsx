import { Link } from "react-router";

import * as styles from "./style.css";
import { Bell, CheckSquare, House, Target } from "lucide-react";

function Navigations() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.navItem}>
        <House size={18} />
        <span>Home</span>
      </Link>
      <Link to="/explore" className={styles.navItem}>
        <Target size={18} />
        <span>Targets</span>
      </Link>
      <Link to="/messages" className={styles.navItem}>
        <CheckSquare size={18} />
        <span>Tasks</span>
      </Link>
      <Link to="/notifications" className={styles.navItem}>
        <Bell size={18} />
        <span>Notification</span>
      </Link>
    </nav>
  );
}

export default Navigations;
