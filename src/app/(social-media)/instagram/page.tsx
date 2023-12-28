import Link from "next/link"
import { Compiler } from "@/components/compiler"

export const metadata = {
	title: "Instagram",
}

export default function Instagram() {
	return (
		<>
			<Compiler />

			<main className="flex items-center justify-start gap-4 max-w-fit p-4">
				<p className="text-2xl font-semibold">~\</p>
				<div className="p-1">
					<span className="text-xl">
              To access my Instagram use this link: {" "}
						<Link
							className="font-semibold inline-block hover:translate-y-2 hover:text-zinc-600 transition-all rounded duration-500 border-2 border-transparent focus-visible:border-zinc-500"
							href="https://www.instagram.com/dias_pdr/"
							target="blank"
						>
                Instagram
						</Link>
					</span>
				</div>
			</main>
		</>

	)
}
