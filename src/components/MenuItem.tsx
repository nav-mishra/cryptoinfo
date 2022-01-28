import {Disclosure} from '@headlessui/react'
import {ChevronUpIcon} from '@heroicons/react/solid'
import Link from 'next/link'
import {INavigationItem} from '../types/INavigationItem'
import {classNames} from '../utils/cssUtils'

const MenuItem: React.FC<INavigationItem> = (props) => {

    return (
        <div className="w-full rounded-2xl">
            <Disclosure defaultOpen={true}>
                {({open}) => (
                    <>
                        <Disclosure.Button className="flex justify-between px-2 py-2  w-full text-left text-gray-300 rounded-lg hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                            <div className='flex'>{props.icon && <props.icon
                                className={classNames(
                                    false ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                    'mr-3 flex-shrink-0 h-6 w-6'
                                )}
                                aria-hidden="true"
                            />}
                                <span>{props.name}</span></div>
                            <ChevronUpIcon
                                className={`${open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-gray-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4  pb-2 text-sm text-gray-500">
                            {props.children?.map((item, index) => <Link
                                key={index}
                                href={item.path ?? '/'}
                                aria-current={true ? 'page' : undefined}>
                                <a
                                    key={item.name}
                                    href={item.path}
                                    className={classNames(
                                        'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                    )}
                                >
                                    {item.icon && <item.icon
                                        className={classNames(
                                            false ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                            'mr-3 flex-shrink-0 h-6 w-6'
                                        )}
                                        aria-hidden="true"
                                    />}
                                    {item.name}
                                </a></Link>)}
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    )
}

export default MenuItem