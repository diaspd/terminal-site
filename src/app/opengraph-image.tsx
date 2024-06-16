import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
	width: 1200,
	height: 630,
}

export const contentType = 'image/png'

export default async function OgImage() {
	const ImageURL = new URL('terminal.png', 'https://pedro-dias.vercel.app/').toString()

	return new ImageResponse(
		(
			<div
				style={{
					background: '#141418',
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<img
					src={ImageURL}
					style={{
						width: '100%',
						borderRadius: '10px',
					}}
					alt=""
				/>
			</div>
		),
		{
			...size,
		},
	)
}
