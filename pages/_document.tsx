import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
    // useEffect(() => {
    //     if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //         document.documentElement.classList.add('dark')
    //     } else {
    //         document.documentElement.classList.remove('dark')
    //     }
    // }, [])


    return (
        <Html className='dark:bg-black dark:text-white'>
            <Head />
            <body className='flex-col items-stretch'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}