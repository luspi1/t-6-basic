import { type FC } from 'react'
import styles from './index.module.scss'

export const ContactsInfo: FC = () => {
	return (
		<>
			<div className={styles.contactsBlock}>
				<h4>Почтовый адрес</h4>
				<p>119019, Москва, Гагаринский пер., 4/2</p>
			</div>

			<div className={styles.contactsBlock}>
				<h4>Телефоны</h4>
				<p>
					Демидов Артём Геннадьевич <br /> Председатель Центрального совета <br />8 (495) 695-07-06
					(приемная)
				</p>
			</div>

			<div className={styles.contactsBlock}>
				<h4>Электронная почта</h4>
				<p>
					Для писем, связанных с работой Общества <br />
					<a href='mailto:csvoopik@mail.ru'>csvoopik@mail.ru</a>
				</p>
			</div>

			<div className={styles.contactsLinks}>
				<a href='#'>Центральный Совет ВООПИиК</a>
				<a href='#'>Региональные отделения</a>
			</div>
		</>
	)
}
