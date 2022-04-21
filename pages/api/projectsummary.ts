// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type ProjectSummary = {
  name: string
  category: string
  contractAddress: string
  legalEntity: string
  description: string
  website: string
  twitter: string
  etherScan: string
  discord: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectSummary>
) {
  let response = await getSummary()
  res.status(200).json(response)
}

const getSummary = async (): Promise<ProjectSummary> => {
  var resp = await fetch(
    'https://api.airtable.com/v0/app19ASfCsEajeO2V/Summary',
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + process.env.AIRTABLE_API_KEY,
      },
    }
  )

  let response: any = await resp.json()
  return {
    name: getFieldValue('Project Name', response.records),
    category: getFieldValue('Category', response.records),
    contractAddress: getFieldValue('Contract Address', response.records),
    legalEntity: getFieldValue('Legal Entity', response.records),
    description: getFieldValue('Short Description', response.records),
    website: getFieldValue('Website', response.records),
    twitter: getFieldValue('Twitter', response.records),
    etherScan: getFieldValue('Etherscan', response.records),
    discord: getFieldValue('Discord', response.records),
  }
}

const getFieldValue = (name: string, records: any): string => {
  let field = records.find((x: any) => x.fields.Field == name)
  return field.fields.Value
}
