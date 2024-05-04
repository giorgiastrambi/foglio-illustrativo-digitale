import React from "react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

const CustomAccordion = ({
  title,
  content,
  value,
}: {
  title: string;
  content: string;
  value: string;
}) => {
  return (
    <AccordionItem value={value} className="border-none">
      <AccordionTrigger className="accordion-trigger">{title}</AccordionTrigger>
      <AccordionContent className="p-2">{content}</AccordionContent>
    </AccordionItem>
  );
};

export default CustomAccordion;
