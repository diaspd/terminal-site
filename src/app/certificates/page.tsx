import { Compiler } from "@/components/compiler"

import { CertificatesContent } from "./certificates-content"

export const metadata = {
	title: "Certificates",
}

export default async function Certificates() {
	return (
		<>
			<Compiler />

			<main className="flex items-center justify-start mt-5 gap-4 max-w-fit p-4">
				<div className="bg-zinc-800 rounded-md ml-10 p-4">
					<span className="text-xl">Certificates:</span>

					<div className="grid space-y-5">		
						<CertificatesContent /> 
					</div>
				</div>
			</main>
		</>
	)
}
