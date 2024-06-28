import { type FC, type RefObject, useRef } from 'react'

import { Swiper, type SwiperRef, SwiperSlide } from 'swiper/react'

import { SliderBtns } from 'src/components/slider-btns/slider-btns'
import { Container } from 'src/UI/Container/Container'

import { EthnosportSliderItems, ethnosportSliderOptions } from './consts'

import styles from './index.module.scss'

export const EthnosportSection: FC = () => {
	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)

	return (
		<section className={styles.ethnosportSection}>
			<Container>
				<h4>Этноспорт</h4>
			</Container>
			<Container $margin='0 auto 28px auto' $width='1300px'>
				<Swiper className={styles.ethnosportSlider} {...ethnosportSliderOptions} ref={swiperRef}>
					{EthnosportSliderItems?.map((slideItem, idx) => (
						<SwiperSlide key={idx}>
							<div className={styles.slideItem}>
								<div className={styles.slideImgWrapper}>
									<img src={slideItem.img} alt={slideItem.title} />
								</div>
								<div className={styles.slideTitleWrapper}>
									<a href='#'>{slideItem.title}</a>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<SliderBtns topPosition='50%' swiperRef={swiperRef} />
			</Container>
		</section>
	)
}
