import * as Dialog from "@radix-ui/react-dialog"

import Link from "next/link"
import { X } from "phosphor-react"

interface ContentProps{
  title: string
  description: string
  url: string
}

export function Content({title, description, url}: ContentProps) {
	return (
		<Dialog.Portal>
			<Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 backdrop-blur-md" />
			
			<Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] text-white left-[50%] max-h-[40vh] md:max-h-[80vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded bg-gray-800 p-6 divide-y-2 overflow-auto md:overflow-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-100">

				<header className="bg-clip-border border-zinc-50 pb-5">
					<Dialog.Title className="m-0 text-xl font-semibold">
						{title}
					</Dialog.Title>

					<Dialog.Close className="absolute top-5 right-5 inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-lg focus:shadow-[0_0_0_2px] hover:text-zinc-500 transition-all duration-300" aria-label="Close">
						<X size={24}/>
					</Dialog.Close>
				</header>

				<div className="mb-[15px] flex gap-3 py-2 pt-5">
					<p className="w-[90px] text-left text-xl">
        Link 	to:
					</p>
					<Link className="font-semibold text-xl rounded border-2 border-gray-800 focus:border-gray-500" target="_blank" href={url}>
        Certificate
					</Link> 
				</div>

				<section className="mb-[15px] flex gap-5 pt-5">
					<p className="w-[90px] text-left text-xl">
        Learned:
					</p>
					<span className="text-white">
						{description}
					</span>
				</section>
			</Dialog.Content>
		</Dialog.Portal>
	)
}