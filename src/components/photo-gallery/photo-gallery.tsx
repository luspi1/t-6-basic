import { type FC } from 'react'

import styles from './index.module.scss'

type PhotoGalleryItem = {
	id: string
	photoUrl: string
	description?: string
}
type PhotoGalleryProps = {
	title?: string
	photos?: PhotoGalleryItem[]
	className?: string
}
export const PhotoGallery: FC<PhotoGalleryProps> = ({ title, photos = [], className }) => {
	if (photos?.length < 1) return null
	return (
		<div className={className}>
			{title && <h4>{title}</h4>}
			<ul className={styles.gallery}>
				{photos?.map((item) => (
					<li key={item.id}>
						<div className={styles.imageWrapper}>
							<img src={item.photoUrl} alt={item.description} />
						</div>
						<p>{item.description}</p>
					</li>
				))}
			</ul>
		</div>
	)
}
