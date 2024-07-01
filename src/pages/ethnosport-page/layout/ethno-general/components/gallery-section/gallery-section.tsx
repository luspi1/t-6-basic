import { type FC } from 'react'

import { PhotoGallery } from 'src/components/photo-gallery/photo-gallery'

export const GallerySection: FC = () => {
	return (
		<section>
			<PhotoGallery photos={[]} />
		</section>
	)
}
