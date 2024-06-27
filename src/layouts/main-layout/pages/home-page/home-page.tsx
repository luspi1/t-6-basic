import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { SliderSearch } from 'src/layouts/main-layout/pages/home-page/components/slider-search/slider-search'
import { EthnosportSection } from 'src/layouts/main-layout/pages/home-page/components/ethnosport-section/ethnosport-section'
import { EventsSection } from 'src/layouts/main-layout/pages/home-page/components/events-section/events-section'
import { NewsSection } from 'src/layouts/main-layout/pages/home-page/components/news-section/news-section'
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
			<NewsSection />
			<FeedbackSection />
		</div>
	)
}
