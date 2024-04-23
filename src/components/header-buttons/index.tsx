"use client"

import { useTheme } from "../theme/theme-provider"

export function HeaderButtons() {
	const { setTheme } = useTheme()

	return (
		<div className="flex gap-3">
			<button
				onClick={() => setTheme("black")}
				aria-label="Close"
				className="rounded-full
       bg-red-500 size-5
       hover:bg-red-700
       transition-all
       duration-200
       focus-within:border-zinc-300 focus-within:ring-2 focus-within:ring-zinc-200 
       "
			/>

			<button
				className="rounded-full
       bg-yellow-400 size-5
       hover:bg-yellow-600  
       transition-all
       duration-200
       focus-within:border-zinc-300 focus-within:ring-2 focus-within:ring-zinc-200 
       "
			/>

			<button
				onClick={() => setTheme("dark")}
				aria-label="Open terminal"
				className="rounded-full
       bg-lime-400 size-5
       hover:bg-lime-600  
       transition-all
       duration-200
       focus-within:border-zinc-300 focus-within:ring-2 focus-within:ring-zinc-200 
       "
			/>
		</div>
	)
}
