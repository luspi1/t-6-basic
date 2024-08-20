import { type FC } from 'react'
import ImageGallery, { type ReactImageGalleryProps } from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

type ImageGalleryProps = {
	className?: string
} & ReactImageGalleryProps

export const GalleryImg: FC<ImageGalleryProps> = ({ className, ...props }) => {
	if (!props.items?.length) return
	return (
		<div className={className}>
			<ImageGallery {...props} />
		</div>
	)
}
