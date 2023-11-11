import * as Dialog from "@radix-ui/react-dialog"

interface TriggerProps {
  title: string
}

export function ButtonTrigger({title}: TriggerProps) {
	return (
		<Dialog.Trigger asChild>
			<button className="mt-3 shadow-black inline-flex lg:h-9 p-1 items-center justify-center rounded bg-gray-700 px-4 shadow-[0_2px_10px] font-semibold focus:shadow-gray-500 focus:shadow-[0_0_0_2px]">
				{title}
			</button>
		</Dialog.Trigger>
	)
}