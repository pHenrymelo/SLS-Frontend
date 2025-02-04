import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Home = () => import('@/views/Home/HomeView.vue')
const Journal = () => import('@/views/Quests/JournalView.vue')
const Infos = () => import('@/views/infos/InfoView.vue')
const ConfirmDelete = () => import('@/views/Quests/confirmDeleteView.vue')
const QuestForm = () => import('@/views/Quests/formView.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quests',
    name: 'Quests',
    component: Journal
  },
  {
    path: '/infos',
    name: 'Infos',
    component: Infos
  },
  {
    path: '/confirmDelete',
    name: 'ConfirmDelete',
    component: ConfirmDelete
  },
  {
    path: '/newQuest',
    name: 'NewQuest',
    component: QuestForm
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
