import { createContext, useContext, useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import * as styles from "./style.css";
import clsx from "clsx";

type AccordionContextType = {
  value: string[];
  toggle: (value: string) => void;
};

const AccordionContext = createContext<AccordionContextType | null>(null);

interface AccordionProps {
  value?: string[];
  onValueChange?: (value: string[]) => void;
  children: React.ReactNode;
}

function Root({
  value: controlledValue,
  onValueChange,
  children,
}: AccordionProps) {
  const [value, setValue] = useState<string[]>(controlledValue || []);

  const toggle = (itemValue: string) => {
    const newValue = value.includes(itemValue)
      ? value.filter((v) => v !== itemValue)
      : [...value, itemValue];

    setValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <AccordionContext.Provider value={{ value, toggle }}>
      <div
        className={styles.accordion}
        role="region"
        aria-label="아코디언 메뉴"
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
}

function AccordionItem({ value, children }: AccordionItemProps) {
  return (
    <div className={styles.item}>
      <AccordionItemContext.Provider value={{ value }}>
        {children}
      </AccordionItemContext.Provider>
    </div>
  );
}

interface AccordionTriggerProps {
  children: React.ReactNode;
}

function AccordionTrigger({ children }: AccordionTriggerProps) {
  const context = useContext(AccordionContext);
  const item = useContext(AccordionItemContext);
  const triggerId = `accordion-trigger-${item?.value}`;
  const contentId = `accordion-content-${item?.value}`;

  if (!context || !item)
    throw new Error("AccordionTrigger must be used within Accordion");

  const isOpen = context.value.includes(item.value);

  return (
    <button
      id={triggerId}
      className={styles.trigger}
      onClick={() => context.toggle(item.value)}
      aria-expanded={isOpen}
      aria-controls={contentId}
      type="button"
      role="button"
      aria-label={`${children}${isOpen ? " 접기" : " 펼치기"}`}
    >
      <span className={styles.triggerInner}>{children}</span>
      <ChevronDown className={styles.chevron} size={16} aria-hidden="true" />
    </button>
  );
}

type AccordionContentProps = React.HTMLAttributes<HTMLDivElement>;

function AccordionContent({ children, className }: AccordionContentProps) {
  const context = useContext(AccordionContext);
  const item = useContext(AccordionItemContext);
  const [height, setHeight] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const contentId = `accordion-content-${item?.value}`;
  const triggerId = `accordion-trigger-${item?.value}`;

  if (!context || !item)
    throw new Error("AccordionContent must be used within Accordion");

  const isOpen = context.value.includes(item.value);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [ref.current?.scrollHeight]);

  return (
    <div
      id={contentId}
      className={clsx(styles.content, className)}
      role="region"
      aria-labelledby={triggerId}
      data-state={isOpen ? "open" : "closed"}
      style={
        {
          "--accordion-content-height": `${height}px`,
        } as React.CSSProperties
      }
    >
      <div ref={ref} className={styles.contentInner}>
        {children}
      </div>
    </div>
  );
}

const AccordionItemContext = createContext<{ value: string } | null>(null);

const Accordion = {
  Root,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
};

export default Accordion;
