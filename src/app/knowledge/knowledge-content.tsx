'use client'

import { Accordion } from '@/components/ui/accordion'

import { KnowledgeItem } from './knowledge-item'

export function KnowledgeContent() {
	return (
		<Accordion
			type="single"
			defaultValue="item-1"	
			collapsible
			className="md:ml-11 p-4 max-w-4xl m-5 gap-4"
		>
			<KnowledgeItem 
				title="Front-end"
				description="HTML, CSS, JavaScript, TypeScript, React.js, 
    				Next.js, React Native, Electron, UX, UI."
				value="item-1"
			/>

			<KnowledgeItem 
				title="Back-end"
				description="Node.js, Nestjs, Java, Prisma, SQL, Elixer, Python."
				value="item-2"
			/>

			<KnowledgeItem 
				title="Other Tecnologies"
				description=" Git, Github, TailwindCss, StyledComponents, Stitches, Native
				Wind, Expo, Axe (accessibility), Firebase, Figma, Design
				System, Fastify, AI"
				value="item-3"
			/>

			<KnowledgeItem 
				title="Used on Projects Front end & Mobile"
				description="useState, useEffect, useContext, UseCallback, useMemo, useQuery, 
				React hook Form, Immutability, ESLint, React Router DOM, Reducer,
				JSON Server, Axios, SSG, SSR, SEO, RadixUi, Zod, Cookies, OAuth, Redux, Zustand, Local Storage"
				value="item-4"
			/>

			<KnowledgeItem 
				title="Used on Projects Back end"
				description="DDD"
				value="item-5"
			/>
		</Accordion>
	)
}