import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { SliderSearch } from 'src/layouts/main-layout/pages/home-page/components/slider-search/slider-search'
import { EthnosportSection } from 'src/layouts/main-layout/pages/home-page/components/ethnosport-section/ethnosport-section'
import { EventsSection } from 'src/layouts/main-layout/pages/home-page/components/events-section/events-section'
import { VideotapeSection } from 'src/layouts/main-layout/pages/home-page/components/videotape-section/videotape-section'
import { NewsSection } from 'src/layouts/main-layout/pages/home-page/components/news-section/news-section'
import { PartnersSection } from 'src/layouts/main-layout/pages/home-page/components/partners-section/partners-section'
import { FeedbackSection } from 'src/layouts/main-layout/pages/home-page/components/feedback-section/feedback-section'

import styles from './index.module.scss'

export const HomePage: FC = () => {
	return (
		<div className={styles.homePage}>
			<Helmet>
				<title>Главная</title>
			</Helmet>
			<SliderSearch />
			<EthnosportSection />
			<EventsSection />
			<VideotapeSection />
			<NewsSection />
			<PartnersSection />
			<FeedbackSection />
		</div>
	)
}
