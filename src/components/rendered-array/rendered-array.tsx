import { type ElementType, type FC } from 'react'

type RenderedArrayProps = {
	strArray: string[] | undefined
	separator?: string
	as?: ElementType
	asStr?: ElementType
	limit?: number
	className?: string
}

export const RenderedArray: FC<RenderedArrayProps> = ({
	as: Component = 'p',
	asStr: StrComponent,
	className,
	strArray,
	separator = ', ',
	limit,
}) => {
	if (!strArray?.length) return null

	const limitedStrings = limit ? strArray.slice(0, limit) : strArray
	const remainingStrings = limit && strArray.length > limit ? strArray.length - limit : 0
	return (
		<Component className={className}>
			{StrComponent
				? limitedStrings.map((strEl, idx) =>
						idx + 1 === strArray.length ? (
							<StrComponent key={idx}>{strEl}</StrComponent>
						) : (
							<StrComponent key={idx}>
								{strEl}
								{separator}
							</StrComponent>
						),
					)
				: limitedStrings.map((strEl, idx) =>
						idx + 1 === strArray.length ? strEl : `${strEl}${separator}`,
					)}
			{remainingStrings > 0 && <span>еще {remainingStrings}</span>}
		</Component>
	)
}
