import { type FC, type RefObject, useRef } from 'react'

import { Swiper, type SwiperRef, SwiperSlide } from 'swiper/react'

import { SliderBtns } from 'src/components/slider-btns/slider-btns'
import { Container } from 'src/UI/Container/Container'
import { useGetHomeEthnoQuery } from 'src/store/home/home.api'

import { ethnosportSliderOptions } from './consts'

import styles from './index.module.scss'

export const EthnosportSection: FC = () => {
	const { data: ethnosportData } = useGetHomeEthnoQuery(null)

	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)

	return (
		<section className={styles.ethnosportSection}>
			<Container>
				<h4>Этноспорт</h4>
			</Container>
			<Container $margin='0 auto 28px auto' $width='1300px'>
				<Swiper className={styles.ethnosportSlider} {...ethnosportSliderOptions} ref={swiperRef}>
					{ethnosportData?.map((slideItem, idx) => (
						<SwiperSlide key={idx}>
							<div className={styles.slideItem}>
								<div className={styles.slideImgWrapper}>
									<img src={slideItem.image_url} alt={slideItem.name} />
								</div>
								<div className={styles.slideTitleWrapper}>
									<a href='#'>{slideItem.name}</a>
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
