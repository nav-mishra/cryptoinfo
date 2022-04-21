import Airtable from 'airtable'

Airtable.configure({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY || '' })

var airtableClient = new Airtable({
  endpointUrl: 'https://api.airtable.com/',
})

export default airtableClient

