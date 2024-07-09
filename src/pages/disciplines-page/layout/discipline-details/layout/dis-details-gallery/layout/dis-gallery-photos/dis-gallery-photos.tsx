import React, { type FC } from 'react'
import { useParams } from 'react-router-dom'
import { useGetDisciplineByIdQuery } from 'src/store/disciplines/disciplines.api'
import { Loader } from 'src/components/loader/loader'
import { PhotoGallery } from 'src/components/photo-gallery/photo-gallery'

import styles from './index.module.scss'
export const DisGalleryPhotos: FC = () => {
	const { id } = useParams()
	const { data: disDetails, isLoading } = useGetDisciplineByIdQuery(id ?? '')
	if (isLoading) return <Loader />
	return (
		<section>
			<p className={styles.disGalleryDesc}>
				Всего фото: <b>{disDetails?.photos?.length}</b>
			</p>
			<PhotoGallery photos={disDetails?.photos} $photoWidth='176px' $photoHeight='138px' />
		</section>
	)
}
