import {
  CalendarIcon,
  ChartBarIcon,
  ClipboardListIcon,
} from '@heroicons/react/outline'
import { INavigationItem } from '../types/INavigationItem'

const navigation: INavigationItem[] = [
  {
    name: 'Projects',
    pageTitle: 'Projects',
    icon: ClipboardListIcon,
    forceAuth: false,
    path: '/projects',
  },
  {
    name: 'Feed',
    pageTitle: 'Feed',
    icon: ChartBarIcon,
    forceAuth: true,
    path: '/feed',
  },
  {
    name: 'Tracker',
    pageTitle: 'Tracker',
    icon: CalendarIcon,
    forceAuth: true,
    path: '/tracker',
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

const feeds = [
  { url: 'https://blockworks.co/feed/', source: 'blockworks' },
  // { url: 'https://cointelegraph.com/feed', source: 'cointelegraph' },
  { url: 'https://decrypt.co/feed', source: 'decrypt' },
  { url: 'https://protos.com/feed', source: 'protos' },
  { url: 'https://www.coindesk.com/arc/outboundfeeds/rss', source: 'coindesk' },
]

export const data = {
  navigation,
  pathList,
  userNavigation,
  feeds,
}

export const pieData = [
  {
    name: '0x023192b16a986dc4e5cb76c1ec2f4d2de4d08462',
    value: Math.random() * 60,
  },
  {
    name: '0x0746b673f6ef9f478f8d808d94a572d25d29bc03',
    value: Math.random() * 10,
  },
  {
    name: '0x0a77190ba02d1bdef230f8e3e60a4c683b5e7dea',
    value: Math.random() * 90,
  },
  {
    name: '0x0f6397907f4282422f00c3ced2aaba7a804dd6d0',
    value: Math.random() * 10,
  },
  {
    name: '0x106b0666140bd18a31bdabccb9221bc08b4337dc',
    value: Math.random() * 10,
  },
  {
    name: '0x1583b0c3a4e2a53f8f712579944373b5f28739ae',
    value: Math.random() * 100,
  },
  {
    name: '0x1916b8d3bdda626accc03861607bc91f09234fb7',
    value: Math.random() * 10,
  },
  {
    name: '0x1d022cb8c29bde3aeb1f093145a0b033d65c8712',
    value: Math.random() * 10,
  },
  {
    name: '0x1d3643399e5534dd49f2b04f2f0615153bd209fd',
    value: Math.random() * 10,
  },
  {
    name: '0x1e983ce401336a8a74bc2983ae681c901117ae10',
    value: Math.random() * 10,
  },
  {
    name: '0x217c70a564a9bc0572426fc068eff0caf70e6b41',
    value: Math.random() * 10,
  },
  {
    name: '0x221d5137947d80822686b8394b6793fb5426b91a',
    value: Math.random() * 10,
  },
  {
    name: '0x231d26e89c2be634bd044a4a18045b39ceed38a4',
    value: Math.random() * 10,
  },
  {
    name: '0x2ce05594dce29fd077786e68b015c9456be502ce',
    value: Math.random() * 10,
  },
  {
    name: '0x2e511a7610cf63811894330125d82f637f066616',
    value: Math.random() * 10,
  },
  {
    name: '0x2e6c33c827cbcbbaad089821f02a14da849674c5',
    value: Math.random() * 10,
  },
  {
    name: '0x30b4a5477314e3fbd0c22d6afcd71eecf4d9d22f',
    value: Math.random() * 10,
  },
  {
    name: '0x31fe8439f34ed04514288a6f0f19f26c647cd6ad',
    value: Math.random() * 10,
  },
  {
    name: '0x34978faf3a9f469da7248d1365ddf69ac099588c',
    value: Math.random() * 200,
  },
  {
    name: '0x37db750bd1642a4c7a9b53c9e0167d43c1f568f1',
    value: Math.random() * 10,
  },
  {
    name: '0x3a92b1c299f1bdc57c94efe5d41b646a4bee13ef',
    value: Math.random() * 10,
  },
  {
    name: '0x3b0e003793011c012d8261b0aafd993eab01f2cf',
    value: Math.random() * 10,
  },
  {
    name: '0x3e17258a44f938db9803c18c3c762653f5a23e54',
    value: Math.random() * 10,
  },
  {
    name: '0x44c9ff8343bdf35d3b84321b1a6bbb617216a287',
    value: Math.random() * 10,
  },
  {
    name: '0x4dc8a4facf0cb23365f8960d3dfd5c6d5b8b6eca',
    value: Math.random() * 10,
  },
  {
    name: '0x4ecb8918a19b8019b7e9c067c903b1de6a236775',
    value: Math.random() * 10,
  },
  {
    name: '0x4f2afa8fc8364f22be45dbff92332f34154f9f6d',
    value: Math.random() * 10,
  },
  {
    name: '0x51aceb6e60635c770b97025596080f588b9bb7ba',
    value: Math.random() * 10,
  },
  {
    name: '0x55e54e3af4e3df2352d8005a7f883e2c125ca0b3',
    value: Math.random() * 10,
  },
  {
    name: '0x57a1fcc7c7f7d253414a85ef4658b5c68dc3d63b',
    value: Math.random() * 10,
  },
  {
    name: '0x592234c63ac3c816b0485761bc00fc1b932d18fd',
    value: Math.random() * 10,
  },
  {
    name: '0x59560854986b354d2dbc4368a09526dae0b244db',
    value: Math.random() * 10,
  },
  {
    name: '0x59957e6b58dd78e9d4ec60a144cc8531b8a5409d',
    value: Math.random() * 10,
  },
  {
    name: '0x5b20783f4baabd33bb53dd77c9b0459f5701e36a',
    value: Math.random() * 10,
  },
  {
    name: '0x5cd2d7ef540218521a72d17faa4e00e5233175e8',
    value: Math.random() * 10,
  },
  {
    name: '0x631d96ce9876d48cd2300473ff4124f5e0e084e8',
    value: Math.random() * 10,
  },
  {
    name: '0x67bbba99b43446b368200ceee5fd2808a7f80711',
    value: Math.random() * 10,
  },
  {
    name: '0x6bf97f2534be2242ddb3a29bfb24d498212dcded',
    value: Math.random() * 10,
  },
  {
    name: '0x6df304782b0866d2538c8fd2e46904a7f2ae321c',
    value: Math.random() * 10,
  },
  {
    name: '0x6fdc859bfad3bc680647c8c58530faa039e1fc03',
    value: Math.random() * 10,
  },
  {
    name: '0x708ed7b90dce15a1b479f27539a3801cc70d9268',
    value: Math.random() * 110,
  },
  {
    name: '0x7500af1f7f829fa7a7fe4492e66b5bff5c05f3e1',
    value: Math.random() * 10,
  },
  {
    name: '0x756a0f90ee980e917ac66b3cb951758da96305b0',
    value: Math.random() * 10,
  },
  {
    name: '0x7675cf4abb1a19f7bd5ed23d132f9dffa0c9587d',
    value: Math.random() * 10,
  },
  {
    name: '0x819884634b84b3f9b71abde27ad1c599d8327176',
    value: Math.random() * 10,
  },
  {
    name: '0x8691fdd1923e99ec8e43df85c4b969205a96338a',
    value: Math.random() * 10,
  },
  {
    name: '0x880644ddf208e471c6f2230d31f9027578fa6fcc',
    value: Math.random() * 10,
  },
  {
    name: '0x886478d3cf9581b624cb35b5446693fc8a58b787',
    value: Math.random() * 10,
  },
  {
    name: '0x8a08e3ce6ced24d376a13c544e45d4dda02fafea',
    value: Math.random() * 150,
  },
  {
    name: '0x8b130943a1a9597f56920fe534e22f5ba83ae989',
    value: Math.random() * 10,
  },
  {
    name: '0x907a0e4ebe7effcddaef64d79c085ee864f7855d',
    value: Math.random() * 10,
  },
  {
    name: '0x91dbb95169173769722e6f01231a9f52227e644a',
    value: Math.random() * 10,
  },
  {
    name: '0x955ee10237baacb60761fea5be2871acc133697b',
    value: Math.random() * 10,
  },
  {
    name: '0x9b20990d93e30ef02ab2f1cce42aeae7a221b75b',
    value: Math.random() * 10,
  },
  {
    name: '0x9c467f50421b8956b7d5ef5cbf02f8031a51e0f7',
    value: Math.random() * 10,
  },
  {
    name: '0x9d4c1c518442ad9eb23cb79a4792d508b49c81af',
    value: Math.random() * 10,
  },
  {
    name: '0xa10e07b70f7a433fd820c24ce38ea886479be232',
    value: Math.random() * 10,
  },
  {
    name: '0xa2140e9c5ea863da58521737e566d27087e198c9',
    value: Math.random() * 180,
  },
  {
    name: '0xa2201f091b2e8e5f8adaf8b023b99322b9ea5e66',
    value: Math.random() * 10,
  },
  {
    name: '0xa46425571f389ce2ae50e24cc7efaa074adb972f',
    value: Math.random() * 10,
  },
  {
    name: '0xa490a0346808dda91aea6698cb19e4697d9fc5cc',
    value: Math.random() * 10,
  },
  {
    name: '0xa4ac930d3ff9f95b3623cba255c69ee1b66b0044',
    value: Math.random() * 10,
  },
  {
    name: '0xa785a1fd05a0c006b94484f124f6f420e6e50834',
    value: Math.random() * 10,
  },
  {
    name: '0xa7929277c27c3ccf2dc87a5480701538ab19d027',
    value: Math.random() * 10,
  },
  {
    name: '0xa928e40011d5991f9ea478c7532807caf94d6859',
    value: Math.random() * 10,
  },
  {
    name: '0xabe7b4d31cd2991b8f6f2fc5545cfeb1d14e9ec5',
    value: Math.random() * 10,
  },
  {
    name: '0xb09b5d8c221e4e1bfa4c2a947c501212a48d097f',
    value: Math.random() * 10,
  },
  {
    name: '0xb104371d5a2680fb0d47ea9a3aa2348392454186',
    value: Math.random() * 108,
  },
  {
    name: '0xb70f05c4e9c5b438917bd8ac8825de51cfa6a207',
    value: Math.random() * 10,
  },
  {
    name: '0xb95fbb6ecb8dbd576cebd9c895b910d10891d07e',
    value: Math.random() * 10,
  },
  {
    name: '0xbb7e06e73e7e264a5084709db81530b916603326',
    value: Math.random() * 10,
  },
  {
    name: '0xbe2d683912567683a88c37f7df3590421252877b',
    value: Math.random() * 10,
  },
  {
    name: '0xbf3e23afd790e34a39d2e5b465f57e0ed74b3b9a',
    value: Math.random() * 10,
  },
  {
    name: '0xc438fc7ff0c3cce806c60740818dfd39e88c9b97',
    value: Math.random() * 10,
  },
  {
    name: '0xc6de15da3b913764a695819b9835c9ea3f80df29',
    value: Math.random() * 10,
  },
  {
    name: '0xcac0be817a3eb19b98eafbeb3d08a9bd4c5cbddb',
    value: Math.random() * 10,
  },
  {
    name: '0xcb76e303fb99849349a13eb8642bebed2d84eca6',
    value: Math.random() * 10,
  },
  {
    name: '0xcc0bcb3ea8c819d3ce70dd92a4a1ef6d7b295512',
    value: Math.random() * 10,
  },
  {
    name: '0xcef5109cd1adc9451162732d68d739fe0242ab3a',
    value: Math.random() * 10,
  },
  {
    name: '0xd0c6b99180ae375efcbc208981d0aada9c7af50e',
    value: Math.random() * 10,
  },
  {
    name: '0xd1c44141ef925d5a02e5414f3e1755ff89243ebd',
    value: Math.random() * 10,
  },
  {
    name: '0xd354b51ca68030d16caf91177b546c5ebaab0277',
    value: Math.random() * 10,
  },
  {
    name: '0xd49d7f4b390169c80f13a828198fdf6adb7aa206',
    value: Math.random() * 10,
  },
  {
    name: '0xd5fe8df39fdbdbdb55fba0e2078306656ad706cb',
    value: Math.random() * 10,
  },
  {
    name: '0xd93fd467cafd79b6c7519af2d95be7c2b76ca0e9',
    value: Math.random() * 10,
  },
  {
    name: '0xd9f69658423cec066fa99efaa0901213017cef2b',
    value: Math.random() * 10,
  },
  {
    name: '0xdf8befe8947322acde20686cac81b262fe1878b6',
    value: Math.random() * 10,
  },
  {
    name: '0xe0028f4b2a9ff1e825c872d5e871ab4250dbebc4',
    value: Math.random() * 10,
  },
  {
    name: '0xe05adcb63a66e6e590961133694a382936c85d9d',
    value: Math.random() * 10,
  },
  {
    name: '0xe337a9212e15be28148a4188ddca858956ad19f4',
    value: Math.random() * 10,
  },
  {
    name: '0xe5c3b29c53e1d6475b0e995dc12296254f2e8c0e',
    value: Math.random() * 10,
  },
  {
    name: '0xe5ee2b9d5320f2d1492e16567f36b578372b3d9f',
    value: Math.random() * 1,
  },
  {
    name: '0xea15534dcd3a12c78345357d0d496f7fa85a5b71',
    value: Math.random() * 10,
  },
  {
    name: '0xea39c551834d07ee2ee87f1ceff843c308e089af',
    value: Math.random() * 10,
  },
  {
    name: '0xecf662eba7cfa3f34ffcbeec099cbb9f6a9cddcc',
    value: Math.random() * 10,
  },
  {
    name: '0xf8c75c5e9ec6875c57c0dbc30b59934b37908c4e',
    value: Math.random() * 160,
  },
  {
    name: '0xf8f327e4c1cbcb0ef014031b84069b9d3579f42d',
    value: Math.random() * 10,
  },
  {
    name: '0xf9dbd46ec67dad36794fe788c29147e00fc25fe7',
    value: Math.random() * 10,
  },
  {
    name: '0xfb4eb570807e0e275b3e1dd14f1074a0e1cd5a2a',
    value: Math.random() * 10,
  },
  {
    name: '0xfc48426da0338735945badef273736ccff53a358',
    value: Math.random() * 10,
  },
]
