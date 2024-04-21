"use client"

import { ArrowLeft, TerminalSquare } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { HeaderButtons } from "../header-buttons"

export function Header() {
	const pathname = usePathname()

	return (
		<header className="flex items-center gap-1 lg:gap-48 dark:bg-black bg-zinc-900 p-4 sticky top-0 left-0 z-1 w-full text-white">
			{pathname === "/" ? (
				<div className="lg:flex items-center gap-1 lg:gap-32">
					<HeaderButtons />
					<p className="text-2xl mt-3 xl:mt-0 dark:text-black">
							Terminal builded by Pedro Dias / V-2.0.0
					</p>
				</div>
			) : (
				<>
					<Link
						href="/"
						title="go back"
						aria-label="go back"
						className="text-zinc-100 rounded border-2 border-zinc-900 focus-visible:border-zinc-500 hover:text-zinc-500 transition-all duration-200"
					>
						<ArrowLeft fill="bold" className="size-7"/>
					</Link>

					<span className="hidden lg:flex text-2xl">
						Terminal builded by Pedro Dias / V-2.0.0
					</span>

					<span className="lg:hidden ml-auto">
						<TerminalSquare width={24} height={24}/>
					</span>
				</>
			)}
		</header>
	)
}
