"use client"

import * as Accordion from "@radix-ui/react-accordion"
import { ArrowFatLineDown } from "phosphor-react"

interface KnowledgeItemProps {
  title: string;
  description: string
  value: string
}

export function KnowledgeItem({title, description, value}: KnowledgeItemProps) {
	return (
		<Accordion.Item className="AccordionItem" value={value}>
			<Accordion.Trigger 
				className="text-xl flex items-center gap-2 font-semibold text-zinc-200 hover:text-zinc-500 transition-all duration-500 rounded border-2 border-zinc-800 focus-visible:border-zinc-500 group"
			>
				{title}
				<div className="group-data-[state=open]:rotate-180 hidden group-hover:flex">
					<ArrowFatLineDown className="w-4 h-4 hidden lg:flex" />
				</div>
			</Accordion.Trigger>
			<Accordion.Content className="text-zinc-400 p-2 text-lg select-none">
				{description}
			</Accordion.Content>
		</Accordion.Item>
		
	)
}