import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { breadCrumbsActions } from 'src/modules/bread-crumbs/store/bread-crumbs.slice'
import { adminTitleActions } from 'src/modules/admin-title/store/admin-title.slice'

const actions = {
	...breadCrumbsActions,
	...adminTitleActions,
}
export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}
