import Parser from 'rss-parser'
import { IFeedItem } from '../types/IFeedItem'

async function getFeed(feedUrl: string) {
  let parser = new Parser()
  try {
    let feed = await parser.parseURL(feedUrl)
    return feed
  } catch (ex: any) {
    console.error('Error fetching feed', feedUrl, JSON.stringify(ex))
  }
  return { items: [] }
}

export async function getFeeds(feeds: { url: string; source: string }[]) {
  let feedItems: IFeedItem[] = []
  let feedRequests = feeds.map((x) => getFeed(x.url))
  try {
    let feedResponse = await Promise.all(feedRequests)
    feedResponse.forEach((feedresult, ind) => {
      let items: IFeedItem[] = feedresult.items.map((c: any) => {
        return {
          source: feeds[ind].source,
          creator: c.creator ?? '',
          content: c.content ?? '',
          title: c.title ?? '',
          link: Array.isArray(c.link) ? c.link[0] ?? '' : c.link ?? '',
          category:
            (c.categories && c.categories.length > 0 && c.categories[0]['_']) ??
            '',
          date: c.pubDate ?? '',
          contentSnippet: c.contentSnippet ?? '',
        }
      })

      feedItems.push(...items)
    })
  } catch (exception: any) {
    console.log('Error fetching feeds', exception)
  }

  return feedItems.sort((a, b) =>
    Date.parse(a.date) > Date.parse(b.date) ? -1 : 1
  )
}
