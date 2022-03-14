import Link from 'next/link'
import React from 'react'
import {classNames} from '../utils/cssUtils'
import {data} from '../utils/data'
import MenuItem from './MenuItem'

const SideBarMenu = () => {
    const showIcon = false
    return <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
            <Link href='/'>
                <a className='text-gray-300 font-bold text-xl'>Cryptoinfo</a></Link>
        </div>
        <nav className="mt-5 flex-1 px-2 space-y-1">
            {data.navigation.map((item, index) => (
                item.children ?
                    <MenuItem key={index} {...item} showIcon={showIcon} /> :
                    <Link
                        key={index}
                        href={item.path ?? '/'}
                        aria-current={true ? 'page' : undefined}><a
                            className={classNames(
                                'text-gray-300 hover:bg-gray-800 hover:text-white',
                                'group flex items-center px-2 py-2 text-sm rounded-md'
                            )}
                        >
                            {showIcon && item.icon && <item.icon
                                className={classNames(
                                    false ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                    'mr-3 flex-shrink-0 h-6 w-6'
                                )}
                                aria-hidden="true"
                            />}
                            {item.name}
                        </a>
                    </Link>
            ))}
        </nav>
    </div>
}

export default SideBarMenu
