import { type FC } from 'react'
import { useParams } from 'react-router-dom'

import { useGetEthnosportByIdQuery } from 'src/store/ethnosport/ethnosport.api'
import { Loader } from 'src/components/loader/loader'

export const EventProgram: FC = () => {
	const { id } = useParams()
	const { data: ethnoDetails, isLoading } = useGetEthnosportByIdQuery(id ?? '')

	if (isLoading) return <Loader />
	if (!ethnoDetails) return null

	return <section>Программа</section>
}
