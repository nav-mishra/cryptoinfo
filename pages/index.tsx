import {InferGetStaticPropsType, NextPage} from 'next'
import Link from 'next/link'
import React from 'react'
interface IFeedItem {
  title: string,
  url: string
  category: string
  source: string
  date: string
  description: string
}

export const getStaticProps = async () => {
  //const data = await getProjects()
  const coinBaseFeedResponse = await fetch('https://www.coindesk.com/arc/outboundfeeds/rss/?outputType=json')
  const coinBaseFeedResult: any = await coinBaseFeedResponse.json()
  const coinBaseFeed: any[] = coinBaseFeedResult?.rss?.channel?.item ?? []

  const feedItems: IFeedItem[] = coinBaseFeed.map(c => {
    return {
      title: c.title["$"] ?? '',
      url: c.link["$"] ?? '',
      category: c.category["$"] ?? '',
      source: "CoinDesk",
      date: c.pubDate ?? '',
      description: c.description["$"] ?? '',
    }
  })

  return {
    props: {
      projects: feedItems,
    },
  }
}


const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return (
    <section className="">
      <section className="">
        <div className="flex flex-col ">
          <h2 className="font-medium title-font  text-lg">Your feed</h2>
          <div className="w-24 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
        </div>
      </section>

      {
        props.projects.map(p =>
          <div className='divide-y-2 border-md border-red-400'>
            <div className=" py-4 flex flex-wrap md:flex-nowrap ">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font ">{p.source}</span>
                <span className="text-sm">{new Date(p.date).toLocaleDateString()}</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium  title-font mb-2"><Link href={p.url}><a>{p.title}</a></Link></h2>
                <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                <a className="text-indigo-700 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>)
      }
    </section>
  )
}

export default HomePage
