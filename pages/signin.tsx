import {Provider} from '@supabase/supabase-js'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {FormEvent, useEffect, useState} from 'react'
import Button from '../src/components/elements/Button'
import Input from '../src/components/elements/Input'
import LoadingIndicator from '../src/components/LoadingIndicator'
import {useUser} from '../src/hooks/useUser'


const SignIn = () => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
    showPasswordInput: false,
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{type?: string; content?: string}>({
    type: '',
    content: '',
  })

  const router = useRouter()
  const {user, signIn} = useUser()

  const handleSignin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)
    setMessage({})

    const {error} = await signIn({
      email: userDetails.email,
      password: userDetails.password,
    })
    if (error) {
      setMessage({type: 'error', content: error.message})
    }
    if (!userDetails.password) {
      setMessage({
        type: 'note',
        content: 'Check your email for the magic link.',
      })
    }
    setLoading(false)
  }

  useEffect(() => {
    if (user) {
      router.replace('/')
    }
  }, [user])

  const handleOAuthSignIn = async (provider: Provider) => {
    setLoading(true)
    const {error} = await signIn({provider})
    if (error) {
      setMessage({type: 'error', content: error.message})
    }
    setLoading(false)
  }

  const handleInputChange = (name: string, value: string) => {
    setUserDetails({...userDetails, [name]: value})
  }

  useEffect(() => {
    if (user) {
      router.replace('/')
    }
  }, [user])

  if (!user)
    return (

      <div className='w-full text-gray-400 bg-gray-900 flex items-center justify-center'>
        <section className="w-2/3 lg:w-1/3 body-font ">
          <div className="px-5 py-24 mx-auto flex flex-wrap items-center">
            <div className=" bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              {message.content && (
                <div
                  className={`${message.type === 'error' ? 'text-pink-500' : 'text-green-500'
                    } pb-4`}>
                  {message.content}
                </div>
              )}<h2 className="text-white text-lg font-medium title-font mb-5">Sign In</h2>
              {!userDetails.showPasswordInput && (
                <form onSubmit={handleSignin} className='flex flex-col space-y-4'>
                  <Input
                    type='email'
                    placeholder='Email'
                    name='email'
                    value={userDetails.email}
                    onChange={handleInputChange}
                  />
                  <Button
                    type='submit'
                    text='Send magic link'
                    onClick={() => {console.log('asdf')}}
                    disabled={
                      !userDetails.email.length
                    } />

                </form>
              )}

              {userDetails.showPasswordInput && (
                <form onSubmit={handleSignin} className='flex flex-col space-y-4'>
                  <Input
                    type='email'
                    placeholder='Email'
                    value={userDetails.email}
                    onChange={handleInputChange}
                    name={'email'}
                  />
                  <Input
                    type='password'
                    name={'password'}
                    placeholder='Password'
                    value={userDetails.password}
                    onChange={handleInputChange}
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
              )}

              <div className='mt-4 text-center'>
                <div className='flex items-center my-6'>
                  <div
                    className='border-t border-gray-600 flex-grow mr-3'
                    aria-hidden='true'></div>
                  <div className='text-gray-400'>Or</div>
                  <div
                    className='border-t border-gray-600 flex-grow ml-3'
                    aria-hidden='true'></div>
                </div>

                <div className='mt-4'>
                  <Button
                    text={`Sign in with ${userDetails.showPasswordInput ? 'magic link' : 'password'
                      }.`} onClick={() => {
                        setUserDetails({
                          ...userDetails,
                          showPasswordInput: !userDetails.showPasswordInput,
                        })
                        setMessage({})
                      }} />
                </div>
              </div>
              <span className='pt-4  text-sm'>
                <span className='text-gray-200  mr-2 '>Dont have an account?</span>
                <Link href='/signup'>
                  <a className='text-accent-9 text-lg font-bold hover:underline cursor-pointer'>
                    Sign up.
                  </a>
                </Link>
              </span>

              <div className='flex items-center my-6'>
                <div
                  className='border-t border-gray-600 flex-grow mr-3'
                  aria-hidden='true'></div>
                <div className='text-gray-400'>Or</div>
                <div
                  className='border-t border-gray-600 flex-grow ml-3'
                  aria-hidden='true'></div>
              </div>

              <Button
                text='Continue with GitHub'
                primary={false}
                disabled={loading}
                onClick={() => handleOAuthSignIn('github')} />

            </div >
          </div>
        </section >
      </div >
    )

  return (
    <div className='m-6'>
      <LoadingIndicator open={loading} />
    </div>
  )
}

export default SignIn
