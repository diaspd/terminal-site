"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { HeaderButtons } from "../header-buttons"

export function Header() {
	const pathname = usePathname()

	return (
		<header className="grid md:flex items-center gap-1 lg:gap-32 bg-background p-4 sticky top-0 left-0 z-10 w-full text-white">
			{pathname === "/" ? (
				<HeaderButtons />		
			) : (
				<Link
					href="/"
					title="go back"
					aria-label="go back"
					className="text-foreground hover:text-muted-foreground transition-all duration-200 lg:mr-6 mr-2"
				>
					<ArrowLeft className="size-7"/>
				</Link>
			)}

			<p className="text-2xl mt-3 xl:mt-0 text-foreground line-clamp-2">
				Terminal builded by Pedro Dias / V-3.0.0
			</p>
		</header>
	)
}
