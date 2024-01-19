import React from 'react'
import './skills.css'

import Skillbox from '../../containers/skillbox/Skillbox'

import figma from '../../assets/Figma.svg'
import css from '../../assets/CSS3.svg'
import html from '../../assets/HTML5.svg'
import js from '../../assets/JavaScript.svg'
import jupyter from '../../assets/jupyter-icon.svg'
import matplot from '../../assets/Matplotlib.svg'
import numpy from '../../assets/NumPy.svg'
import pandas from '../../assets/Pandas.svg'
import python from '../../assets/python-icon.svg'
import pytorch from '../../assets/pytorch-icon.svg'
import Reactjs from '../../assets/React.svg'
import sklearn from '../../assets/scikit-learn.svg'
import tableau from '../../assets/tableau-software.svg'
import tensorflow from '../../assets/tensorflow-icon.svg'


const Skills = () => {
  return (
    <div className='pf__skills' id='skills'>
        <div className='pf__skills-head'>
            <div className='pf__skills-head-text1'>
                Stacks
            </div>
            <div className='pf__skills-head-text2'>
                I've been working with
            </div>            
        </div>

        <div className='pf__skills-boxes-row1'>
            <Skillbox tech_logo={python} />
            <Skillbox tech_logo={tensorflow}/>
            <Skillbox tech_logo={jupyter}/>
            <Skillbox tech_logo={sklearn}/>
            <Skillbox tech_logo={pytorch}/>
        </div>

        <div className='pf__skills-boxes-row2'>
            <Skillbox tech_logo={Reactjs}/>
            <Skillbox tech_logo={figma}/>
            <Skillbox tech_logo={html}/>
            <Skillbox tech_logo={css}/>
            <Skillbox tech_logo={js}/>
        </div>

        <div className='pf__skills-boxes-row3'>
            <Skillbox tech_logo={tableau}/>
            <Skillbox tech_logo={matplot}/>
            <Skillbox tech_logo={pandas}/>
            <Skillbox tech_logo={numpy}/>
        </div>
    </div>
  )
}

export default Skills
