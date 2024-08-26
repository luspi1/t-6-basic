import { type FC } from 'react'

import { Link, useParams } from 'react-router-dom'

import { useGetGroupPhotoQuery } from 'src/store/groups/groups.api'
import { GalleryImg } from 'src/components/image-gallery/image-gallery'

import styles from './index.module.scss'

export const GroupGallery: FC = () => {
	const { id } = useParams()

	const { data: photosData } = useGetGroupPhotoQuery(id ?? '')

	return (
		<section className={styles.groupGallery}>
			<div className={styles.galleryHeader}>
				<p className={styles.galleryLengthInfo}>
					Всего фото: <b>{photosData?.length}</b>
				</p>
			</div>

			<GalleryImg className={styles.groupPhotos} images={photosData} />

			<Link className={styles.allAlbumsLink} to='/'>
				Показать еще <b>{photosData?.length}</b> фото
			</Link>
		</section>
	)
}
