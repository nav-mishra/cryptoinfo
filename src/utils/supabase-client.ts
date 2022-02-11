import { createClient, User } from '@supabase/supabase-js'
import { IProject } from '../types/IProject'
import { ProductWithPrice, UserDetails } from '../types/ISubscription'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
)

export const getProjects = async (): Promise<IProject[]> => {
  const { data, error } = await supabase.from<IProject>('Projects').select()

  if (error) throw error

  return data as IProject[]
}

export const getActiveProductsWithPrices = async (): Promise<
  ProductWithPrice[]
> => {
  const { data, error } = await supabase
    .from('products')
    .select('*, prices(*)')
    .eq('active', true)
    .eq('prices.active', true)
    .order('metadata->index')
    .order('unit_amount', { foreignTable: 'prices' })

  if (error) {
    console.log(error.message)
    throw error
  }

  return data || []
}

export const updateUserName = async (user: User, name: string) => {
  await supabase
    .from<UserDetails>('users')
    .update({
      full_name: name,
    })
    .eq('id', user.id)
}
