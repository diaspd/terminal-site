import Link from "next/link"

import { Compiler } from "@/components/compiler"
import Image from "next/image"

export const metadata = {
	title: "Projects",
}

export default function Projects() {
	return (
		<>
			<Compiler />

			<main className="flex flex-1 items-center justify-start max-w-fit lg:max-w-7xl p-4 relative">
				<div className="bg-zinc-800 rounded-md ml-11 px-12 lg:px-4 py-4 space-y-4">
					<span className="text-xl font-semibold">Projects online:</span>
					<div className="group">
						<Link 
							target="_blank" 
							href="https://ignite-call-diaspd.vercel.app/" 
							className="text-xl text-zinc-200 hover:text-zinc-600 rounded border-2 border-zinc-800 focus-visible:border-zinc-500">
                  Ignite Call
						</Link>

						<Image 
							src="https://raw.githubusercontent.com/diaspd/ignite-call/main/public/template.svg"
							width={800} 
							height={600} 
							alt="" 
							className="w-4/6 h-full rounded hidden xl:group-hover:flex absolute right-2 top-2 object-contain"  
						/>
					</div>

					<div className="group">
						<Link 
							target="_blank" 
							href="https://letmeask-88cb8.web.app/" 
							className="text-xl text-zinc-200 hover:text-zinc-600 rounded border-2 border-zinc-800 focus-visible:border-zinc-500">
                  Let Me Ask
						</Link>

						<Image 
							src="https://raw.githubusercontent.com/diaspd/let-me-ask/main/public/template.svg"
							width={800} 
							height={600} 
							alt="" 
							className="w-4/6 h-full rounded hidden xl:group-hover:flex absolute right-2 top-2 object-contain" 
						/>
					</div>

					<div className="group">
						<Link 
							target="_blank" 
							href="https://moveit-h9tlq1493-diaspd.vercel.app/" 
							className="text-xl text-zinc-200 hover:text-zinc-600 rounded border-2 border-zinc-800 focus-visible:border-zinc-500">
              Move It
						</Link>

						<Image 
							src="https://raw.githubusercontent.com/diaspd/move-it/main/public/template.svg"
							width={800} 
							height={600} 
							alt="" 
							className="w-4/6 h-full rounded hidden xl:group-hover:flex absolute right-2 top-2 object-contain" 
						/>
					</div>

					<div className="group">
						<Link 
							target="_blank" 
							href="https://diaspd.github.io/design-system-ignite" 
							className="text-xl text-zinc-200 hover:text-zinc-600 rounded border-2 border-zinc-800 focus-visible:border-zinc-500">
                  Design System
						</Link>

						<Image 
							src="https://raw.githubusercontent.com/diaspd/design-system-ignite/main/public/template.png"
							width={800} 
							height={600} 
							alt="" 
							className="w-4/6 h-full rounded hidden xl:group-hover:flex absolute right-2 top-2 object-contain" 
						/>
					</div>

					<div className="group">
						<Link 
							target="_blank" 
							href="https://diaspd.github.io/gesture-controller/template" 
							className="text-xl text-zinc-200 hover:text-zinc-600 rounded border-2 border-zinc-800 focus-visible:border-zinc-500">
                  Gesture Controller
						</Link>

						<Image 
							src="https://raw.githubusercontent.com/diaspd/gesture-controller/main/template/assets/project.svg"
							width={800} 
							height={600} 
							alt="" 
							className="w-4/6 h-full rounded hidden xl:group-hover:flex absolute right-2 top-2 object-contain" 
						/>
					</div>
				</div>
			</main>
		</>
	)
}