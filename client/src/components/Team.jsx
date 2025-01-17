import React from 'react'
import styles from '../style'
import { teamMembers } from '../constants'

const Team = () =>(
  <section id="team" className={`flex flex-col w-full justify-center items-center  ${styles.paddingY}`}>
    <div className='flex flex-1 justify-center items-center'>
      {teamMembers.map((member,index)=>(
         //<div className='flex flex-1 flex-col w-1/4' href={member.mail} key={index}>
          <a  className='flex flex-1 flex-col w-1/4' href={member.mail} key={index}>
            <img src={member.image} className='border-solid border-1 mx-5 border-primary shadow-glow-soft' alt="" />
            <p className={`${styles.paragraph} text-primary mt-5 text-center`}>
            {member.name} <br/> <span className='opacity-50'> {member.role}</span>
          </p>
          </a>
       // </div>
      ))}

    </div>
  </section>
  )


export default Team
