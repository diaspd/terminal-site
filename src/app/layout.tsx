import '../styles/global.css'

import type { Metadata } from 'next'
import { Prompt } from 'next/font/google'
import { Toaster } from 'sonner'

import { Header } from '@/components/header'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { ThemeToggle } from '@/components/theme/theme-toggle'

const prompt = Prompt({ subsets: ['latin'], weight: ['100', '200', '400', '500', '600', '700', '800', '900'], variable: '--font-prompt' })

export const metadata: Metadata = {
	title: {
		template: '%s | Terminal',
		default: 'Terminal',
	},
	icons: {
		icon: 'https://github.com/diaspd.png'
	},
	metadataBase: new URL('https://pedro-dias.vercel.app/'),
	description:
	'My personal website for people discover more about me Pedro Dias, hope you enjoy !! react reactjs pedrodiasreactjs reactnative javascript js nodejs frontend backend fullstack mobile AI pedro dias reactjs',
}

export default function RootLayout({children}: { children: React.ReactNode}) {
	return (
		<html lang="en" className={prompt.variable}>
			<head />
			<body className="antialiased group">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
					themes={['dark', 'light', 'black']}
				>
					<Toaster invert position="bottom-right" />

					<div className="fixed right-5 top-5">
						<ThemeToggle />
					</div>

					<div
						className="flex text-foreground items-center bg-muted-foreground justify-center h-screen w-screen dark:bg-gradient-to-r dark:from-black dark:via-zinc-800 dark:to-zinc-600"
					>
						<main
							className="pb-2 black:select-none bg-background rounded-md h-1/2 lg:max-h-4/6 m-8 lg:h-4/6 md:w-3/6 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-foreground shadow-lg"
						>
							<Header />
						
							{children}
						</main>
					</div>
					
				</ThemeProvider>
			</body>
		</html>
	)
}