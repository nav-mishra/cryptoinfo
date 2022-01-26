import type {NextPage} from 'next'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import LoadingIndicator from '../src/components/LoadingIndicator'
import {useUser} from '../src/hooks/useUser'


export interface Datum {
    asset: string
    time: string
    AdrActCnt: string
}

export interface RootObject {
    data: Datum[]
    next_page_token: string
    next_page_url: string
}

const Profile: NextPage = (props) => {
    const router = useRouter()
    const {user, userLoaded} = useUser()

    useEffect(() => {
        if (!user) router.replace('/signin')
    }, [user])

    return (<div className='w-full flex'>
        <LoadingIndicator open={!userLoaded} />
        {userLoaded && <div className='w-full flex flex-row flex-wrap'>
            {user.email}
        </div>
        }</div>)
}

export default Profile
