import { type FC, type RefObject, useRef } from 'react'
import { type SwiperRef } from 'swiper/react/swiper-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { generatePath, Link } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'

import { AppRoute } from 'src/routes/main-routes/consts'

import styles from './index.module.scss'

import { SliderBtns } from 'src/components/slider-btns/slider-btns'
import {
	NewsSliderItems,
	newsSliderOptions,
} from 'src/layouts/main-layout/pages/home-page/components/news-section/consts'

export const NewsSection: FC = () => {
	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)
	return (
		<section className={styles.newsSection}>
			<Container>
				<h4>Новости</h4>
			</Container>
			<Container $margin='0 auto 28px auto' $width='1300px'>
				<Swiper className={styles.newsSlider} {...newsSliderOptions} ref={swiperRef}>
					{NewsSliderItems?.map((slideItem, idx) => (
						<SwiperSlide key={idx}>
							<Link
								className={styles.slideItem}
								to={generatePath('departments-list/:id/departments-details-info', {
									id: slideItem.id,
								})}
							>
								<div className={styles.slideImgWrapper}>
									<img src={slideItem.hoverImg} alt={slideItem.text} />
								</div>
								<p>{slideItem.text}</p>
								<span>{slideItem.date}</span>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
				<SliderBtns topPosition='50%' swiperRef={swiperRef} />
			</Container>
			<Container>
				<Link className={styles.allNewsLink} to={AppRoute.News}>
					Все новости
				</Link>
			</Container>
		</section>
	)
}
