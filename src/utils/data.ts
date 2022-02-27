import { OfficeBuildingIcon, UserIcon } from '@heroicons/react/outline'
import { INavigationItem } from '../types/INavigationItem'
import { IProject } from './../types/IProject'

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
        forceAuth: false,
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
    forceAuth: true,
    icon: UserIcon,
    path: '/anotherpage',
  },
]

const pathList = navigation
  .filter((x) => x.children && x.children.length > 0)
  .map((x) => x.children)
  .flat()
  .filter((x) => x != undefined)
  .map((x) => {
    return { path: x?.path, authRequired: x?.forceAuth }
  })
  .concat(
    navigation
      .filter((x) => x.path != undefined && x.children == undefined)
      .map((x) => {
        return { path: x?.path, authRequired: x?.forceAuth }
      })
  )

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
  pathList,
  userNavigation,
}

export const projectList: IProject[] = [
  {
    name: 'Zabo',
    category: 'Wallets',
    subCategory: 'Custody',
    link: 'https://zabo.com/',
  },
  {
    name: 'Brave',
    category: 'Browsers',
    subCategory: 'Applications',
    link: 'https://brave.com/',
  },
]
