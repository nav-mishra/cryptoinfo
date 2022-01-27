import { OfficeBuildingIcon, UserIcon } from '@heroicons/react/outline'
import { INavigationItem } from '../types/INavigationItem'

const navigation: INavigationItem[] = [
  {
    name: 'Dataset',
    pageTitle: 'Dashboard',
    icon: OfficeBuildingIcon,
    children: [
      {
        name: 'List of projects',
        pageTitle: 'List of projects',
        icon: OfficeBuildingIcon,
        path: '/dataset/listofprojects',
      },
      {
        name: 'Exploits',
        pageTitle: 'Exploits',
        icon: OfficeBuildingIcon,
        path: '/dataset/exploits',
      },
      {
        name: 'CBDC Tracker',
        pageTitle: 'CBDC Tracker',
        icon: OfficeBuildingIcon,
        path: '/dataset/dbdctracker',
      },
      {
        name: 'Legal cases',
        pageTitle: 'Legal cases',
        icon: OfficeBuildingIcon,
        path: '/dataset/legalcases',
      },
    ],
    path: '/',
  },
  {
    name: 'Layer 1',
    pageTitle: 'Layer 1',
    icon: UserIcon,

    children: [
      {
        name: 'BTC',
        pageTitle: 'BTC',
        icon: OfficeBuildingIcon,
        path: '/layer1/btc',
      },
      {
        name: 'Ethereum',
        pageTitle: 'Ethereum',
        icon: OfficeBuildingIcon,
        path: '/layer1/ethereum',
      },
    ],
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
