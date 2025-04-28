import { forwardRef, ComponentPropsWithRef } from "react";
import { textarea } from "./style.css";
import clsx from "clsx";

type TextareaSize = "sm" | "md" | "lg";

interface TextareaProps
  extends Omit<ComponentPropsWithRef<"textarea">, "size"> {
  size?: TextareaSize;
  error?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ size, error, className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={clsx(
          textarea({
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

Textarea.displayName = "Textarea";

export default Textarea;
