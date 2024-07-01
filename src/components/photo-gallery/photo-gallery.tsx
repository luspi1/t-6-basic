import { type FC } from 'react'

import styles from './index.module.scss'

type PhotoGalleryItem = {
	id: string
	photoUrl: string
	description?: string
}
type PhotoGalleryProps = {
	title?: string
	photos: PhotoGalleryItem[]
}
export const PhotoGallery: FC<PhotoGalleryProps> = ({ title, photos }) => {
	if (photos?.length < 1) return null
	return (
		<div>
			{title && <h4>{title}</h4>}
			<ul className={styles.gallery}>
				{photos?.map((item) => (
					<li key={item.id}>
						<figure className={styles.image}>
							<img src={item.photoUrl} alt={item.description} />
							<figcaption>{item.description}</figcaption>
						</figure>
					</li>
				))}
			</ul>
		</div>
	)
}
