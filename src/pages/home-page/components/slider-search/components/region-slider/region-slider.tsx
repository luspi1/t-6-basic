import { type FC, type RefObject, useRef } from 'react'
import { type SwiperRef } from 'swiper/react/swiper-react'

import { generatePath, Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useGetHomeRegionsQuery } from 'src/store/home/home.api'
import { SliderBtns } from 'src/components/slider-btns/slider-btns'
import { Container } from 'src/UI/Container/Container'

import { regionSliderOptions } from './consts'

import styles from './index.module.scss'

export const RegionSlider: FC = () => {
	const { data: regionsData } = useGetHomeRegionsQuery(null)

	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)

	return (
		<Container $margin='0 auto 75px auto' $width='1300px'>
			<Swiper className={styles.regionSlider} {...regionSliderOptions} ref={swiperRef}>
				{regionsData?.map((slideItem) => (
					<SwiperSlide key={slideItem.id}>
						<Link
							to={generatePath('departments-list/:id/departments-details-info', {
								id: slideItem.id,
							})}
							className={styles.slideItem}
						>
							<div className={styles.slideImgWrapper}>
								<img src={slideItem.image_url} alt={slideItem.name} />
							</div>
							<span>{slideItem.name}</span>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
			<SliderBtns topPosition='30%' swiperRef={swiperRef} />
		</Container>
	)
}
