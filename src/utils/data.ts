import { OfficeBuildingIcon, UserIcon } from '@heroicons/react/outline'
import { INavigationItem } from '../types/INavigationItem'

const navigation: INavigationItem[] = [
  {
    name: 'Dashboard',
    pageTitle: 'Dashboard',
    icon: OfficeBuildingIcon,
    path: '/',
  },
  {
    name: 'OtherPage',
    pageTitle: 'Another page',
    icon: UserIcon,
    path: '/anotherpage',
  },
]

const userNavigation = [
  { name: 'Your Profile', href: '/profile' },
  { name: 'Settings', href: '/settings' },
  {
    name: 'Sign out',
    href: '#signout',
    onClick: () => {
      console.log('signing out')
    },
  },
]

export const data = {
  navigation,
  userNavigation,
}
