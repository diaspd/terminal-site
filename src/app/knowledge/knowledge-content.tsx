"use client"

import * as Accordion from "@radix-ui/react-accordion"

export function KnowledgeContent() {
	return (
		<main className="flex items-center justify-start mt-5 gap-4 max-w-fit p-4">
			<div className="bg-gray-800 rounded-md ml-10 p-4 ">
				<Accordion.Root
					type="single"
					defaultValue="item-1"	
					collapsible
				>
					<Accordion.Item className="AccordionItem" value="item-1">
						<Accordion.Trigger className="text-xl font-semibold text-gray-200 hover:text-gray-500 transition-all duration-500 rounded border-2 border-gray-800 focus-visible:border-gray-500">
            Front-end
						</Accordion.Trigger>
						<Accordion.Content className="text-gray-400 p-2 text-lg select-none">
            HTML, CSS, JavaScript, TypeScript, React.js, 
            Next.js, React Native, Electron, UX, UI.
						</Accordion.Content>
					</Accordion.Item>

					<Accordion.Item className="AccordionItem" value="item-2">
						<Accordion.Trigger className="text-xl font-semibold mt-2 text-gray-200 hover:text-gray-500 transition-all duration-500 rounded border-2 border-gray-800 focus-visible:border-gray-500">
            Back-end
						</Accordion.Trigger>
						<Accordion.Content className="text-gray-400 p-2 text-lg select-none">
            Node.js, Nestjs, Java, Prisma, SQL, Elixer, Python.
						</Accordion.Content>
					</Accordion.Item>

					<Accordion.Item className="AccordionItem" value="item-3">
						<Accordion.Trigger className="text-xl font-semibold mt-2 text-gray-200 hover:text-gray-500 transition-all duration-500 rounded border-2 border-gray-800 focus-visible:border-gray-500">
            Other Tecnologies
						</Accordion.Trigger>
						<Accordion.Content className="select-none text-gray-400 p-2 text-lg gap-3 hover:text-gray-500 transition-all duration-500">
            Git, Github, TailwindCss, StyledComponents, Stitches, Native
            Wind, Expo, Axe (accessibility), Firebase, Figma, Design
            System, Fastify
						</Accordion.Content>
					</Accordion.Item>

					<Accordion.Item className="AccordionItem" value="item-4">
						<Accordion.Trigger className="text-xl font-semibold mt-2 text-gray-200 hover:text-gray-500 transition-all duration-500 rounded border-2 border-gray-800 focus-visible:border-gray-500">
							
            Used on Projects Front end & Mobile
						</Accordion.Trigger>
						<Accordion.Content className="text-gray-400 p-2 text-lg select-none">
            useState, useEffect, useContext, UseCallback, useMemo, useQuery, 
						React hook Form, Immutability, ESLint, React Router DOM, Reducer,
            JSON Server, Axios, SSG, SSR, SEO, RadixUi, Zod, Cookies, OAuth, Redux, Zustand
						</Accordion.Content>
					</Accordion.Item>

					<Accordion.Item className="AccordionItem" value="item-5">
						<Accordion.Trigger className="text-xl font-semibold mt-2 text-gray-200 hover:text-gray-500 transition-all duration-500 rounded border-2 border-gray-800 focus-visible:border-gray-500">
							
            Used on Projects Back end
						</Accordion.Trigger>
						<Accordion.Content className="text-gray-400 p-2 text-lg select-none">
            DDD
						</Accordion.Content>
					</Accordion.Item>
				</Accordion.Root>
			</div>
		</main>
	)
}