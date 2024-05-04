import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CustomAccordion from "@/components/ui/custom-accordion";
import { accordion_content } from "./data";

export default function Home() {
  return (
    <>
      <div className="bg-gradient">
        <header className="flex w-full justify-between items-center">
          <div className="p-4 w-full flex items-center justify-between">
            <div>
              <Image
                src="/images/augmentin_logo_esteso.png"
                alt="logo"
                width={150}
                height={100}
              />
            </div>

            <div>
              <select className="p-2">
                <option>Italiano</option>
                <option>English</option>
              </select>
            </div>
          </div>
        </header>

        <main className="flex h-full flex-col p-4">
          <Accordion type="multiple" className="flex flex-col gap-2">
            {accordion_content.map((content, i) => (
              <CustomAccordion
                key={i}
                value={`item-${i}`}
                title={content.title}
                content={content.content}
              />
            ))}
          </Accordion>
        </main>
      </div>
    </>
  );
}
