import { Link } from "react-router";

import * as styles from "./style.css";

function Navigations() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.navItem}>
        <span className={styles.navIcon}>🏠</span>
        <span>Home</span>
      </Link>
      <Link to="/explore" className={styles.navItem}>
        <span className={styles.navIcon}>🎯</span>
        <span>Targets</span>
      </Link>
      <Link to="/messages" className={styles.navItem}>
        <span className={styles.navIcon}>☑️</span>
        <span>Tasks</span>
      </Link>
      <Link to="/notifications" className={styles.navItem}>
        <span className={styles.navIcon}>🔔</span>
        <span>Notification</span>
      </Link>
    </nav>
  );
}

export default Navigations;
