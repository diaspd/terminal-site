import { GistContent } from "../gist-content"

export const metadata = {
	title: "VsCode Extensions",
}

export default async function VsCodeExtensions() {
	{/* @ts-expect-error Server Component */}
	return <GistContent gistUrl="https://gist.githubusercontent.com/diaspd/89aa022a3ba288fee8903f4e1c9c856a/raw/eb9c67c6d5676bb3596a3dc169703b0556063fc8/extensions.json" />
}