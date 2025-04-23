import { forwardRef, HTMLAttributes } from "react";
import clsx from "clsx";
import * as styles from "./style.css";

const Root = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(styles.card, className)} {...props}>
        {children}
      </div>
    );
  }
);

const Header = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx(styles.header, className)} {...props}>
    {children}
  </div>
);

const Body = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx(styles.body, className)} {...props}>
    {children}
  </div>
);

const Footer = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx(styles.footer, className)} {...props}>
    {children}
  </div>
);

const Title = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => (
  <p className={clsx(styles.title, className)} {...props}>
    {children}
  </p>
);

const Description = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => (
  <p className={clsx(styles.description, className)} {...props}>
    {children}
  </p>
);

const Card = {
  Root,
  Header,
  Body,
  Footer,
  Title,
  Description,
};

export default Card;
