"use client"

import { useTheme } from "next-themes"

export function HeaderButtons() {
	const { theme, setTheme } = useTheme()

	function handleClose() {
		if (theme === "light") {
			setTheme("dark")
		}
	}
  
	function handleMaximize() {
		if (theme === "dark") {
			setTheme("light")
		}
	}

	return (
		<div className="flex gap-3">
			<button
				onClick={handleClose}
				aria-label="Close"
				className="rounded-full
       bg-red-500 h-5 w-5 
       hover:bg-red-700
       transition-all
       duration-500
       focus-within:border-zinc-300 focus-within:ring-2 focus-within:ring-zinc-200 
       "
			/>

			<button
				className="rounded-full
       bg-yellow-400 h-5 w-5 
       hover:bg-yellow-600  
       transition-all
       duration-500
       focus-within:border-zinc-300 focus-within:ring-2 focus-within:ring-zinc-200 
       "
			/>

			<button
				onClick={handleMaximize}
				aria-label="Open terminal"
				className="rounded-full
       bg-lime-400 h-5 w-5 
       hover:bg-lime-600  
       transition-all
       duration-500
       focus-within:border-zinc-300 focus-within:ring-2 focus-within:ring-zinc-200 
       "
			/>
		</div>
	)
}
