import { type SwiperProps } from 'swiper/react'

import { DisplayBreakpoints } from 'src/helpers/consts'

import slide1 from 'src/assets/img/ethno-slide-1.jpg'
import slide2 from 'src/assets/img/ethno-slide-2.jpg'
import slide3 from 'src/assets/img/ethno-slide-3.jpg'
import slide4 from 'src/assets/img/ethno-slide-4.jpg'

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

export const EthnosportSliderItems = [
	{
		title: 'Русский этноспорт',
		img: slide1,
	},
	{
		title: 'Бурятский этноспорт',
		img: slide2,
	},
	{
		title: 'Башкирский Этноспорт',
		img: slide3,
	},
	{
		title: 'Ханты-Мансийский Этноспорт',
		img: slide4,
	},
	{
		title: 'Русский этноспорт',
		img: slide1,
	},
	{
		title: 'Бурятский этноспорт',
		img: slide2,
	},
	{
		title: 'Башкирский Этноспорт',
		img: slide3,
	},
	{
		title: 'Ханты-Мансийский Этноспорт',
		img: slide4,
	},
]
