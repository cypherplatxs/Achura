'use client'
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/accordion";

export default function Faq() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion variant="splitted">
      <AccordionItem key="1" aria-label="Accordion 1" title="Cómo empezar con Achura">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Quien puede usar Achura">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Donde puedo usar Achura?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 4" title="Beneficios para las ONG'S al usar Achura?">
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
