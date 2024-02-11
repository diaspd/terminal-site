import Link from "next/link"

import { Compiler } from "@/components/compiler"
import Image from "next/image"

export const metadata = {
	title: "Projects",
}

import IgniteCallTemplate from  "../../../public/projects-image/ignite-call.svg"
import LetMeAskTemplate from  "../../../public/projects-image/let-me-ask.svg"
import MoveItTemplate from  "../../../public/projects-image/move-it.svg"
import DesignSystem from  "../../../public/projects-image/design-system.svg"
import GestureController from  "../../../public/projects-image/gesture-controller.svg"

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
							src={IgniteCallTemplate} 
							width={800} 
							height={600} 
							alt="" 
							className="w-4/6 h-full rounded hidden xl:xl:group-hover:flex absolute right-2 top-2 object-contain" 
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
							src={LetMeAskTemplate} 
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
							src={MoveItTemplate} 
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
							src={DesignSystem} 
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
							src={GestureController} 
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