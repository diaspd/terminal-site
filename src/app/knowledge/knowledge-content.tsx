"use client"

import * as Accordion from "@radix-ui/react-accordion"
import { ArrowFatLineDown } from "phosphor-react"

export function KnowledgeContent() {
	return (
		<main className="flex items-center justify-start mt-5 gap-4 w-full p-4">
			<Accordion.Root
				type="single"
				defaultValue="item-1"	
				collapsible
				className="bg-zinc-800 rounded-md ml-10 p-4 lg:w-1/2 w-full"
			>
				<Accordion.Item className="AccordionItem" value="item-1">
					<Accordion.Trigger className="text-xl flex items-center gap-2 font-semibold text-zinc-200 hover:text-zinc-500 transition-all duration-500 rounded border-2 border-zinc-800 focus-visible:border-zinc-500 group">
            Front-end 
						<div className="group-data-[state=open]:rotate-180 hidden group-hover:flex">
							<ArrowFatLineDown className="w-4 h-4" />
						</div>
					</Accordion.Trigger>
					<Accordion.Content className="text-zinc-400 p-2 text-lg select-none">
            HTML, CSS, JavaScript, TypeScript, React.js, 
            Next.js, React Native, Electron, UX, UI.
					</Accordion.Content>
				</Accordion.Item>

				<Accordion.Item className="AccordionItem" value="item-2">
					<Accordion.Trigger className="text-xl flex items-center gap-2 font-semibold mt-2 text-zinc-200 hover:text-zinc-500 transition-all duration-500 rounded border-2 border-zinc-800 focus-visible:border-zinc-500 group">
            Back-end
						<div className="group-data-[state=open]:rotate-180 hidden group-hover:flex">
							<ArrowFatLineDown className="w-4 h-4" />
						</div>
					</Accordion.Trigger>
					<Accordion.Content className="text-zinc-400 p-2 text-lg select-none">
            Node.js, Nestjs, Java, Prisma, SQL, Elixer, Python.
					</Accordion.Content>
				</Accordion.Item>

				<Accordion.Item className="AccordionItem" value="item-3">
					<Accordion.Trigger className="text-xl flex items-center gap-2 font-semibold mt-2 text-zinc-200 hover:text-zinc-500 transition-all duration-500 rounded border-2 border-zinc-800 focus-visible:border-zinc-500 group">
            Other Tecnologies
						<div className="group-data-[state=open]:rotate-180 hidden group-hover:flex">
							<ArrowFatLineDown className="w-4 h-4" />
						</div>
					</Accordion.Trigger>
					<Accordion.Content className="select-none text-zinc-400 p-2 text-lg gap-3 hover:text-zinc-500 transition-all duration-500">
            Git, Github, TailwindCss, StyledComponents, Stitches, Native
            Wind, Expo, Axe (accessibility), Firebase, Figma, Design
            System, Fastify, AI
					</Accordion.Content>
				</Accordion.Item>

				<Accordion.Item className="AccordionItem" value="item-4">
					<Accordion.Trigger className="text-xl flex items-center gap-2 font-semibold mt-2 text-zinc-200 hover:text-zinc-500 transition-all duration-500 rounded border-2 border-zinc-800 focus-visible:border-zinc-500 group">
							
            Used on Projects Front end & Mobile

						<div className="group-data-[state=open]:rotate-180 hidden group-hover:flex">
							<ArrowFatLineDown className="w-4 h-4" />
						</div>
					</Accordion.Trigger>
					<Accordion.Content className="text-zinc-400 p-2 text-lg select-none">
            useState, useEffect, useContext, UseCallback, useMemo, useQuery, 
						React hook Form, Immutability, ESLint, React Router DOM, Reducer,
            JSON Server, Axios, SSG, SSR, SEO, RadixUi, Zod, Cookies, OAuth, Redux, Zustand
					</Accordion.Content>
				</Accordion.Item>

				<Accordion.Item className="AccordionItem" value="item-5">
					<Accordion.Trigger className="text-xl flex items-center gap-2 font-semibold mt-2 text-zinc-200 hover:text-zinc-500 transition-all duration-500 rounded border-2 border-zinc-800 focus-visible:border-zinc-500 group">
							
            Used on Projects Back end
						<div className="group-data-[state=open]:rotate-180 hidden group-hover:flex">
							<ArrowFatLineDown className="w-4 h-4" />
						</div>
					</Accordion.Trigger>
					<Accordion.Content className="text-zinc-400 p-2 text-lg select-none">
            DDD
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		</main>
	)
}