import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { PageContent } from 'src/components/page-content/page-content'
import { GallerySection } from 'src/pages/ethnosport-page/layout/ethno-general/components/gallery-section/gallery-section'
import { DescSection } from 'src/pages/ethnosport-page/layout/ethno-general/components/desc-section/desc-section'

export const EthnoGeneral: FC = () => {
	return (
		<PageContent $padding='30px 73px 25px 30px'>
			<Helmet>
				<title>Об этноспорте</title>
			</Helmet>

			<h2>Об этноспорте</h2>
			<GallerySection />
			<DescSection />
		</PageContent>
	)
}
