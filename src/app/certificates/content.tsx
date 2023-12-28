import * as Dialog from "@radix-ui/react-dialog"
import Image, { StaticImageData } from "next/image"

import Link from "next/link"
import { X }from "phosphor-react"

interface ContentProps{
  title: string
  description: string
  url?: string
  photoUrl: StaticImageData
}

export function Content({title, description, url, photoUrl}: ContentProps) {
	return (
		<Dialog.Portal>
			<Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 backdrop-blur-md" />
			
			<Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] text-white left-[50%] max-h-[50vh] w-11/12 lg:max-w-3xl translate-x-[-50%] translate-y-[-50%] rounded bg-zinc-800 p-6 divide-y-2 overflow-auto md:max-h-[60vh] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-100">

				<header className="bg-clip-border divide-zinc-100 border-zinc-50 pb-5 h-full">
					<Image 
						src={photoUrl} 
						width={600} 
						height={400} 
						alt="" 
						draggable="false"
						priority 
						className="w-11/12 h-96 hidden lg:flex" 
					/>
					
					<Dialog.Close className="absolute top-5 right-5 inline-flex h-6 w-6 appearance-none items-center justify-center rounded-lg focus:shadow-[0_0_0_2px] hover:text-zinc-500 transition-all duration-300" aria-label="Close">
						<X size={24}/>
					</Dialog.Close>
				</header>

				<div className="mb-6 lg:flex grid gap-3 py-2 pt-5">
					{url ? (
						<>
							<p className="w-full text-left text-xl whitespace-nowrap">
								Link to Certificate:
							</p>

							<Link className="whitespace-nowrap text-xl rounded border-2 border-zinc-800 focus:border-zinc-500 hover:text-zinc-600 transition-all duration-500" target="_blank" href={url}>
								{title}
							</Link>
						</>
					): (
						<p className="select-none whitespace-nowrap text-xl rounded border-2 border-zinc-800 focus:border-zinc-500">
							{title}
						</p>  
					)}
				</div>

				<section className="mb-6 lg:flex grid gap-5 pt-5">
					<p className="w-full text-left text-xl">
        Learned:
					</p>
					<span className="text-white mt-1">
						{description}
					</span>
				</section>
			</Dialog.Content>
		</Dialog.Portal>
	)
}