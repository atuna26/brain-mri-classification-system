import styles from "../style";
import {CheckIcon,CpuChipIcon} from '@heroicons/react/24/outline'
import  brainLogo  from '../assets/brainLogo.png'
import { useEffect, useState } from "react";


const Hero = () => {

  const [accuracy, setAccuracy] = useState(0);
  useEffect(()=>{
    let start = 0;
    const end = 98.84;
    const duration = 1500;
    const increment = end/ (duration/100);

    const timer = setInterval(()=>{
      start += increment;
      if(start>=end){
        start = end;
        clearInterval(timer);
      }
      setAccuracy(start.toFixed(2));
  },100);
  return () => clearInterval(timer);
  },[]);

  const [f1Score, setf1Score] = useState(0);
  useEffect(()=>{
    let start = 0;
    const end = 0.97;
    const duration = 1000;
    const increment = end/ (duration/100);

    const timer = setInterval(()=>{
      start += increment;
      if(start>=end){
        start = end;
        clearInterval(timer);
      }
      setf1Score(start.toFixed(2));
  },100);
  return () => clearInterval(timer);
  },[]);

  return (
    <section id="home" className={`flex sm:flex-row flex-col  w-full justify-end items-center ${styles.paddingY}`}>
      <div className="flex flex-1 flex-col">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-primary text-center md:text-start ss:leading-[100.8px]
        leading-[75px]"> Brain MRI <br className="sm:block hidden"/>
          <span className="text-gradient">Classification</span>
        </h1>
        <p className={`${styles.paragraph} text-primary max-w-[470px] mt-5 text-center md:text-start`}>
        Powered by CNN and Vision Transformers (ViT), this platform delivers precise tumor classification and segmentation from MRI scans, ensuring accuracy and reliability for medical professionals.
        </p>
        <div className="flex-1 flex flex-col max-w-[470px] justify-center mt-2">
          <div className="flex-1 flex items-center self-start">
            <CheckIcon className={`${styles.paragraph}   text-primary w-[30px] text-gradient border rounded-full p-1 border-primary font-bold flex`}/> 
            <p className={`${styles.paragraph} text-primary ss:text-[30px] text-[20px] text-gradient font-bold flex ml-1`}>{accuracy}% Accuracy</p>
          </div>
          <div className="flex-1 flex items-center self-end mt-2">
            <CpuChipIcon className={`${styles.paragraph}   text-primary w-[30px] text-gradient border rounded-full p-1 border-primary font-bold flex`}/> 
            <p className={`${styles.paragraph} text-primary ss:text-[30px] text-[20px] text-gradient font-bold flex ml-1`}>{f1Score} F1 Score</p>
          </div>
          
          <div className="flex flex-row items-center py-[6px] mt-5 px-4 bg-discount-gradient rounded-[10px] mb-2 self-center cursor-pointer">
            <p className={`${styles.paragraph} `}>
            <span className="text-white">Click Here to</span> Download{" "}
            <span className="text-white">Article</span>
            </p>
          </div>
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={brainLogo} alt='Brain Logo'  className="relative w-[350px] h-[350px] z-[5] shake" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient shake" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40 shake" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient shake" />
      </div>
    </section>
  );
};

export default Hero;