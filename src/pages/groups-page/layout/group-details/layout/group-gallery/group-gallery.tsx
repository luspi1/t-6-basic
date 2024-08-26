import { type FC } from 'react'

import { Link, useParams } from 'react-router-dom'

import { useGetUserPhotoQuery } from 'src/store/users/users.api'

import { GalleryImg } from 'src/components/image-gallery/image-gallery'
import styles from './index.module.scss'

export const GroupGallery: FC = () => {
	const { id } = useParams()

	const { data: photosData } = useGetUserPhotoQuery(id ?? '')

	return (
		<section className={styles.groupGallery}>
			<div className={styles.galleryHeader}>
				<p className={styles.galleryLengthInfo}>
					Всего фото: <b>{Number(photosData?.length)}</b>
				</p>
			</div>

			<h4>Фото</h4>
			<GalleryImg className={styles.userPhotos} images={photosData} />

			<Link className={styles.allAlbumsLink} to='/'>
				Показать еще 12 фото
				<b>{Number(photosData?.length)}</b>
			</Link>
		</section>
	)
}
