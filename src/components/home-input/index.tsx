'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Input } from '../ui/input'

const inputFormSchema = z.object({
	input: z.string(),
})

type FormInput = z.infer<typeof inputFormSchema>

export function HomeInput() {
	const router = useRouter()
	const [messages, setMessages] = useState<string[]>([])
	const [isDisabled, setIsDisabled] = useState(false)

	const { register, handleSubmit, reset } = useForm<FormInput>({
		resolver: zodResolver(inputFormSchema),
	})

	function handleSubmitInput(data: FormInput) {
		const logMessages = ['~\\ Compiling...', '~\\ Success ✓', '~\\ Redirecting...']

		setMessages([])
		setIsDisabled(true)
		reset()
	
		logMessages.forEach((msg, index) => {
			setTimeout(() => {
				setMessages((prev) => [...prev, msg])
			}, index * 1000) 
		})
	
		setTimeout(() => {
			const input = data.input.toLowerCase()
			const routes: Record<string, string> = {
				github: '/github',
				instagram: '/instagram',
				'vscode config': '/vscode/settings',
				'vscode extensions': '/vscode/extensions',
				knowledge: '/knowledge',
				certificates: '/certificates',
				projects: '/projects',
				linkedin: '/linkedin',
				twitter: '/twitter',
			}
	
			const path = routes[input] || '/'
			router.push(`${path}`)
		}, logMessages.length * 1000 + 500)
	}
	

	return (
		<div className="pl-4 text-foreground font-mono">
			<div className="space-y-1 mb-4">
				{messages.map((msg, i) => (
					<p key={i} className="text-xl py-1.5">{msg}</p>
				))}
			</div>

			<form onSubmit={handleSubmit(handleSubmitInput)} className="flex items-center gap-2">
				<span className="text-xl select-none">~\</span>

				<Input
					{...register('input')}
					list="search-suggestions"
					type="text"
					required
					disabled={isDisabled}
					className="black:invisible border-0 rounded-none focus-visible:rounded-md animate-pulse valid:animate-none focus:animate-none valid:border-0 focus-within:border-0 focus-within:ring-0 border-foreground border-l-4 text-xl text-foreground px-0"
				/>

				<datalist id="search-suggestions">
					<option value="github" />
					<option value="knowledge" />
					<option value="projects" />
					<option value="certificates" />
					<option value="vscode config" />
					<option value="vscode extensions" />
					<option value="instagram" />
					<option value="linkedin" />
					<option value="twitter" />
				</datalist>
			</form>
		</div>
	)
}
