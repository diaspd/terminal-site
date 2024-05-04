import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { LinkUi } from "@/components/ui/link-ui"

interface ContentProps {
	title: string
	description: string
	url?: string
}

export function Content({title, description, url}: ContentProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">{title}</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription className="pt-2">
						{description}
					</DialogDescription>
				</DialogHeader>
				
				{url && (
					<DialogFooter className="mt-4">
						<LinkUi url={url} target="_blank">
						Link to certificate
						</LinkUi>
					</DialogFooter>
				)}
			</DialogContent>
		</Dialog>
	)
}