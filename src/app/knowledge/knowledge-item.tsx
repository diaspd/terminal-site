"use client"

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"

interface KnowledgeItemProps {
  title: string;
  description: string
  value: string
}

export function KnowledgeItem({title, description, value}: KnowledgeItemProps) {
	return (
		<AccordionItem value={value}>
			<AccordionTrigger 
				className="text-xl flex items-center font-medium text-zinc-200 hover:text-zinc-500 transition-all duration-500 rounded border-2 border-zinc-900 focus-visible:border-zinc-500 pr-2"
			>
				{title}
			</AccordionTrigger>
			<AccordionContent className="text-zinc-400 px-2 text-lg select-none">
				{description}
			</AccordionContent>
		</AccordionItem>
		
	)
}