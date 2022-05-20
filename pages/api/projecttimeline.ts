// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type ProjectTimeline = {
  date: string
  description: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectTimeline[]>
) {
  let response = await getSummary()
  res.status(200).json(response)
}

const getSummary = async (): Promise<ProjectTimeline[]> => {
  var resp = await fetch(
    'https://api.airtable.com/v0/app19ASfCsEajeO2V/Timeline',
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + process.env.AIRTABLE_API_KEY,
      },
    }
  )

  let response: any = await resp.json()
  let timeline: ProjectTimeline[] = response.records.map((x: any) => x.fields)
  return timeline
}
