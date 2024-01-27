import React from 'react'
import './contact.css'

import Phone from '../../assets/phone-call-svgrepo-com.svg'   
import College from  '../../assets/college-svgrepo-com.svg'
import Git from '../../assets/icons8-github.svg'
import Gmail from '../../assets/icons8-gmail.svg'
import Linkedin from '../../assets/icons8-linkedin (1).svg'
import Location from '../../assets/location-svgrepo-com.svg'

const Contact = () => {
  return (
    
    <section className='pf__contact-main' id='contact'>
        <div className='pf__contact-head'>
            <div className='pf__contact-head-text1'>
                Wanna get in touch
            </div> 
            <div className='pf__contact-head-text2'>
                Here
            </div>    
        </div>
        <div className='pf__contact'>
            <div className='pf__contact-words'>
                <div className='pf__contact-words-college'>
                    <img src={College} alt="college" />
                    <p>Kumaraguru College of Technology, <br />Coimbatore</p>
                </div>
                <div className='pf__contact-words-address'>
                    <img src= {Location} alt="location" />
                    <p>
                        No: 2, Natesan Street, <br />
                        Kondalampatty Sandhai, <br />
                        Salem, Tamil Nadu. <br />
                        Pincode: 636010
                    </p>
                </div>
                <div className='pf__contact-words-num'>
                    <img src= {Phone} alt="phone" />
                    <p>+91 6382174880</p>
                </div>
            </div>

            <div className='pf__contact-icons'>
                <a href="https://github.com/Siddhartha-Devan">
                    <img src= {Git} alt="git" className='pf__contact-icons-git' />
                </a>
                <a href={'mailto: siddu2003oct@gmail.com'}>
                    <img src= {Gmail} alt="gmail" className='pf__contact-icons-gmail' />    
                </a>
                <a href="https://www.linkedin.com/in/siddharthadevan">
                    <img src= {Linkedin} alt="linkedin" className='pf__contact-icons-linkedin' />
                </a>
                
            </div>
        </div>
    </section>
  )
}

export default Contact
