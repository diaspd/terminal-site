"use client"

import { ArrowLeft, TerminalSquare } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { HeaderButtons } from "../header-buttons"

export function Header() {
	const pathname = usePathname()

	return (
		<header className="flex items-center gap-1 lg:gap-48 bg-background p-4 sticky top-0 left-0 z-1 w-full text-white">
			{pathname === "/" ? (
				<div className="lg:flex items-center gap-1 lg:gap-32">
					<HeaderButtons />
					<p className="text-2xl mt-3 xl:mt-0 text-foreground">
						Terminal builded by Pedro Dias / V-3.0.0
					</p>
				</div>
			) : (
				<>
					<Link
						href="/"
						title="go back"
						aria-label="go back"
						className="text-foreground hover:text-muted-foreground transition-all duration-200"
					>
						<ArrowLeft className="size-7"/>
					</Link>

					<span className="text-2xl mt-3 xl:mt-0 text-foreground">
						Terminal builded by Pedro Dias / V-3.0.0
					</span>

					<span className="lg:hidden ml-auto">
						<TerminalSquare width={24} height={24}/>
					</span>
				</>
			)}
		</header>
	)
}
