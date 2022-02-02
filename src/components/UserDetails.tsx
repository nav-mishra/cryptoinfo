import Link from 'next/link'
import React from 'react'

const UserDetails = ({email}: {email: String}) => {
    return <a href="#" className="w-full flex items-center px-4 group">
        <div>
            <img
                className="inline-block h-9 w-9 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""
            />
        </div>
        <div className="ml-3">
            <p className="text-sm font-medium text-white">{email}</p>
            <Link href="/profile"><a className="text-xs font-medium text-gray-300 group-hover:text-gray-200">View profile</a></Link>
        </div>
    </a>
}

export default UserDetails
