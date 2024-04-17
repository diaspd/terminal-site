import { Compiler } from "@/components/compiler"

import { KnowledgeContent } from "./knowledge-content"

export const metadata = {
	title: "Knowledge",
}

export default function Knowledge() {
	return (
		<>
			<Compiler />

			<KnowledgeContent />
		</>
	)
}
