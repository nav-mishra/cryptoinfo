import {ClipboardIcon, ExternalLinkIcon} from '@heroicons/react/outline'
import type {InferGetStaticPropsType, NextPage} from 'next'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import Dropdown from '../../src/components/elements/Dropdown'
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
    const [categoryFilter, setCategoryFilter] = useState('')
    const [subCategoryFilter, setSubCategoryFilter] = useState('')
    const categories = props.projects.map(x => {return {category: x.Category, subcategory: x.SubCategory}})
    const test = categories.reduce((a: {category: string, subcategory: string}[], b) => {
        const hasProduct = !!a.find((u) => u.category == b.category && u.subcategory == b.subcategory)
        if (!hasProduct)
            return [...a, b]

        return a
    }, [])


    useEffect(() => {
        setProjects([...props.projects.filter(x =>
            x.Name.toLowerCase().match(searchQuery.toLowerCase())
            && (categoryFilter == '' || x.Category.toLowerCase() == (categoryFilter.toLowerCase()))
            && (subCategoryFilter == '' || x.SubCategory.toLowerCase() == subCategoryFilter.toLowerCase())
        )])
    }, [searchQuery, categoryFilter, subCategoryFilter])

    return <div className='w-full'>
        <LoadingIndicator open={!projects} />
        <section className='flex gap-4 justify-end items-baseline mb-4 '>
            <Dropdown title='select cateogry' selected={categoryFilter == '' ? 'Category' : categoryFilter} onSelection={(key) => {
                setCategoryFilter(key)
                setSubCategoryFilter('')
            }} items={[{key: '', value: 'All'}, ...test.map(c => {return {key: c.category, value: c.category}})]} />
            <Dropdown title='sub-cateogry' selected={subCategoryFilter == '' ? 'select sub-category' : subCategoryFilter} disabled={categoryFilter == ''} onSelection={(key) => setSubCategoryFilter(key)} items={[{key: '', value: 'All'}, ...test.filter(f => categoryFilter == '' || f.category.toLowerCase() == categoryFilter.toLowerCase()).map(x => {return {key: x.subcategory, value: x.subcategory}})]} />

            <input
                type="text"
                name="searchQuery"
                placeholder='search'
                onChange={(e) => setSearchQuery(e.target.value)}
                id="searchQuery"
                autoComplete="search"
                className="focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
        </section>

        <div className='text-gray-600 body-font w-full mx-auto overflow-auto'>
            <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                    <tr>
                        <th className="px-4 py-3 max-w-fit w-1/6 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Name</th>
                        <th className="px-4 py-3 max-w-fit w-1/6 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Category</th>
                        <th className="px-4 py-3 max-w-fit w-1/6 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Subategory</th>
                        <th className="px-4 py-3 max-w-fit w-1/6 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Link</th>

                    </tr>
                </thead>
                <tbody>
                    {projects.map((x, index) =>
                        <tr className='max-w-fit w-1/6 overflow-hidden group cursor-pointer hover:bg-gray-100' key={index} onDoubleClick={() => {
                            window.open(x.Link, '_blank')
                        }}>
                            <td className="px-4 py-3">{x.Name}</td>
                            <td className="px-4 py-3">{x.Category}</td>
                            <td className="px-4 py-3">{x.SubCategory}</td>
                            <td className="px-4 py-3 ">
                                <div className='flex justify-between flex-row gap-4'>
                                    <Link href={x.Link ?? '/'}>
                                        <a>{x.Link}</a>
                                    </Link>
                                    <div className='opacity-0 group-hover:opacity-100'>
                                        <ClipboardIcon onClick={() => {
                                            if (navigator && navigator.clipboard) {
                                                navigator.clipboard.writeText(x.Link ?? '')
                                            }
                                        }} width={25} className='inline hover:text-gray-900  active:scale-90' />
                                        <ExternalLinkIcon onClick={() => {
                                            window.open(x.Link, '_blank')
                                        }} width={25} className='inline hover:text-gray-900 active:scale-90' />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div >
}

export default Profile
