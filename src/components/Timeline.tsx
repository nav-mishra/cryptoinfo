import classNames from 'classnames'
import React, {useEffect, useState} from 'react'
import LoadingIndicator from './LoadingIndicator'

type ProjectTimeline = {
    date: string
    description: string
}

const Timeline = () => {
    const [timeline, setTimeline] = useState<ProjectTimeline[]>([])

    const getTimeline = async () => {
        var resp = await fetch('/api/projecttimeline?name=jenkins', {
            method: 'GET'
        })

        var dat: ProjectTimeline[] = await resp.json()
        setTimeline(dat.sort((a, b) => Date.parse(a.date) > Date.parse(b.date) ? -1 : 1))
    }

    useEffect(() => {
        getTimeline()
    }, [])


    return (
        <>
            <LoadingIndicator open={timeline.length == 0} />
            <section className="container  py-4 mx-auto flex flex-wrap">
                <div className="w-full ">

                    {timeline.map((x, index) =>
                        <div className={classNames("flex relative", index == timeline.length - 1 ? "" : "pb-6")} key={index}>
                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-sm  mb-1 tracking-wider">{x.date}</h2>
                                <p className="leading-relaxed">{x.description}</p>
                            </div>
                        </div>)}
                </div>
            </section>
        </>
    )
}

export default Timeline