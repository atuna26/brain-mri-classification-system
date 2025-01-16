import styles from "../style";
import  brainLogo  from '../assets/brainLogo.png'


const Hero = () => {
  return (
    <section id="home" className={`flex flex-row w-full justify-end items-center ${styles.paddingY}`}>
      <div className="flex flex-1 flex-col">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-primary ss:leading-[100.8px]
        leading-[75px]"> Brain MRI <br className="sm:block hidden"/>
          <span className="text-gradient">Classification</span>
        </h1>
        <p className={`${styles.paragraph} text-primary max-w-[470px] mt-5`}>
        Powered by CNN and Vision Transformers (ViT), this platform delivers precise tumor classification and segmentation from MRI scans, ensuring accuracy and reliability for medical professionals.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={brainLogo} alt='Brain Logo'  className="relative z-[5] shake" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient shake" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40 shake" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient shake" />
      </div>
    </section>
  );
};

export default Hero;