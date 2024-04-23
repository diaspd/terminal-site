import * as Dialog from "@radix-ui/react-dialog"

interface TriggerProps {
  title: string
}

export function ButtonTrigger({title}: TriggerProps) {
	return (
		<Dialog.Trigger asChild>
			<button className="mt-3 dark:shadow-black inline-flex lg:h-9 p-1 items-center justify-center rounded bg-background px-4 shadow-[0_2px_10px] focus:shadow-muted-foreground focus:shadow-[0_0_0_2px]">
				{title}
			</button>
		</Dialog.Trigger>
	)
}