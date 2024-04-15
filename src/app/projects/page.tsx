import Link from "next/link"

import { Compiler } from "@/components/compiler"

export const metadata = {
	title: "Projects",
}

export default function Projects() {
	return (
		<>
			<Compiler />

			<main className="flex flex-1 items-center justify-start max-w-fit lg:max-w-7xl p-4 ">
				<div className="bg-zinc-800 rounded-md ml-11 px-12 lg:px-4 py-4 space-y-4">
					<span className="text-xl font-semibold">Projects online:</span>
					<div className="group">
						<Link 
							target="_blank" 
							href="https://book-wise-delta.vercel.app/" 
							className="text-xl text-zinc-200 hover:text-zinc-600 rounded border-2 border-zinc-800 focus-visible:border-zinc-500">
                  Book Wise
						</Link>
					</div>
					
					<div className="group">
						<Link 
							target="_blank" 
							href="https://ignite-call-diaspd.vercel.app/" 
							className="text-xl text-zinc-200 hover:text-zinc-600 rounded border-2 border-zinc-800 focus-visible:border-zinc-500">
                  Ignite Call
						</Link>
					</div>

					<div className="group">
						<Link 
							target="_blank" 
							href="https://untitled-ui-rouge.vercel.app/" 
							className="text-xl text-zinc-200 hover:text-zinc-600 rounded border-2 border-zinc-800 focus-visible:border-zinc-500">
                  Untitled UI
						</Link>
					</div>
				
					<div className="group">
						<Link 
							target="_blank" 
							href="https://ignite-shop-pearl-three.vercel.app/" 
							className="text-xl text-zinc-200 hover:text-zinc-600 rounded border-2 border-zinc-800 focus-visible:border-zinc-500">
                  Ignite Shop
						</Link>
					</div>

					<div className="group">
						<Link 
							target="_blank" 
							href="https://ignite-timer-five-chi.vercel.app/" 
							className="text-xl text-zinc-200 hover:text-zinc-600 rounded border-2 border-zinc-800 focus-visible:border-zinc-500">
                  Ignite Timer
						</Link>
					</div>

					<div className="group">
						<Link 
							target="_blank" 
							href="https://github-blog-e7ik2ctob-diaspd.vercel.app/" 
							className="text-xl text-zinc-200 hover:text-zinc-600 rounded border-2 border-zinc-800 focus-visible:border-zinc-500">
                  Github Blog
						</Link>
					</div>

					<div className="group">
						<Link 
							target="_blank" 
							href="https://coffee-delivery-wheat-nu.vercel.app/" 
							className="text-xl text-zinc-200 hover:text-zinc-600 rounded border-2 border-zinc-800 focus-visible:border-zinc-500">
                  Coffee Delivery
						</Link>
					</div>

					<div className="group">
						<Link 
							target="_blank" 
							href="https://to-do-tan-eight.vercel.app/" 
							className="text-xl text-zinc-200 hover:text-zinc-600 rounded border-2 border-zinc-800 focus-visible:border-zinc-500">
                  To do
						</Link>
					</div>

					<div className="group">
						<Link 
							target="_blank" 
							href="https://letmeask-88cb8.web.app/" 
							className="text-xl text-zinc-200 hover:text-zinc-600 rounded border-2 border-zinc-800 focus-visible:border-zinc-500">
                  Let Me Ask
						</Link>
					</div>

					<div className="group">
						<Link 
							target="_blank" 
							href="https://moveit-h9tlq1493-diaspd.vercel.app/" 
							className="text-xl text-zinc-200 hover:text-zinc-600 rounded border-2 border-zinc-800 focus-visible:border-zinc-500">
              Move It
						</Link>
					</div>

					<div className="group">
						<Link 
							target="_blank" 
							href="https://diaspd.github.io/design-system-ignite" 
							className="text-xl text-zinc-200 hover:text-zinc-600 rounded border-2 border-zinc-800 focus-visible:border-zinc-500">
                  Design System
						</Link>
					</div>

					<div className="group">
						<Link 
							target="_blank" 
							href="https://diaspd.github.io/gesture-controller/template" 
							className="text-xl text-zinc-200 hover:text-zinc-600 rounded border-2 border-zinc-800 focus-visible:border-zinc-500">
                  Gesture Controller
						</Link>
					</div>
				</div>
			</main>
		</>
	)
}