import { Compiler } from "@/components/compiler"
import { LinkUi } from "@/components/ui/link-ui"

export const metadata = {
	title: "Instagram",
}

export default function Instagram() {
	return (
		<>
			<Compiler />

			<main className="flex items-center justify-start gap-4 max-w-fit p-4">
				<p className="text-2xl font-semibold">~\</p>
				<div className="p-1">
					<span className="text-xl">
              To access my Instagram use this link: {" "}
						<LinkUi url="https://www.instagram.com/dias_pdr/" variant="move" target="blank">
							<span>Instagram</span>
						</LinkUi>
					</span>
				</div>
			</main>
		</>
	)
}
