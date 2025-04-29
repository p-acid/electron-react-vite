import { HTMLAttributes } from "react";
import * as styles from "./style.css.ts";
import { clsx } from "clsx";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary";
}

function Badge({ variant, className, ...props }: BadgeProps) {
  return (
    <span className={clsx(styles.badge({ variant }), className)} {...props} />
  );
}

export default Badge;
