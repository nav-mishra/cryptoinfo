import {useMemo} from 'react'
import {Column, useTable} from 'react-table'
import {IProject} from '../../src/types/IProject'

const ListOfProjects = () => {
    const columns: Column<IProject>[] = useMemo(() => [
        {
            Header: 'Name',
            accessor: 'name',
        },
        {
            Header: 'Category',
            accessor: 'category',
        },
        {
            Header: 'Sub Category',
            accessor: 'subCategory',
        },
        {
            Header: 'Link',
            accessor: 'link',
        }
    ], [])

    const projectList: IProject[] = [
        {
            name: 'Zabo',
            category: 'Wallets',
            subCategory: 'Custody',
            link: 'https://zabo.com/',
        },
        {
            name: 'Brave',
            category: 'Browsers',
            subCategory: 'Applications',
            link: 'https://brave.com/',
        },
    ]


    const {rows, headers, prepareRow, getTableBodyProps, getTableProps} = useTable({
        columns: columns,
        data: useMemo(() => [...projectList], [])
    })

    return <table {...getTableProps()}>
        <thead>
            <tr>
                {headers.map((column, index) => (
                    <th {...column.getHeaderProps()} key={index}>{column.render('Header')}</th>
                ))}
            </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
                prepareRow(row)
                return <tr {...row.getRowProps()} key={index}>
                    {row.cells.map((cell, ci) => {
                        return <td {...cell.getCellProps()} key={ci}>{cell.render('Cell')}</td>
                    })}
                </tr>
            })}
        </tbody>
    </table>
}

export default ListOfProjects

