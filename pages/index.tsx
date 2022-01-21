import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useUser } from '../src/hooks/useUser'

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { userLoaded, user, session, userDetails } = useUser()

  useEffect(() => {
    if (!user) router.replace('/signin')
  }, [user])

  return <div>Home page</div>
}

export default Home
