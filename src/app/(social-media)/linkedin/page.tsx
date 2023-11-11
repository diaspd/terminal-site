import Link from "next/link"
import { Compiler } from "@/components/compiler"

export const metadata = {
	title: "Linked In",
}

export default function LinkedIn() {
	return (
		<>
			<Compiler />

			<main className="flex items-center justify-start gap-4 max-w-fit p-4">
				<p className="text-2xl font-semibold">~\</p>
				<div className="p-1">
					<span className="text-xl">
              To access my LinkedIn use this link: {" "}
						<Link
							className="font-semibold hover:text-gray-600 rounded transition-all duration-500 border-2 border-transparent focus-visible:border-gray-500"
							href="https://www.linkedin.com/in/pedro-diasr/"
							target="blank"
						>
                LinkedIn
						</Link>
					</span>
				</div>
			</main>
		</>
	)
}
