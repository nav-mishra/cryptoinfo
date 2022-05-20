import Link from 'next/link'
import React from 'react'
import {IFeedItem} from '../../types/IFeedItem'
import {dateUtils} from '../../utils/jsutils'
import LoadingIndicator from '../LoadingIndicator'

const News: React.FC<{feeds: IFeedItem[]}> = (props) => {
    return (
        <div className='w-full'>
            <LoadingIndicator open={!props.feeds} />

            <div className='body-font w-full mx-auto overflow-auto'>
                <table className="table-auto w-full text-left whitespace-no-wrap">
                    <thead className='dark:bg-gray-900 bg-gray-300'>
                        <tr className='dark:bg-black bg-opacity-40 '>
                            <th className="px-4 py-3 max-w-fit flex items-center gap-2 title-font tracking-wider font-medium ">Date</th>
                            <th className="px-4 py-3 max-w-fit text-center w-4/6 title-font tracking-wider font-medium ">Headline</th>
                            {/* <th className="px-4 py-3 max-w-fit w-3/6 title-font tracking-wider font-medium ">Summary</th> */}
                            <th className="px-4 py-3 max-w-fit  title-font tracking-wider font-medium ">Category</th>
                            <th className="px-4 py-3 max-w-fit flex items-center gap-2 title-font tracking-wider font-medium ">Source</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.feeds && props.feeds.map((x, index) =>
                            <tr className='border-b max-w-fit w-1/6 overflow-hidden group cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800' key={index} >
                                <td className="px-4 py-3">{dateUtils.geLocalDateString(x.date)}</td>
                                <td className="px-4 py-3">
                                    <Link key={index} href={x.link} passHref={true}>
                                        <a target='_blank'>{x.title}</a>
                                    </Link>
                                </td>
                                {/* <td className="px-4 py-3">
                                    <p className='text-ellipsis'>{x.contentSnippet.substring(0, 100)} {x.contentSnippet.length > 100 ?
                                        <Link key={index} href={x.link} passHref={true}>
                                            <a target='_blank' className='font-light text-sm italic'>...read more</a>
                                        </Link>
                                        : ''}</p>
                                </td> */}
                                <td className="px-4 py-3">{x.category}</td>
                                <td className="px-4 py-3">{x.source}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default News