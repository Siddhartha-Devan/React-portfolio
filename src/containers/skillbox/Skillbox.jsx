import React from 'react'
import './skillbox.css'

const Skillbox = ({tech_logo}) => {
    return (
        <div className='pf__skillbox_box'>
            <img src={tech_logo} alt="stack" />
        </div>
    )
}

export default Skillbox