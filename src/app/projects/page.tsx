import { Compiler } from '@/components/compiler'
import { LinkUi } from '@/components/ui/link-ui'

export const metadata = {
	title: 'Projects',
}

export default function Projects() {
	return (
		<>
			<Compiler />

			<div className="bg-foreground/10 rounded-md md:ml-14 px-12 lg:px-4 py-4 space-y-4 w-fit m-5">
				<span className="text-xl font-semibold">Projects online:</span>
			
				<LinkUi 
					target="_blank" 
					url="https://book-wise-delta.vercel.app/" 
					className="block"
				> Book Wise
				</LinkUi>
			
				<LinkUi 
					target="_blank" 
					url="https://ignite-call-diaspd.vercel.app/" 
					className="block"
				> Ignite Call
				</LinkUi>
					
				<LinkUi 
					target="_blank" 
					url="https://untitled-ui-rouge.vercel.app/" 
					className="block"
				> Untitled UI
				</LinkUi>
				
				<LinkUi 
					target="_blank" 
					url="https://ignite-shop-pearl-three.vercel.app/" 
					className="block"
				> Ignite Shop
				</LinkUi>

				<LinkUi 
					target="_blank" 
					url="https://ignite-timer-five-chi.vercel.app/" 
					className="block"
				> Ignite Timer
				</LinkUi>

				<LinkUi 
					target="_blank" 
					url="https://github-blog-e7ik2ctob-diaspd.vercel.app/" 
					className="block"
				> Github Blog
				</LinkUi>

				<LinkUi 
					target="_blank" 
					url="https://coffee-delivery-wheat-nu.vercel.app/" 
					className="block"
				> Coffee Delivery
				</LinkUi>

				<LinkUi 
					target="_blank" 
					url="https://to-do-tan-eight.vercel.app/" 
					className="block"
				> To do
				</LinkUi>

				<LinkUi 
					target="_blank" 
					url="https://letmeask-88cb8.web.app/" 
					className="block"
				> Let Me Ask
				</LinkUi>
						
				<LinkUi 
					target="_blank" 
					url="https://moveit-h9tlq1493-diaspd.vercel.app/" 
					className="block"
				> Move It
				</LinkUi>

				<LinkUi 
					target="_blank" 
					url="https://diaspd.github.io/design-system-ignite" 
					className="block"
				> Design System
				</LinkUi>

				<LinkUi 
					target="blank" 
					url="https://diaspd.github.io/gesture-controller/template" 
					className="block"
				> Gesture Controller
				</LinkUi>
			</div>
		</>
	)
}