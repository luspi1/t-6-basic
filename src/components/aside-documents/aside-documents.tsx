import { type FC } from 'react'
import { type ShortDocument } from 'src/types/document'

import styles from './index.module.scss'

type AsideDocumentsProps = {
	documents: ShortDocument[] | undefined
}

export const AsideDocuments: FC<AsideDocumentsProps> = ({ documents }) => {
	if (!documents?.length) return null
	return (
		<ul className={styles.documents}>
			{documents?.map((item) => (
				<li key={item.id}>
					<a className={styles.documentLink} href='#' download>
						{item.title}
					</a>

					<p className={styles.documentInfo}>
						{item.type}-файл, {item.size}
					</p>
				</li>
			))}
		</ul>
	)
}
