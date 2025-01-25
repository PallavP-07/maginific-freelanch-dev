import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
function CustomAccordion({title,content}) {
  return (
    <div className='border-t-2'><Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>
         {content}
        </AccordionContent>
      </AccordionItem>
    </Accordion></div>
  )
}

export default CustomAccordion