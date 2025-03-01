import styles from "../style";
import { aboutProject } from '../constants';

const About = () =>  
  (
  <section id="about" className={`flex flex-col w-full justify-center items-center  ${styles.paddingY}`}>
    <div  className={`flex sm:flex-row flex-col w-full justify-center items-stretch`}>
      {aboutProject.map((item,index)=>(
        <div className={`flex flex-1 flex-col sm:w-1/3 w-full  px-5 ${index !== aboutProject.length-1 ? "sm:border-b-0 border-b-2 md:border-r-2 border-solid " : "border-none"} `}  key={index}>
          <h1 className={`flex-1 font-poppins font-semibold ss:text-[32px] text-[22px] text-primary text-center ss:leading-[50.8px]
          leading-[25px] ${index !== 0 ? "sm:pt-0 pt-3" : "pt-0:"} `}> 
          {item.title}
          </h1>
          <p className={`${styles.paragraph} text-primary mt-5 text-center md:text-start `}>
          {item.content}
          </p>
        </div>
      ))}
    </div>
  </section>
  )


export default About
