import {Tab} from '@headlessui/react'
import {GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage} from 'next'
import React from 'react'
import Metrics from '../../src/components/projects/Metrics'
import News from '../../src/components/projects/News'
import Profile from '../../src/components/projects/Profile'
import Summary from '../../src/components/projects/Summary'
import Timeline from '../../src/components/Timeline'
import {getFeeds} from '../../src/helpers/feedhelper'
import {IFeedItem} from '../../src/types/IFeedItem'
import {IProjectSummary} from '../../src/types/IProjectSummary'
import {classNames} from '../../src/utils/cssUtils'
import {data} from '../../src/utils/data'

export const getStaticProps: GetStaticProps = async (context) => {
    let projectId = context?.params?.id
    if (!projectId)
        return {
            notFound: true,
        }

    const getSummary = async (id: string): Promise<IProjectSummary> => {
        var resp = await fetch(
            'https://api.airtable.com/v0/appwnJu1vwrSkrnR7/ProfileDetail/' + id,
            {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + process.env.AIRTABLE_API_KEY,
                },
            }
        )

        let response: any = await resp.json()
        console.log('api', response)
        return {
            id: response['id'],
            name: response.fields['Project Name'],
            category: response.fields['Category'] ?? '',
            website: response.fields['Website'] ?? '',
            twitter: response.fields['Twitter'] ?? '',
            discord: response.fields['Discord'] ?? '',
            description: response.fields['Summary'] ?? '',
            companyHistory: response.fields['Company History'] ?? '',
            contractAddress: response.fields['Contract Address'] ?? '',
            legalEntity: response.fields['Legal Entity'] ?? '',
        }
    }

    let projectProfile: IProjectSummary = await getSummary(projectId as string)
    let feedItems: IFeedItem[] = await getFeeds(data.feeds)
    let feedQuery = projectProfile.name?.toLowerCase()
    let feeds = feedItems.filter(x =>
        x.category.match(feedQuery)
        || x.content.match(feedQuery)
        || x.link.match(feedQuery)
        || x.title.match(feedQuery)
    )

    return {
        props: {
            projectProfile: projectProfile,
            feeds: feeds
        },
        revalidate: 3600,
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    var resp = await fetch('https://api.airtable.com/v0/appwnJu1vwrSkrnR7/ProjectsMain', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + process.env.AIRTABLE_API_KEY,
        }
    })
    var dat: any = await resp.json()
    var paths = dat.records.map((element: any) => {
        return {
            params: {
                id: element['id'],
            }
        }
    })

    return {
        paths: [
            ...paths
        ],
        fallback: true
    }
}

const ProjectDetailPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
    console.log('props', props.projectProfile)
    const tabs = ["Summary", "Profile", "Updates", "Metrics",
        // "Finances",
        "News"]

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
                                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
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
                            <Summary summary={props.projectProfile} feeds={props.feeds} />
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
                        {/* <Tab.Panel
                            className={classNames(
                                'rounded-xl p-1',
                                ''
                            )}
                        >
                            <Finances />
                        </Tab.Panel> */}
                        <Tab.Panel
                            className={classNames(
                                'rounded-xl p-1',
                                ''
                            )}
                        >
                            <News feeds={props.feeds} />
                        </Tab.Panel>
                         <Tab.Panel
                            className={classNames(
                                'rounded-xl p-1',
                                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                            )}
                        >
                            <News />
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </section >
    )
}

export default ProjectDetailPage
