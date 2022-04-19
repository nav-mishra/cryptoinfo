import classNames from 'classnames'
import React, {ReactNode} from 'react'

const Card: React.FC<{title: string, className?: string, children: ReactNode}> = (props) => {
    return (
        <div className={classNames('border rounded-md p-4', props.className ?? '')}>
            <h4 className='text-md font-semibold'>{props.title}</h4>
            <div className='mt-4 h-96'>
                {props.children}
            </div>
        </div>
    )
}

export default Card