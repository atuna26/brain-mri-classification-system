import styles from "../style";
import { aboutProject } from '../constants';

const About = () =>  
  (
  <section id="about" className={`flex flex-col w-full justify-center items-center  ${styles.paddingY}`}>
    <div  className={`flex flex-row w-full justify-center items-stretch`}>
      {aboutProject.map((item,index)=>(
        <div className={`flex flex-1 flex-col w-1/3 px-5 ${index !== aboutProject.length-1 ? "border-solid border-r-2" : "border-none"} `}  key={index}>
          <h1 className="flex-1 font-poppins font-semibold ss:text-[32px] text-[12px] text-primary text-center ss:leading-[50.8px]
          leading-[25px]"> 
          {item.title}
          </h1>
          <p className={`${styles.paragraph} text-primary mt-5 text-center md:text-start `}>
          {item.content}
          </p>
        </div>
        
      ))}
    </div>
    <div className="flex flex-row items-center py-[6px] mt-5 px-4 bg-discount-gradient rounded-[10px] mb-2">
        <p className={`${styles.paragraph} `}>
        <span className="text-white">Click Here to</span> Download{" "}
        <span className="text-white">Article</span>
      </p>
    </div>
  </section>
  )


export default About
