import { type FC } from 'react'

type RenderedArrayProps = {
	strArray: string[] | undefined
	separator?: string
}

export const RenderedArray: FC<RenderedArrayProps> = ({ strArray, separator = ', ' }) => {
	if (!strArray?.length) return null
	if (strArray)
		return (
			<p>
				{strArray.map((strEl, idx) =>
					idx + 1 === strArray.length ? strEl : `${strEl}${separator}`,
				)}
			</p>
		)
}
