"use client"

import { Check, Copy } from "lucide-react"
import { useState } from "react"

import { Compiler } from "@/components/compiler"

interface CodePreviewProps {
  code: string
  raw?: string
}

export function CodePreview({ code, raw }: CodePreviewProps) {
	const [hasCopiedToClipboard, setCopiedToClipboard] = useState(false)

	const handleCopyToClipboard = () => {
		if (!raw) return
		navigator.clipboard.writeText(raw)
		setCopiedToClipboard(true)
		setTimeout(() => setCopiedToClipboard(false), 2200)
	}

	return (
		<>
			<Compiler />

			<div className="p-5 m-5 bg-[#282A36] ml-14 mt-5 w-10/12 mb-10 h-fit rounded-md relative">
				<button
					title="copy"
					className="mb-4 cursor-pointer w-fit bg-zinc-800 absolute right-10 flex gap-2 border-2 rounded focus-visible:border-zinc-100 border-zinc-800"
					onClick={handleCopyToClipboard}
				>
					{!hasCopiedToClipboard ? 
						(<Copy className="hover:text-zinc-500 text-zinc-100" size={26} />) : 
						(<Check className="text-emerald-400 border-2 border-emerald-500 rounded" size={26} />)
					}      
				</button>
				
				<div
					id="shiki-code"
					className="leading-relaxed w-full h-80 rounded-sm bg-[#282A36] font-medium overflow-scroll md:overflow-x-hidden focus-within:border-zinc-300 focus-within:ring-2 focus-within:ring-zinc-100 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-100"
					dangerouslySetInnerHTML={{ __html: code }}
				/>
			</div>
		</>
	)
}