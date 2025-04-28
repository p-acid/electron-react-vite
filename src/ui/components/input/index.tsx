import { forwardRef, ComponentPropsWithRef } from "react";
import { input } from "./style.css";
import clsx from "clsx";

type InputSize = "sm" | "md" | "lg";

interface InputProps extends Omit<ComponentPropsWithRef<"input">, "size"> {
  size?: InputSize;
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size, error, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          input({
            size,
            isError: error,
          }),
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
