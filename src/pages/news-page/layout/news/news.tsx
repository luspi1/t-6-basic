import { type FC, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { NewsList } from 'src/modules/news-list/news-list'
import { PageContent } from 'src/components/page-content/page-content'
import { useGetAllNewsQuery } from 'src/store/news/news.api'

export const News: FC = () => {
	const [yearsValue, setYearsValue] = useState<string>('')

	const { data: newsList, isSuccess } = useGetAllNewsQuery({ year: yearsValue })

	return (
		<PageContent $padding='30px 40px 55px 30px' $maxWidth='100%'>
			<Helmet>
				<title>Все новости</title>
			</Helmet>
			<NewsList
				newsItems={newsList ?? []}
				title='Все новости'
				setYearsValue={setYearsValue}
				yearsValue={yearsValue}
				isSuccess={isSuccess}
			/>
		</PageContent>
	)
}
