import { type FC } from 'react'
import { useParams } from 'react-router-dom'

import { useGetEthnosportByIdQuery } from 'src/store/ethnosport/ethnosport.api'
import { Loader } from 'src/components/loader/loader'
import { CustomText } from 'src/components/custom-text/custom-text'
import { InfoRow } from 'src/UI/InfoRow/InfoRow'

import styles from './index.module.scss'

export const EthnoDetailsHistory: FC = () => {
	const { id } = useParams()
	const { data: ethnoDetails, isLoading } = useGetEthnosportByIdQuery(id ?? '')
	if (isLoading) return <Loader />
	if (!ethnoDetails) return null
	const { history: directionHistory } = ethnoDetails
	return (
		<section>
			<CustomText $margin='0 0 25px 0' $fontSize='16px' $lineHeight='1.4'>
				{directionHistory?.mainDesc ?? ''}
			</CustomText>
			{directionHistory?.chronology?.map((el, idx) => (
				<InfoRow
					wrapperClassname={styles.chronoRow}
					key={idx}
					title={el.date}
					label={el.text}
					titleWidth='82'
					margin='0 0 15px 0'
				/>
			))}
		</section>
	)
}
