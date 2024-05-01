import shiki from "shiki"

import { CodePreview } from "./code-preview"

interface GistProps {
  gistUrl: string
}

export async function GistContent({ gistUrl }: GistProps) {
	const settingsResponse = await fetch(gistUrl)
	const settings = await settingsResponse.text()

	const highlighter = await shiki.getHighlighter({
		theme: "min-dark",
	})

	const code = highlighter.codeToHtml(settings, { lang: "json" })

	return <CodePreview code={code} raw={settings} />
}