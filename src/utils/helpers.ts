import { ISubscription, Price } from '../types/ISubscription'
import { INavigationItem } from './../types/INavigationItem'
import constants from './constants'
import { data } from './data'

export const getURL = () => {
  const url =
    process?.env?.URL && process.env.URL !== ''
      ? process.env.URL
      : process?.env?.VERCEL_URL && process.env.VERCEL_URL !== ''
      ? process.env.VERCEL_URL
      : 'http://localhost:3000'
  return url.includes('http') ? url : `https://${url}`
}
const getSubscription = () =>
  constants.supabase
    .from<ISubscription>('subscriptions')
    .select('*, prices(*, products(*))')
    .in('status', ['trialing', 'active'])
    .single()

export const postData = async ({
  url,
  token,
  data,
}: {
  url: string
  data?: { price: Price }
  token: string
}) => {
  console.log('posting,', url, token, data)

  const res: Response = await fetch(url, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin',
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    console.log('Error in postData', { url, token, data, res })

    throw Error(res.statusText)
  }

  return res.json()
}

export const toDateTime = (secs: number) => {
  var t = new Date('1970-01-01T00:30:00Z') // Unix epoch start.
  t.setSeconds(secs)
  return t
}

export const getNavigationItem = (
  path: string
): INavigationItem | undefined => {
  var item = data.navigation.find((x) => x.path === path)
  if (item) return item

  item = data.navigation.flat().find((x) => x.path === path)
  return item
}
