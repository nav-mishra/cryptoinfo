// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type ProjectSummary = {
  id: string
  name: string
  category: string
  contractAddress: string
  legalEntity: string
  description: string
  companyHistory: string
  website: string
  twitter: string
  discord: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectSummary>
) {
  let id = req.query.id
  let response = await getSummary(id as string)
  res.status(200).json(response)
}

const getSummary = async (id: string): Promise<ProjectSummary> => {
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
