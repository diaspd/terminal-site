'use client'

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

interface KnowledgeItemProps {
  title: string;
  description: string
  value: string
}

export function KnowledgeItem({title, description, value}: KnowledgeItemProps) {
	return (
		<AccordionItem value={value}>
			<AccordionTrigger 
				className="text-xl flex items-center font-medium hover:text-muted-foreground transition-all duration-200 pr-2"
			>
				{title}
			</AccordionTrigger>
			<AccordionContent className="text-muted-foreground px-2 text-lg select-none">
				{description}
			</AccordionContent>
		</AccordionItem>
		
	)
}