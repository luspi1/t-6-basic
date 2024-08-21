import { type FC, useRef, useState } from 'react'

import ImageGallery from 'react-image-gallery'
import { mainFormatDate } from 'src/helpers/utils'
import 'react-image-gallery/styles/css/image-gallery.css'
import { type ImageItem } from 'src/types/photos'

import styles from './index.module.scss'
import cn from 'classnames'
import { CustomFullscreenIcon } from 'src/UI/icons/customFullscreenIcon'

type ImageGalleryProps = {
	className?: string
	images?: ImageItem[]
}

export const GalleryImg: FC<ImageGalleryProps> = ({ className, images }) => {
	const [isFullscreenHidden, setIsFullscreenHidden] = useState(true)
	const galleryRef = useRef<ImageGallery>(null)

	const openFullscreen = (index: number) => {
		if (galleryRef.current) {
			galleryRef.current.slideToIndex(index)
			galleryRef.current.fullScreen()
			setIsFullscreenHidden(false)
		}
	}

	const renderFullscreenButton = (
		onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
	) => (
		<button
			type='button'
			className={cn('image-gallery-fullscreen-button', styles.customFsBtn)}
			onClick={onClick}
			aria-label='Fullscreen'
		>
			<CustomFullscreenIcon />
		</button>
	)

	if (!images?.length) return <h6>Нет изображений</h6>
	return (
		<div className={className}>
			<ul className={styles.gridGallery}>
				{images.map((img, idx) => (
					<li key={img.id} onClick={() => openFullscreen(idx)}>
						<div className={styles.gridImgWrapper}>
							<img src={img.thumbnail} alt={`image ${idx + 1}`} />
						</div>
						<h6>{img?.title}</h6>
						<span className={styles.imgDate}>{mainFormatDate(img.date)}</span>
					</li>
				))}
			</ul>
			<ImageGallery
				ref={galleryRef}
				renderFullscreenButton={renderFullscreenButton}
				showFullscreenButton={true}
				showPlayButton={false}
				additionalClass={cn(styles.imageGallery, { [styles.fullscreenHidden]: isFullscreenHidden })}
				items={images}
				onScreenChange={(isFullscreen) => !isFullscreen && setIsFullscreenHidden(true)}
			/>
		</div>
	)
}
