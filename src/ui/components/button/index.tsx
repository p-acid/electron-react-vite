import { ButtonHTMLAttributes } from "react";
import * as styles from "./style.css";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg" | "icon";
  width?: "fit" | "full" | number;
  variant?: "primary" | "outline" | "ghost" | "destructive";
}

function Button({
  size,
  width = "fit",
  variant,
  className,
  ...props
}: ButtonProps) {
  const buttonWidth = typeof width === "number" ? `${width}px` : width;

  return (
    <button
      className={clsx(styles.button({ size, variant }), className)}
      style={{ width: buttonWidth === "fit" ? "fit-content" : buttonWidth }}
      {...props}
    />
  );
}

export default Button;
