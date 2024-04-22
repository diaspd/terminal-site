import "../styles/global.css"

import type { Metadata } from "next"
import { Prompt } from "next/font/google"
import { Toaster } from "sonner"

import { Header } from "@/components/header"

import { ThemeProvider } from "../components/theme-provider"

const prompt = Prompt({ subsets: ["latin"], weight: ["100", "200", "400", "500", "600", "700", "800", "900"], variable: "--font-prompt" })

export const metadata: Metadata = {
	title: {
		template: "%s | Terminal",
		default: "Terminal",
	},
	icons: {
		icon: "https://github.com/diaspd.png"
	},
	metadataBase: new URL("https://pedro-dias.vercel.app/"),
	description:
	"My personal website for people discover more about me Pedro Dias, hope you enjoy !! react reactjs pedrodiasreactjs reactnative javascript js nodejs frontend backend fullstack mobile AI pedro dias reactjs",
}

export default function RootLayout({children}: { children: React.ReactNode}) {
	return (
		<html lang="en" className={prompt.variable}>
			<head />
			
			<body className="antialiased">
				<Toaster invert position="top-right"/>
				
				<ThemeProvider>
					<div
						className="flex dark:from-black dark:to-black text-zinc-100 items-center justify-center h-screen w-screen bg-gradient-to-r from-black via-zinc-800 to-[#035E7B]"
					>
						<div
							className="pb-2 dark:bg-black dark:select-none bg-zinc-900 rounded-md h-1/2 lg:max-h-4/6 m-8 lg:h-4/6 md:w-3/6 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-100 shadow-md"
						>
							<Header />
						
							{children}
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}