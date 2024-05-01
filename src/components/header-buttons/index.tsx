"use client"

import { useTheme } from "next-themes"

import { Button } from "../ui/button"

export function HeaderButtons() {
	const { setTheme } = useTheme()
  
	return (
		<div className="flex gap-3 mr-3 lg:mr-0">
			<Button
				onClick={() => {setTheme("black")}}
				variant="actions"
				size="xm"
				className="bg-red-500 hover:bg-red-700"
			/>

			<Button
				variant="actions"
				size="xm"
				className="bg-yellow-400 hover:bg-yellow-600"
			/>

			<Button
				onClick={() => {setTheme("dark")}}
				variant="actions"
				size="xm"
				className="bg-lime-400 hover:bg-lime-600"
			/>
		</div>
	)
}
