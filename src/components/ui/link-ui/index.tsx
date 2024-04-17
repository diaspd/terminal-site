import Link from "next/link"
import { AnchorHTMLAttributes, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const link = tv({
	base: [
		"font-semibold ml-2 rounded border-2 border-transparent focus-visible:border-zinc-500 hover:text-zinc-600", 
		"transition-all duration-500",
		"active:opacity-80",
	],
	variants: {
		variant: {
			move:
        "inline-block hover:translate-y-2",
		},
	}
})

interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof link> {
	url: string
	children: ReactNode
}

export function LinkUi({url, children, variant, className, ...props}: LinkProps) {
	return (
		<Link
			href={url}
			className={link({ variant, className })}
			{...props} 
		>
			{children}
		</Link>
	
	)
}