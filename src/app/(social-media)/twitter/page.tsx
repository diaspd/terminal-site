import { Compiler } from '@/components/compiler'
import { LinkUi } from '@/components/ui/link-ui'

export const metadata = {
	title: 'Twitter',
}

export default function Twitter() {
	return (
		<>
			<Compiler />

			<main className="flex items-center justify-start gap-4 max-w-fit p-4">
				<p className="text-2xl font-semibold">~\</p>
				<div className="p-1">
					<span className="text-xl">
              To access my Twitter use this link: {' '}
						<LinkUi url="https://twitter.com/diaspdr_1" variant="move" target="blank">
              Twitter
						</LinkUi>
					</span>
				</div>
			</main>
		</>
	)
}
