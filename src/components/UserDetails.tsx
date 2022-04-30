import Link from 'next/link'
import React from 'react'

const UserDetails = ({email}: {email: String}) => {
    return <div className="w-full flex items-center px-4 group transition-transform hover:underline underline-offset-4">
        <div>
            <img
                className="inline-block h-9 w-9 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""
            />
        </div>
        <div className="ml-3 ">
            <Link href="/profile">
                <a className="text-xs font-medium text-gray-700  group-hover:text-gray-900"><p className="text-sm font-medium">{email}</p></a>
            </Link>
        </div>
    </div>
}

export default UserDetails
