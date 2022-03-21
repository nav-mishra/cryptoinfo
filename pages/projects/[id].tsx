import {Tab} from '@headlessui/react'
import {NextPage} from 'next'
import {useRouter} from 'next/router'
import React from 'react'
import Finances from '../../src/components/projects/Finances'
import Metrics from '../../src/components/projects/Metrics'
import Profile from '../../src/components/projects/Profile'
import Summary from '../../src/components/projects/Summary'
import Timeline from '../../src/components/Timeline'
import {classNames} from '../../src/utils/cssUtils'

const ProjectDetailPage: NextPage = (props) => {
    const router = useRouter()
    const {id} = router.query

    const tabs = ["Summary", "Profile", "Updates", "Metrics", "Finances"]

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
                    <Tab.List className="flex space-x-2 border-b">
                        {tabs.map((tab, index) => <Tab
                            className={({selected}) =>
                                classNames(
                                    'inline-block py-4 px-4 text-sm font-medium text-center bg-gray-100 rounded-t-lg ',
                                    '',
                                    selected
                                        ? 'bg-blue-200'
                                        : ''
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
                                'focus:outline-none '
                            )}
                        >
                            <Summary />
                        </Tab.Panel>
                        <Tab.Panel
                            className={classNames(
                                'rounded-xl p-1',
                                'focus:outline-none '
                            )}
                        >
                            <Profile />
                        </Tab.Panel>
                        <Tab.Panel
                            className={classNames(
                                'rounded-xl p-1',
                                ''
                            )}
                        >
                            <Timeline />
                        </Tab.Panel>
                        <Tab.Panel
                            className={classNames(
                                'rounded-xl p-1',
                                ''
                            )}
                        >
                            <Metrics />
                        </Tab.Panel>
                        <Tab.Panel
                            className={classNames(
                                'rounded-xl p-1',
                                ''
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