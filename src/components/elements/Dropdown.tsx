import {Menu, Transition} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/solid'
import {Fragment} from 'react'
import {classNames} from '../../utils/cssUtils'

interface DropdownProps {
    title: string
    selected?: string
    disabled?: boolean
    items: {value: string, key: string}[]
    onSelection: (key: string) => void
}

const Dropdown: React.FC<DropdownProps> = (props) => {

    return (
        <div className=" text-right">
            <Menu as="div" className="w-full relative inline-block text-left">
                {({open}) => (
                    <>
                        <div>
                            <Menu.Button className={classNames("inline-flex justify-center w-full px-4 py-2 text-sm font-medium  border rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-opacity-75",
                                props.disabled ? 'text-gray-400' : 'text-gray-800'
                            )}>
                                {props.selected ? props.items.find(x => x.key == props.selected)?.value ?? props.title : props.title}
                                <ChevronDownIcon
                                    className={classNames("w-5 h-5 ml-2 -mr-1 text-gray-200 hover:text-gray-900")}
                                    aria-hidden="true"
                                />
                            </Menu.Button>
                        </div>
                        {open && !props.disabled && <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="px-1 py-1 ">
                                    {props.items.map(item =>
                                        <Menu.Item key={item.key}>
                                            {({active}) => (
                                                <button
                                                    onClick={() => {

                                                        props.onSelection(item.key)
                                                    }}
                                                    className={`${active ? 'bg-indigo-500 text-gray-100' : 'text-gray-900'
                                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                                >{item.value}</button>
                                            )}
                                        </Menu.Item>)}
                                </div>
                            </Menu.Items>
                        </Transition>}
                    </>
                )}
            </Menu>
        </div>
    )
}

export default Dropdown