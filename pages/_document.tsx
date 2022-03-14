import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head />
            <body className='bg-black text-gray-300'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}