import { type FC } from 'react'
import { type ProgramListItem } from 'src/types/program'

import styles from './index.module.scss'

type ProgramListProps = {
	list: ProgramListItem[]
}

export const ProgramList: FC<ProgramListProps> = ({ list }) => {
	if (!list?.length) return null
	return (
		<ul className={styles.listProgram}>
			{list.map((programEL) => (
				<li key={programEL.id}>
					<span className={styles.programTime}>{programEL.time}</span>
					<span className={styles.programPlace}>{programEL.place}</span>
					<span className={styles.programTitle}>{programEL.title}</span>
					<a className={styles.programPageLink} href='#'>
						На страницу
					</a>
				</li>
			))}
		</ul>
	)
}
