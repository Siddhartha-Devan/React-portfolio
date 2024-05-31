import React from 'react'
import './procontainer.css'

const Procontainer = ({title, desc, git_link, view_link}) => {
    return (
        <div className='pf__procontainer'>
            <div className='pf__procontainer-title'>
                <p>{title}</p>
            </div>
            <div className='pf__procontainer-desc'>
                <p>{desc}</p>
            </div>
            <div className='pf__procontainer-buttons'>
                <a href={git_link} target='_blank' rel="noreferrer"  className='pf__procontainer-buttons-a'>
                    <button className='pf__procontainer-buttons-git'>
                        Github
                    </button>
                </a>

                <a href={view_link} target='_blank' rel="noreferrer"  className='pf__procontainer-buttons-a'>
                    <button className='pf__procontainer-buttons-view'>
                        View
                    </button>
                    
                </a>
           
            </div>
        </div>
    )
}

export default Procontainer