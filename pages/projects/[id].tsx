import {Tab} from '@headlessui/react'
import {NextPage} from 'next'
import {useRouter} from 'next/router'
import React from 'react'
import Finances from '../../src/components/projects/Finances'
import Metrics from '../../src/components/projects/Metrics'
import Profile from '../../src/components/projects/Profile'
import Timeline from '../../src/components/Timeline'
import {classNames} from '../../src/utils/cssUtils'

const ProjectDetailPage: NextPage = (props) => {
    const router = useRouter()
    const {id} = router.query

    const tabs = ["Profile", "Updates", "Metrics", "Finances"]

    return (
        <section>
            <section className="">
                <div className="flex flex-col ">
                    <h2 className="font-medium title-font  text-lg">Jenkins the Valet</h2>
                    <div className="w-36 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                </div>
            </section>
            <div className="mt-5">
                <Tab.Group>
                    <Tab.List className="flex h-10 bg-gray-800 justify-start p-1 space-x-1">
                        {tabs.map((tab, index) => <Tab
                            className={({selected}) =>
                                classNames(
                                    'px-6 border-opacity-90 border-gray-600 border-r text-sm font-medium',
                                    'focus:outline-none focus:bg-indigo-600 focus:text-gray-300 ',
                                    selected
                                        ? 'shadow hover:text-gray-400 '
                                        : 'text-blue-100  hover:text-gray-400'
                                )
                            }
                            key={index}
                        >
                            {tab}
                        </Tab>)}
                    </Tab.List>
                    <Tab.Panels className="w-full mt-2">
                        <Tab.Panel
                            className={classNames(
                                'rounded-xl p-1',
                                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                            )}
                        >
                            <Profile />
                        </Tab.Panel>
                        <Tab.Panel
                            className={classNames(
                                'rounded-xl p-1',
                                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                            )}
                        >
                            <Timeline />
                        </Tab.Panel>
                        <Tab.Panel
                            className={classNames(
                                'rounded-xl p-1',
                                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                            )}
                        >
                            <Metrics />
                        </Tab.Panel>
                        <Tab.Panel
                            className={classNames(
                                'rounded-xl p-1',
                                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                            )}
                        >
                            <Finances />
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </section >
    )
}

export default ProjectDetailPage