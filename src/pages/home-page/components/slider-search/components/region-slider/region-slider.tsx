import { type FC, type RefObject, useRef } from 'react'
import { type SwiperRef } from 'swiper/react/swiper-react'

import { generatePath, Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

import { SliderBtns } from 'src/components/slider-btns/slider-btns'
import { Container } from 'src/UI/Container/Container'

import { RegionSliderItems, regionSliderOptions } from './consts'

import styles from './index.module.scss'

export const RegionSlider: FC = () => {
	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)

	return (
		<Container $margin='0 auto 75px auto' $width='1300px'>
			<Swiper className={styles.regionSlider} {...regionSliderOptions} ref={swiperRef}>
				{RegionSliderItems?.map((slideItem, idx) => (
					<SwiperSlide key={idx}>
						<Link
							to={generatePath('departments-list/:id/departments-details-info', {
								id: slideItem.regionCode,
							})}
							className={styles.slideItem}
						>
							<div className={styles.slideImgWrapper}>
								<img src={slideItem.img} alt={slideItem.title} />
							</div>
							<span>{slideItem.title}</span>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
			<SliderBtns topPosition='30%' swiperRef={swiperRef} />
		</Container>
	)
}
