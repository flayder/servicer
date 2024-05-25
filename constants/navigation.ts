import type { Navigation } from '~/types'

export const sidebarWorker = ref([
  { name: 'Профиль', icon: 'person', link: '/profile' },
  { name: 'Ваша анкета', icon: 'info-dark', link: '/profile/info' },
  { name: 'Ваши услуги', icon: 'list', link: '/profile/your-services' },
  { name: 'Мои коллеги', icon: '', link: '/profile/colleagues' },
  { name: 'Избраннное', icon: '', link: '/profile/favorites' },

  { name: 'Комментарии мне', marginTop: true, icon: 'message-cloud', link: '/profile/comments' },
  { name: 'Черный список', icon: 'blacklist', link: '/profile/blacklist' },

	{ name: 'Уведомления', icon: 'bell', link: '/profile/notifications' },  
  { name: 'Онлайн', icon: 'dot', switch: true },
  { name: 'Выйти', icon: 'exit', pink: true },
	// { name: 'Мои ответы', icon: 'message-cloud-arrow', link: '/profile/replies/' },
])


export const sidebarClient = ref([
  { name: 'Профиль', icon: 'person', link: '/profile' },

  { name: 'Мои комментарии', marginTop: true, icon: 'message-cloud', link: '/profile/comments' },
  { name: 'Избранное', icon: 'bookmark', link: '/profile/favorites', marginTop: true },

	{ name: 'Уведомления', icon: 'bell', link: '/profile/notifications' },
  
  { name: 'Онлайн', icon: 'dot', switch: true },
  { name: 'Выйти', icon: 'exit', pink: true },
])


export const navigation = ref<Navigation[]>([
	{ name: 'Поиск', path: '/search', img: '/svg/search-nav.svg' },
	{ name: 'Категория 1', path: '/category-1' },
	{ name: 'Категория 2', path: '/category-2', img: '/svg/premium.svg' },
	{ name: 'Категория 3', path: '/category-3', img: '/svg/health.svg' },
	{ name: 'Категория 4', path: '/category-4' },
	{ name: 'Категория 5', path: '/category-5' },
	{ name: 'Категория 6', path: '/category-6' },
	{ name: 'Категория 7', path: '/category-7' },
	{ name: 'Категория 8', path: '/category-8' }
])

export const navigationFooter = ref<Navigation[]>([
	{ name: 'Главная', path: '/' },
	// { name: 'О проекте', path: '/about' },
	// { name: 'Информация', path: '/about' },
	// { name: 'Реклама на сайте', path: '/about' },
	// { name: 'Контакты', path: '/about' }
])

export const navigationFooterPolicy = ref<Navigation[]>([
	{ name: 'Пользовательское соглашение для клиентов', path: '/' },
	{ name: 'Пользовательское соглашение для рекламодателей', path: '/' }
])

export const menuCategory1 = ref<Navigation[]>([
	{ name: 'Категория 1', path: '/' },
	{ name: 'Категория 2', path: '/' },
	{ name: 'Категория 3', path: '/' },
	{ name: 'Категория 4', path: '/' },
	{ name: 'Категория 5', path: '/' },
	{ name: 'Категория 6', path: '/' },
	{ name: 'Категория 7', path: '/' },
	{ name: 'Категория 8', path: '/' },
	{ name: 'Категория 9', path: '/' },
	{ name: 'Категория 10', path: '/' },
	{ name: 'Категория 11', path: '/' },
	{ name: 'Категория 12', path: '/' },
	{ name: 'Категория 13', path: '/' },
	{ name: 'Категория 14', path: '/' },
	{ name: 'Категория 15', path: '/' },
	{ name: 'Категория 16', path: '/' },
	{ name: 'Категория 17', path: '/' },
])

export const menuCategory2 = ref<Navigation[]>([
	{ name: 'Категория 1', path: '/' },
	{ name: 'Категория 2', path: '/' },
	{ name: 'Категория 3', path: '/' },
	{ name: 'Категория 4', path: '/' },
	{ name: 'Категория 5', path: '/' },
	{ name: 'Категория 6', path: '/' },
	{ name: 'Категория 7', path: '/' },
	{ name: 'Категория 8', path: '/' },
	{ name: 'Категория 9', path: '/' }
])

export const menuCategory3 = ref<Navigation[]>([
	{ name: 'Категория 1', path: '/' },
	{ name: 'Категория 2', path: '/' },
	{ name: 'Категория 3', path: '/' },
	{ name: 'Категория 4', path: '/' },
	{ name: 'Категория 5', path: '/' },
	{ name: 'Категория 6', path: '/' }
])

export const menuCategory4 = ref<Navigation[]>([
	{ name: 'Категория 1', path: '/' },
	{ name: 'Категория 2', path: '/' },
	{ name: 'Категория 3', path: '/' },
	{ name: 'Категория 4', path: '/' },
	{ name: 'Категория 5', path: '/' },
	{ name: 'Категория 6', path: '/' },
	{ name: 'Категория 7', path: '/' },
	{ name: 'Категория 8', path: '/' },
	{ name: 'Категория 9', path: '/' },
	{ name: 'Категория 10', path: '/' },
	{ name: 'Категория 11', path: '/' },
	{ name: 'Категория 12', path: '/' }
])

export const menuCategory5 = ref<Navigation[]>([
	{ name: 'Категория 1', path: '/' },
	{ name: 'Категория 2', path: '/' },
	{ name: 'Категория 3', path: '/' },
	{ name: 'Категория 4', path: '/' }
])

export const menuCategory6 = ref<Navigation[]>([
	{ name: 'Категория 1', path: '/' },
	{ name: 'Категория 2', path: '/' },
	{ name: 'Категория 3', path: '/' },
	{ name: 'Категория 4', path: '/' },
	{ name: 'Категория 5', path: '/' },
	{ name: 'Категория 6', path: '/' },
	{ name: 'Категория 7', path: '/' },
	{ name: 'Категория 8', path: '/' },
	{ name: 'Категория 9', path: '/' },
	{ name: 'Категория 10', path: '/' }
])
