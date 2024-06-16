import { Compiler } from '@/components/compiler'
import { LinkUi } from '@/components/ui/link-ui'

export const metadata = {
	title: 'Linked In',
}

export default function LinkedIn() {
	return (
		<>
			<Compiler />

			<main className="flex items-center justify-start gap-4 max-w-fit p-4">
				<p className="text-2xl font-semibold">~\</p>
				<div className="p-1">
					<span className="text-xl">
              To access my LinkedIn use this link: {' '}
						<LinkUi url="https://www.linkedin.com/in/pedro-diasr/" variant="move" target="blank">
                LinkedIn
						</LinkUi>
					</span>
				</div>
			</main>
		</>
	)
}
