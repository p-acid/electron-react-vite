import { Outlet } from "react-router";

import * as styles from "./style.css";
import UserPopover from "./user-popover";
import Navigations from "./navigations";

function SidebarLayout() {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <Navigations />
          <UserPopover />
        </aside>
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default SidebarLayout;
