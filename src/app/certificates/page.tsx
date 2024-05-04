import { Compiler } from "@/components/compiler"

import { Content } from "./content"

export const metadata = {
	title: "Certificates",
}

export default async function Certificates() {
	return (
		<>
			<Compiler />

			<main className="flex items-center justify-start mt-5 gap-4 max-w-fit p-4">
				<div className="bg-foreground/10 rounded-md ml-10 p-4">
					<span className="text-xl">Certificates:</span>

					<div className="grid space-y-4 mt-2">		
						<Content 
							title="Reactjs"
							description="Completed the training journey ReactJS, a path of the Ignite program from Rocketseat, between December 2nd, 2022 and May 6th, 2023, with 100h of workload. Content: ReactJS Fundamentals, SPAs using ReactJS, Consuming API and ReactJS Performance, Next.js Fundamentals, Design System and Storybook and FullStack Applications using NextJS."
							url={"https://app.rocketseat.com.br/certificates/9bc30de5-3eff-438c-8811-a2c0ee5a6b62"}
						/> 
						
						<Content 
							title="Accessibility"
							description="Successfully completed the course Acessibilidade com 
							ReactJS by Rocketseat on December 29th, 2022, with 
							the workload of 02h59. The learning curriculum 
							includes: fundamentals of accessibility, guidelines
							WCAG and screen readers."
							url={"https://app.rocketseat.com.br/certificates/45fdbf9e-4f4c-4d62-86f8-dcca7c21ebdd"}
						/> 
						
						<Content 
							title="Figma"	
							description="Successfully completed the course Figma by Rocketseat 
							on December 21st, 2022, with the workload of 01h45. 
							The learning curriculum includes: fundamentals of
							Figma, UI design migration to HTML code/
							CSS, integration and automation between design tokens
							Figma with GitHub Actions."
							url={"https://app.rocketseat.com.br/certificates/447fde51-edb5-4c28-8508-78ab3996a45d"}
						/> 

						<Content 
							title="Electron"	
							description="Successfully completed the course Apps desktop com 
							Electron by Rocketseat on June 10th, 2023, with the 
							workload of 05h47. The learning curriculum includes: 
							fundamentals of Electron, creation of practical application,
							build and distribution by CI."
							url={"https://app.rocketseat.com.br/certificates/89bc2135-f20d-4e4b-8ebb-22c6bb34864a"}
						/>

						<Content 
							title="Discover specialize"	
							description="Successfully completed Discover &apos;s path Especializar,
							with a duration of 11h11 on January 5th. 2023. Learning the
							concepts of: advanced HTML and CSS, and the 
							fundamentals of APIs, ReactJS, Typescript and more."
							url={"https://app.rocketseat.com.br/certificates/7fa95da6-f899-481f-9199-23d39f4516e5"}
						/> 

						<Content 
							title="CS50"	
							description="Introduction to Computer Science - The Course
							from Harvard in Brazil."
							url={"https://edools-3-production.s3.amazonaws.com/org-6988/school-7227/certificates/enrollment-7564627/course-84414-lvspz.pdf"}
						/> 

						<Content 
							title="Introduction to Programming" 
							description="Introduction to Programming - UniRitter" 
						/>

						<Content 
							title="Data Analytics" 
							description="data analytics - UniRitter" 
						/>
					</div>
				</div>
			</main>
		</>
	)
}
