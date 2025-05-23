
import { Compiler } from '@/components/compiler'
import { LinkUi } from '@/components/ui/link-ui'

export const metadata = {
	title: 'Git hub',
}

export interface PostGithubProps {
  name: string
}

export default async function Github() {
	const response = await fetch('https://api.github.com/users/diaspd/repos', {
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
						<LinkUi
							url="https://github.com/diaspd"
							target="blank"
						>
							<span>{' '}GitHub</span> 
						</LinkUi>
					</span>
				</div>
			</main>

			<footer className="ml-12 grid items-center justify-start mt-4 gap-2 p-4">
				<p className="text-xl">Here&apos;s some of my repositories:</p>

				<div role="document" tabIndex={0} className="overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-foreground h-44 focus-visible:ring-2 focus-visible:ring-zinc-200 focus-visible:ring-offset-0 rounded-md">
					{repositories.map((repos: PostGithubProps) => (
						<div
							className="flex items-center gap-2 bg-primary/10 rounded-md mt-2 mr-4 p-2"
							key={repos.name}
						>
							<div className="rounded-full size-3 bg-foreground"/>
							<p className="">{repos.name}</p>
						</div>
					))}
				</div>
			</footer>
		</>
	)
}
