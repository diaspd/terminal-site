import { Input } from "@/components/input"

export const metadata = {
	title: "Home",
}

export default function Home() {
	return (
		<>
			<h1 className="text-3xl font-medium lg:mt-6 pl-4 text-foreground">
				Type what did you want to learn about me:
			</h1>

			<div className="flex items-center mt-5 gap-4 max-w-fit pl-4">
				<p className="text-3xl font-medium select-none text-foreground">
					~\
				</p>

				<Input />
			</div>
		</>
	)
}
