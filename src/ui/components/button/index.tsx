import { ButtonHTMLAttributes } from "react";
import * as styles from "./style.css";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  width?: "fit" | "full";
}

function Button({
  children,
  className,
  size = "md",
  width = "fit",
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.button({ size, width }), className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
