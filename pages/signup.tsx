import {User} from '@supabase/gotrue-js'
import Link from 'next/link'
import {useRouter} from 'next/router'
import React, {FormEvent, useEffect, useState} from 'react'
import Button from '../src/components/elements/Button'
import Input from '../src/components/elements/Input'
import LoadingIndicator from '../src/components/LoadingIndicator'
import {useUser} from '../src/hooks/useUser'
import {IUserDetails} from '../src/types/IUserDetails'
import constants from '../src/utils/constants'


export const updateUserName = async (user: User, name: string) => {
  await constants.supabase
    .from<IUserDetails>('users')
    .update({
      full_name: name,
    })
    .eq('id', user.id)
}

const SignUp = () => {
  const [newUser, setNewUser] = useState<User | null>(null)
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
    name: '',
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{type?: string; content?: string}>({
    type: '',
    content: '',
  })
  const router = useRouter()
  const {signUp, user} = useUser()

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)
    setMessage({})
    const {error, user: createdUser} = await signUp({
      email: userDetails.email ?? '',
      password: userDetails.password ?? '',
    })
    if (error) {
      setMessage({type: 'error', content: error.message})
    } else {
      if (createdUser) {
        await updateUserName(createdUser, userDetails.name ?? '')
        setNewUser(createdUser)
      } else {
        setMessage({
          type: 'note',
          content: 'Check your email for the confirmation link.',
        })
      }
    }
    setLoading(false)
  }

  useEffect(() => {
    if (newUser || user) {
      router.replace('/')
    }
  }, [newUser, user])

  return (
    <div className='w-full text-gray-400 bg-gray-900 flex items-center justify-center'>
      <LoadingIndicator open={loading} />
      <section className="w-2/3 lg:w-1/3 body-font ">
        <div className="px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className=" bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            {message.content && (
              <div
                className={`${message.type === 'error' ? 'text-pink-500' : 'text-green-500'
                  } pb-4`}>
                {message.content}
              </div>
            )}<h2 className="text-white text-lg font-medium title-font mb-5">Sign up</h2>

            <form onSubmit={handleSignup} className='flex flex-col space-y-4'>
              <Input
                type='email'
                placeholder='Email'
                value={userDetails.email}
                onChange={(name, value) => setUserDetails({...userDetails, email: value})}
                name={'email'}
              />
              <Input
                type='password'
                name={'password'}
                placeholder='Password'
                value={userDetails.password}
                onChange={(name, value) => setUserDetails({...userDetails, password: value})}

              />
              <Button
                text='Login'
                onClick={() => { }}
                type='submit'
                disabled={
                  !userDetails.password.length || !userDetails.email.length
                }
              />
            </form>


            <span className='mt-2  text-sm'>
              <span className='text-gray-200  mr-2 '>Have an account?</span>
              <Link href='/signin'>
                <a className='text-accent-9 text-lg font-bold hover:underline cursor-pointer'>
                  Sign up.
                </a>
              </Link>
            </span>
          </div >
        </div>
      </section >
    </div >
  )
}

export default SignUp
