import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import * as styles from "./style.css";
import { supabase } from "@/ui/libs/supabase/base";
import { useSession } from "@/ui/contexts/session-context/use-session";

function UserPopover() {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const { session } = useSession();

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      toast.error("Logout failed");
    } else {
      toast.success("Logout successful");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  console.log(session?.user.user_metadata);

  return (
    <div className={styles.wrapper} ref={popoverRef}>
      <button className={styles.userProfile} onClick={() => setIsOpen(!isOpen)}>
        <img
          className={styles.avatar}
          src={session?.user?.user_metadata.avatar_url || "/default-avatar.png"}
          alt="user thumbnail"
        />
        <div className={styles.userInfo}>
          <span className={styles.userName}>
            {session?.user.user_metadata.name}
          </span>
          <span className={styles.userEmail}>{session?.user.email}</span>
        </div>
      </button>

      {isOpen && (
        <div className={styles.popover}>
          <div className={styles.popoverItem} onClick={signOut}>
            <span>Logout</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserPopover;
