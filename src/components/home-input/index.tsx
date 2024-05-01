"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Input } from "../ui/input"

const inputFormSchema = z.object({
	input: z.string(),
})

type FormInput = z.infer<typeof inputFormSchema>

export function HomeInput() {
	const router = useRouter()

	const { register, handleSubmit } = useForm<FormInput>({
		resolver: zodResolver(inputFormSchema)
	})

	function handleSubmitInput(data: FormInput) {
		switch (data.input) {
		case "github":
			router.push("/github")
			break
		case "GITHUB":
			router.push("/github")
			break
		case "instagram":
			router.push("/instagram")
			break
		case "INSTAGRAM":
			router.push("/instagram")
			break
		case "vscode config":
			router.push("/vscode/settings")
			break
		case "VSCODE CONFIG":
			router.push("/vscode/settings")
			break
		case "vscode extensions":
			router.push("/vscode/extensions")
			break
		case "VSCODE EXTENSIONS":
			router.push("/vscode/extension")
			break
		case "knowledge":
			router.push("/knowledge")
			break
		case "KNOWLEDGE":
			router.push("/knowledge")
			break
		case "certificates":
			router.push("/certificates")
			break
		case "CERTIFICATES":
			router.push("/certificates")
			break
		case "projects":
			router.push("/projects")
			break
		case "PROJECTS":
			router.push("/projects")
			break
		case "linkedin":
			router.push("/linkedin")
			break
		case "LINKEDIN":
			router.push("/linkedin")
			break
		case "twitter":
			router.push("/twitter")
			break
		case "TWITTER":
			router.push("/twitter")
			break
		default:
			router.push("/")
		}
	}

	return (
		<form onSubmit={handleSubmit(handleSubmitInput)}>
			<label htmlFor="input" className="sr-only">
				Ex: github
			</label>

			<Input
				list="search-suggestions"
				{...register("input")}
				type="text"
				required
				className="black:invisible border-0 rounded-none focus-visible:rounded-md animate-pulse valid:animate-none valid:border-0 focus-within:border-0 border-foreground border-l-4 text-2xl text-foreground"
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
	)
}
