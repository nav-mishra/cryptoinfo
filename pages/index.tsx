import {SortAscendingIcon, SortDescendingIcon} from '@heroicons/react/outline'
import {InferGetStaticPropsType, NextPage} from 'next'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import LoadingIndicator from '../src/components/LoadingIndicator'
import {getFeeds} from '../src/helpers/feedhelper'
import {IFeedItem} from '../src/types/IFeedItem'
import {data} from '../src/utils/data'
import {dateUtils} from '../src/utils/jsutils'

export const getStaticProps = async () => {
  //const data = await getProjects()
  let feedItems = await getFeeds(data.feeds)

  return {
    props: {
      projects: feedItems,
    },
  }
}

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  const [projects, setProjects] = useState([...props.projects])
  const [sort, setSort] = useState({dateAscending: false, sourceAscending: true})
  const [searchQuery, setSearchQuery] = useState('')
  useEffect(() => {
    let filtered: IFeedItem[] = [...projects]
    if (searchQuery)
      filtered = [...props.projects.filter(x =>
        x.title.toLowerCase().match(searchQuery.toLowerCase())
        || x.category.toLowerCase().match(searchQuery.toLowerCase())
      )]

    filtered = filtered.sort((a, b) => {
      return sort.dateAscending ?
        Date.parse(a.date) > Date.parse(b.date) ? 1 : -1 : Date.parse(a.date) > Date.parse(b.date) ? -1 : 1
    })

    filtered = filtered.sort((a, b) => {
      return sort.sourceAscending ?
        ((a.source ?? '') > (b.source ?? '')) ? -1 : 1 : ((a.source ?? '') > (b.source ?? '')) ? 1 : -1
    })

    setProjects(filtered)

  }, [searchQuery, sort])


  return (
    <div className='w-full'>
      <LoadingIndicator open={!projects} />
      <section className='flex gap-4 justify-between items-baseline mb-4 '>
        <h3 className='font-semibold text-lg'>Feed</h3>
        <input
          type="text"
          name="searchQuery"
          placeholder='search'
          id="searchQuery"
          onChange={(e) => setSearchQuery(e.target.value)}
          autoComplete="search"
          className="focus:ring-gray-500 focus:border-gray-500 block shadow-sm sm:text-sm border-gray-600 bg-transparent rounded-md"
        />
      </section>

      <div className='body-font w-full mx-auto overflow-auto'>
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead className='dark:bg-gray-900 bg-gray-300'>
            <tr className='dark:bg-black bg-opacity-40 '>
              <th onClick={() => {
                setSort({...sort, dateAscending: !sort.dateAscending})
              }} className="px-4 py-3 max-w-fit flex items-center translate-all hover:scale-110  hover:cursor-pointer gap-2 title-font tracking-wider font-medium ">
                {sort.dateAscending ? <SortDescendingIcon height={22} /> : <SortAscendingIcon height={22} />}
                Date</th>
              <th className="px-4 py-3 max-w-fit w-2/6 title-font tracking-wider font-medium ">Headline</th>
              {/* <th className="px-4 py-3 max-w-fit w-3/6 title-font tracking-wider font-medium ">Summary</th> */}
              <th className="px-4 py-3 max-w-fit  title-font tracking-wider font-medium ">Category</th>
              <th onClick={() => {
                setSort({...sort, sourceAscending: !sort.sourceAscending})
              }} className="px-4 py-3 max-w-fit flex items-center translate-all hover:scale-110  hover:cursor-pointer gap-2 title-font tracking-wider font-medium ">
                {sort.sourceAscending ? <SortDescendingIcon height={22} /> : <SortAscendingIcon height={22} />}
                Source</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((x, index) =>
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

export default HomePage
