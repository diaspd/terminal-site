import Link from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const link = tv({
	base: [
		'font-medium rounded border-2 border-transparent focus-visible:muted-foreground', 
		'text-foreground hover:text-muted-foreground',
		'transition-all duration-200',
		'active:opacity-80',
	],
	variants: {
		variant: {
			move:
        'inline-block hover:translate-y-2',
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