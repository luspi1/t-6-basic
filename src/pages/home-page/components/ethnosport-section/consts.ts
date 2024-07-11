import { type SwiperProps } from 'swiper/react'

import { DisplayBreakpoints } from 'src/helpers/consts'

export const ethnosportSliderOptions: SwiperProps = {
	slidesPerView: 1,
	spaceBetween: 12,
	grabCursor: true,
	loop: true,
	breakpoints: {
		[DisplayBreakpoints.Sm]: {
			slidesPerView: 2,
			spaceBetween: 8,
		},
		[DisplayBreakpoints.Lg]: {
			slidesPerView: 3,
		},
		[DisplayBreakpoints.Xxl]: {
			slidesPerView: 4,
		},
	},
}
