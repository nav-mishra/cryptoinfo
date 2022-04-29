import {Tab} from '@headlessui/react'
import {GetStaticPaths, InferGetStaticPropsType, NextPage} from 'next'
import {useRouter} from 'next/router'
import React from 'react'
import Finances from '../../src/components/projects/Finances'
import Metrics from '../../src/components/projects/Metrics'
import Profile from '../../src/components/projects/Profile'
import Summary from '../../src/components/projects/Summary'
import Timeline from '../../src/components/Timeline'
import {getFeeds} from '../../src/helpers/feedhelper'
import {IFeedItem} from '../../src/types/IFeedItem'
import {classNames} from '../../src/utils/cssUtils'
import {data} from '../../src/utils/data'

export const getStaticProps = async (props: any) => {
    //const data = await getProjects()
    let feedItems: IFeedItem[] = await getFeeds(data.feeds)

    return {
        props: {
            feeds: feedItems.filter(x =>
                x.category.match('jenkins')
                || x.content.match('jenkins')
                || x.link.match('jenkins')
                || x.title.match('jenkins')
            ),
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    var resp = await fetch('https://api.airtable.com/v0/appX6rMkgP5MWlbdy/Imported%20table', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + process.env.AIRTABLE_API_KEY,
        }
    })
    var dat: any = await resp.json()
    var paths = dat.records.map((element: any) => {
        return {
            params: {
                id: element.fields['Name'],
            }
        }
    })

    console.log('paths', paths)

    return {
        paths: [
            {
                params: {
                    id: 'Jenkins the Valet',
                },
            },
            ...paths
        ],
        fallback: true
    }
}

const ProjectDetailPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
    const router = useRouter()
    const {id} = router.query
    console.log('comp', props.feeds.length)
    console.log('comp', props.feeds[0])

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
                            <Summary feeds={props.feeds} />
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

function foreach(arg0: boolean) {
    throw new Error('Function not implemented.')
}
