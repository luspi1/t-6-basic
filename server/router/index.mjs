import {
	deleteNews,
	getAllDisciplines,
	getDisciplineById,
	getEthnosportById,
	getEthnosportGlobal,
	getEventById,
	getEvents,
	getGroupById,
	getGroupDisciplinesById,
	getGroupEvent,
	getGroupParticipantes,
	getGroups,
	getGroupTable,
	getNews,
	getNewsById,
	getNewsVideoById,
	getNewsVideos,
	getObjectById,
	getObjects,
	getProjectById,
	getProjects,
	getRegionByCode,
	getRegionEvents,
	getRegionObjects,
	getRegionParticipants,
	getRegionPhotos,
	getRegionProjects,
	getRegions,
	getRegionVideos,
	getUserById,
	getUsers,
	getUsersDisciplines,
	getUsersEvent,
	getUsersGroup,
	getUsersMaterial,
	getUsersObject,
	getUsersPhotos,
	getUsersProject,
	getUsersVideos,
} from '../controllers/main-controller.mjs'
import { Router } from 'express'

export const router = new Router()

router.get('/regions', getRegions)
router.get('/regions/:code', getRegionByCode)
router.get('/regions/:code/participants', getRegionParticipants)
router.get('/regions/:code/events', getRegionEvents)
router.get('/regions/:code/objects', getRegionObjects)
router.get('/regions/:code/projects', getRegionProjects)
router.get('/regions/:code/photos', getRegionPhotos)
router.get('/regions/:code/videos', getRegionVideos)
router.get('/users', getUsers)
router.get('/users/:id', getUserById)
router.get('/users/:id/group', getUsersGroup)
router.get('/users/:id/event', getUsersEvent)
router.get('/users/:id/project', getUsersProject)
router.get('/users/:id/object', getUsersObject)
router.get('/users/:id/materials', getUsersMaterial)
router.get('/users/:id/disciplines', getUsersDisciplines)
router.get('/users/:id/photo', getUsersPhotos)
router.get('/users/:id/video', getUsersVideos)
router.get('/objects', getObjects)
router.get('/objects/:id', getObjectById)
router.get('/projects', getProjects)
router.get('/projects/:id', getProjectById)
router.get('/news', getNews)
router.get('/news-videos', getNewsVideos)
router.get('/news-videos/:id', getNewsVideoById)
router.get('/news/:id', getNewsById)
router.delete('/newsDelete/:id', deleteNews)
router.get('/events', getEvents)
router.get('/events/:id', getEventById)
router.get('/ethnosport', getEthnosportGlobal)
router.get('/ethnosport/:id', getEthnosportById)
router.get('/disciplines', getAllDisciplines)
router.get('/disciplines/:id', getDisciplineById)
router.get('/groups', getGroups)
router.get('/groups/:id', getGroupById)
router.get('/groups/:id/event', getGroupEvent)
router.get('/groups/:id/participantes', getGroupParticipantes)
router.get('/groups/:id/table', getGroupTable)
router.get('/groups/:id/disciplines', getGroupDisciplinesById)
