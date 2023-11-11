import { GistContent } from "../gist-content"

export const metadata = {
	title: "VsCode Settings",
}

export default async function VsCodeSettings() {
	{/* @ts-expect-error Server Component */}
	return <GistContent gistUrl="https://gist.githubusercontent.com/diaspd/2a86958cf0f6c8d808f3a123aee5af11/raw/b5e20712ea2a1d0602f87cc086420f296d15044b/settings.json" />
}