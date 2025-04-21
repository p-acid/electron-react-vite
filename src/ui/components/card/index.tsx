import { forwardRef, HTMLAttributes } from "react";
import clsx from "clsx";
import * as styles from "./style.css";

const Card = Object.assign(
  forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ children, className, ...props }, ref) => {
      return (
        <div ref={ref} className={clsx(styles.card, className)} {...props}>
          {children}
        </div>
      );
    }
  ),
  {
    Header: ({
      children,
      className,
      ...props
    }: HTMLAttributes<HTMLDivElement>) => (
      <div className={clsx(styles.header, className)} {...props}>
        {children}
      </div>
    ),
    Body: ({
      children,
      className,
      ...props
    }: HTMLAttributes<HTMLDivElement>) => (
      <div className={clsx(styles.body, className)} {...props}>
        {children}
      </div>
    ),
    Footer: ({
      children,
      className,
      ...props
    }: HTMLAttributes<HTMLDivElement>) => (
      <div className={clsx(styles.footer, className)} {...props}>
        {children}
      </div>
    ),
    Title: ({
      children,
      className,
      ...props
    }: HTMLAttributes<HTMLParagraphElement>) => (
      <p className={clsx(styles.title, className)} {...props}>
        {children}
      </p>
    ),
    Description: ({
      children,
      className,
      ...props
    }: HTMLAttributes<HTMLParagraphElement>) => (
      <p className={clsx(styles.description, className)} {...props}>
        {children}
      </p>
    ),
  }
);

export default Card;
