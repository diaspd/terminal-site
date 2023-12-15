import Link from "next/link"
import { Compiler } from "@/components/compiler"

export const metadata = {
	title: "Git hub",
}

export interface PostGithubProps {
  name: string
}

export default async function Github() {
	const response = await fetch("https://api.github.com/users/diaspd/repos", {
		next: {
			revalidate: 60 * 60 * 72, // 72 hours
		},
	})

	const repositories = await response.json()

	return (
		<>
			<Compiler />

			<main className="flex items-center justify-start gap-4 max-w-fit p-4">
				<p className="text-2xl font-semibold ">~\</p>
				<div className="p-1">
					<span className="text-xl">
              To access my git hub use this link:
						<Link
							className="font-semibold ml-2 rounded border-2 border-transparent focus-visible:border-gray-500 hover:text-gray-600 transition-all duration-500"
							href="https://github.com/diaspd"
							target="blank"
						>
                GitHub
						</Link>
					</span>
				</div>
			</main>

			<footer className="ml-12 grid items-center justify-start mt-4 gap-2 p-4">
				<p className="text-xl">Here&apos;s some of my repositories:</p>

				<div role="document" tabIndex={0} className="overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white h-44 focus-visible:ring-2 focus-visible:ring-zinc-200 focus-visible:ring-offset-0 rounded-md">
					{repositories.map((repos: PostGithubProps) => (
						<p
							className="bg-zinc-800 rounded-md p-2 mt-2 mr-4"
							key={repos.name}
						>
                🔘 {repos.name}
						</p>
					))}
				</div>
			</footer>
		</>
	)
}
