import {
  BriefcaseIcon,
  CalendarIcon,
  CashIcon,
  ChartBarIcon,
  ClipboardListIcon,
  CollectionIcon,
  EyeIcon,
  OfficeBuildingIcon,
  RssIcon,
  ShieldExclamationIcon,
} from '@heroicons/react/outline'
import { INavigationItem } from '../types/INavigationItem'

const navigation: INavigationItem[] = [
  {
    name: 'Projects',
    pageTitle: 'Projects',
    icon: ClipboardListIcon,
    forceAuth: false,
    path: '/dataset/projects',
  },
  {
    name: 'Reports',
    pageTitle: 'projects',
    icon: ChartBarIcon,
    forceAuth: false,
    path: '/dataset/projects',
  },
  {
    name: 'Events',
    pageTitle: 'projects',
    icon: CalendarIcon,
    forceAuth: false,
    path: '/dataset/projects',
  },
  {
    name: 'Feed',
    pageTitle: 'projects',
    icon: RssIcon,
    forceAuth: false,
    path: '/dataset/projects',
  },
  {
    name: 'Dataset',
    pageTitle: 'Dashboard',
    icon: CollectionIcon,
    children: [
      {
        name: 'Exploits',
        pageTitle: 'projects',
        icon: ShieldExclamationIcon,
        forceAuth: false,
        path: '/dataset/projects',
      },
      {
        name: 'CBDC Tracker',
        pageTitle: 'projects',
        icon: EyeIcon,
        forceAuth: false,
        path: '/dataset/projects',
      },
      {
        name: 'Legal Cases',
        pageTitle: 'projects',
        icon: BriefcaseIcon,
        forceAuth: false,
        path: '/dataset/projects',
      },
      // {
      //   name: 'Exploits',
      //   pageTitle: 'Exploits',
      //   icon: OfficeBuildingIcon,
      //   path: '/dataset/exploits',
      // },
      // {
      //   name: 'CBDC Tracker',
      //   pageTitle: 'CBDC Tracker',
      //   icon: OfficeBuildingIcon,
      //   path: '/dataset/dbdctracker',
      // },
      // {
      //   name: 'Legal cases',
      //   pageTitle: 'Legal cases',
      //   icon: OfficeBuildingIcon,
      //   path: '/dataset/legalcases',
      // },
    ],
  },
  {
    name: 'L1',
    pageTitle: 'Layer 1',
    icon: CashIcon,
    children: [
      {
        name: 'BTC',
        pageTitle: 'ETH',
        icon: OfficeBuildingIcon,
        forceAuth: false,
        path: '/l1/btc',
      },
      {
        name: 'ETH',
        pageTitle: 'ETH',
        icon: OfficeBuildingIcon,
        forceAuth: false,
        path: '/l1/eth',
      },
    ],
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
