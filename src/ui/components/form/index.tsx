import {
  ComponentPropsWithRef,
  forwardRef,
  createContext,
  useContext,
  useId,
} from "react";
import * as styles from "./style.css";

const FormContext = createContext<{ id?: string }>({});

type FormProps = ComponentPropsWithRef<"form">;

const Form = forwardRef<HTMLFormElement, FormProps>(({ id, ...props }, ref) => {
  return (
    <FormContext.Provider value={{ id }}>
      <form ref={ref} className={styles.form} {...props} />
    </FormContext.Provider>
  );
});

type FormGroupProps = ComponentPropsWithRef<"div">;

const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>(
  ({ ...props }, ref) => {
    return <div ref={ref} className={styles.group} {...props} />;
  }
);

type FormLabelProps = ComponentPropsWithRef<"label">;

const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ htmlFor, ...props }, ref) => {
    const { id } = useContext(FormContext);
    const generatedId = useId();
    const labelFor = htmlFor || id || generatedId;

    return (
      <label ref={ref} className={styles.label} htmlFor={labelFor} {...props} />
    );
  }
);

const FormDescription = forwardRef<
  HTMLParagraphElement,
  ComponentPropsWithRef<"p">
>(({ ...props }, ref) => {
  return <p ref={ref} className={styles.description} {...props} />;
});

interface FormMessageProps extends ComponentPropsWithRef<"p"> {
  variant?: "error" | "success";
}

const FormMessage = forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ variant, ...props }, ref) => {
    const messageStyle =
      variant === "error"
        ? styles.errorMessage
        : variant === "success"
        ? styles.successMessage
        : styles.message;

    return <p ref={ref} className={messageStyle} {...props} />;
  }
);

Form.displayName = "Form";
FormGroup.displayName = "Form.Group";
FormLabel.displayName = "Form.Label";
FormDescription.displayName = "Form.Description";
FormMessage.displayName = "Form.Message";

const FormComponents = {
  Root: Form,
  Group: FormGroup,
  Label: FormLabel,
  Description: FormDescription,
  Message: FormMessage,
};

export default FormComponents;
