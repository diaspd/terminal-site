import Link from "next/link"

import { Compiler } from "@/components/compiler"

export const metadata = {
	title: "Twitter",
}

export default function Twitter() {
	return (
		<>
			<Compiler />

			<main className="flex items-center justify-start gap-4 max-w-fit p-4">
				<p className="text-2xl font-semibold">~\</p>
				<div className="p-1">
					<span className="text-xl">
              To access my Twitter use this link: {" "}
						<Link
							className="font-semibold hover:text-zinc-600 transition-all rounded duration-500 border-2 border-transparent focus-visible:border-zinc-500"
							href="https://twitter.com/diaspdr_1"
							target="blank"
						>
                Twitter
						</Link>
					</span>
				</div>
			</main>
		</>
	)
}
