import React from "react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

const CustomAccordion = ({
  title,
  content,
  value,
  children,
}: {
  title: string;
  value: string;
  children?: React.ReactNode;
  content?: string;
}) => {
  return (
    <AccordionItem value={value} className="border-none">
      <AccordionTrigger className="accordion-trigger">{title}</AccordionTrigger>
      <AccordionContent className="p-2">{children}</AccordionContent>
    </AccordionItem>
  );
};

export default CustomAccordion;
