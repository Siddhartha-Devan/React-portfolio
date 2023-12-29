import React from 'react'
import './procontainer.css'

const Procontainer = ({title, desc}) => {
    return (
        <div className='pf__procontainer'>
            <div className='pf__procontainer-title'>
                <p>{title}</p>
            </div>
            <div className='pf__procontainer-desc'>
                <p>{desc}</p>
            </div>
            <div className='pf__procontainer-buttons'>
                <button className='pf__procontainer-buttons-git'>
                    Github
                </button>
                
                <button className='pf__procontainer-buttons-view'>
                    View
                </button>
            </div>
        </div>
    )
}

export default Procontainer