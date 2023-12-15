import Link from "next/link"

import { Compiler } from "@/components/compiler"

export const metadata = {
	title: "Projects",
}

export default function Projects() {
	return (
		<>
			<Compiler />

			<main className="flex items-center justify-start max-w-fit p-4">
				<div className="bg-zinc-800 rounded-md ml-11 px-12 lg:px-4 py-4">
					<span className="text-xl font-semibold">Projects online:</span>
					{/* <p className="text-xl mt-3 text-zinc-200 hover:text-zinc-600 transition-all duration-500 hover:translate-y-2">
							<Link target="_blank" href="">
                Book Wise
							</Link>
							/p> */}

					<p className="text-xl mt-3 text-zinc-200 hover:text-zinc-600 transition-all duration-500 hover:translate-y-2">
						<Link target="_blank" href="https://ignite-call-diaspd.vercel.app/" className="rounded border-2 border-zinc-800 focus-visible:border-zinc-500">
                  Ignite Call
						</Link>
					</p>

					<p className="text-xl mt-3 text-zinc-200 hover:text-zinc-600 transition-all duration-500 hover:translate-y-2">
						<Link target="_blank" href="https://letmeask-88cb8.web.app/" className="rounded border-2 border-zinc-800 focus-visible:border-zinc-500">
                  Let Me Ask
						</Link>
					</p>
					<p className="text-xl mt-3 text-zinc-200 hover:text-zinc-600 transition-all duration-500 hover:translate-y-2">
						<Link
							className="rounded border-2 border-zinc-800 focus-visible:border-zinc-500"
							target="_blank"
							href="https://moveit-h9tlq1493-diaspd.vercel.app/"
						>
                  Move It
						</Link>
					</p>
					<p className="text-xl mt-3 text-zinc-200 hover:text-zinc-600 transition-all duration-500 hover:translate-y-2">
						<Link
							className="rounded border-2 border-zinc-800 focus-visible:border-zinc-500"
							target="_blank"
							href="https://diaspd.github.io/design-system-ignite"
						>
                  Design System
						</Link>
					</p>
					<p className="text-xl mt-3 text-zinc-200 hover:text-zinc-600 transition-all duration-500 hover:translate-y-2">
						<Link
							className="rounded border-2 border-zinc-800 focus-visible:border-zinc-500"
							target="_blank"
							href="https://diaspd.github.io/gesture-controller/template"
						>
                  Gesture Controller
						</Link>
					</p>
				</div>
			</main>
		</>
	)
}