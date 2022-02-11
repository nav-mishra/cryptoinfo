import type {InferGetStaticPropsType, NextPage} from 'next'
import {useEffect, useState} from 'react'
import LoadingIndicator from '../../src/components/LoadingIndicator'
import {getProjects} from '../../src/utils/supabase-client'


export const getStaticProps = async () => {

    const data = await getProjects()

    return {
        props: {
            projects: data,
        },
    }
}

const Profile: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
    const [projects, setProjects] = useState([...props.projects])
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        setProjects([...props.projects.filter(x => x.Name.toLowerCase().match(searchQuery.toLowerCase()))])
    }, [searchQuery])

    return <div className='w-full'>
        <h3>List of projects</h3>
        <LoadingIndicator open={!projects} />
        <div className='max-w-sm mb-4'>
            <input
                type="text"
                name="searchQuery"
                placeholder='search'
                onChange={(e) => setSearchQuery(e.target.value)}
                id="searchQuery"
                autoComplete="search"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
        </div>

        <div className='text-gray-600 body-font w-full mx-auto overflow-auto'>
            <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                    <tr>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Name</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Category</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Subategory</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Link</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((x, index) =>
                        <tr key={index}>
                            <td className="px-4 py-3">{x.Name}</td>
                            <td className="px-4 py-3">{x.Category}</td>
                            <td className="px-4 py-3">{x.SubCategory}</td>
                            <td className="px-4 py-3">{x.Link}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div >
}

export default Profile
