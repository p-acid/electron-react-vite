import { ButtonHTMLAttributes } from "react";
import * as styles from "./style.css";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
}

function Button({ children, className, size = "md", ...props }: ButtonProps) {
  return (
    <button className={clsx(styles.button({ size }), className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
