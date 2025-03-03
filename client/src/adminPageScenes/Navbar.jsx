import { useState } from 'react'
import { navLinks } from './components/constants'
import  brainLogo  from '../assets/brainLogo.png'
import { Bars3Icon,XCircleIcon,ChevronDownIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import styles from '../style'


const Navbar = () => {
  
  const [toggle,setToggle] = useState(false)
  const [reviewToggle, setReviewToggle] = useState(false);
  const [modelToggle, setModelToggle] = useState(false);



  return (
    <nav className='w-full flex items-center navbar'>
      <img src={brainLogo} alt='Brain Logo' className='w-[150px] h-[150px]' />

      <ul className="list-none sm:flex hidden justify-start items-center flex-1 ml-10">
  {navLinks.map((nav) => (
    <li
      key={nav.id}
      className={`relative font-poppins font-normal cursor-pointer text-[16px] text-primary mr-10 ${nav.id==="contact-panel" ? "ml-auto" : ""}`}
      onMouseEnter={() => {
        if (nav.id === "reviews") {
          setReviewToggle(true);
        } else if (nav.id === "aiModels") {
          setModelToggle(true);
        }
      }}
      onMouseLeave={() => {
        if (nav.id === "reviews") {
          setReviewToggle(false);
        } else if (nav.id === "aiModels") {
          setModelToggle(false);
        }
      }}
    >
      <Link className={`${styles.flexCenter}`} to={nav.id!="reviews" ? `/${nav.id}` : undefined}>{nav.title} {nav.id==="reviews" ? <ChevronDownIcon className='w-[16px] ml-1'/> : ""} {nav.id==="aiModels" ? <ChevronDownIcon className='w-[16px] ml-1'/> : ""}</Link>

      {nav.id === "reviews" && reviewToggle && (
        <ul
          className="absolute left-0 top-full mt-0 bg-white-gradient shadow-lg border border-gray-300 rounded-lg w-48"
          onMouseEnter={() => setReviewToggle(true)}
          onMouseLeave={() => setReviewToggle(false)} 
        >
          {nav.subtitles.map((sub) => (
            <li key={sub.id} className="px-4 py-2 hover:bg-gray-100">
              <Link to={`/${sub.id}`} className="font-poppins font-normal cursor-pointer text-sm text-primary mb-0">
                {sub.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {nav.id === "aiModels" && modelToggle && (
        <ul
          className="absolute left-0 top-full mt-0 bg-white-gradient shadow-lg border border-gray-300 rounded-lg w-48"
          onMouseEnter={() => setModelToggle(true)}
          onMouseLeave={() => setModelToggle(false)} 
        >
          {nav.subtitles.map((sub) => (
            <li key={sub.id} className="px-4 py-2 hover:bg-gray-100">
              <Link to={`/${sub.id}`} className="font-poppins font-normal cursor-pointer text-sm text-primary mb-0">
                {sub.title}
              </Link>
            </li>
          ))}
        </ul>
      )}


    </li>
  ))}
</ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        { toggle ?  <XCircleIcon  className='w-[50px] text-primary object-contain' onClick={() => setToggle((prev)=> !prev)}/> : <Bars3Icon className='w-[50px] text-primary object-contain' onClick={() => setToggle((prev)=> !prev)} /> }
        
        <div className={`${toggle ? "flex" : "hidden"} p-6 bg-white-gradient shadow-glow-inset absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav)=>(
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-primary mb-0`}>
                
                <a href={`/${nav.id}`}>{nav.title}</a>
              </li>
            ))}
           
          </ul>
        </div>
      
      </div>
      
    

    </nav>
  )
}

export default Navbar
