import styles from "../../style"

const Cards = () => {
  return (
    <div className={`${styles.flexCenter} flex-col w-full ${styles.paddingY} bg-primary `}>
      <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white text-center md:text-start ss:leading-[100.8px]
        leading-[75px]">AI Success Percentage<br className="sm:block hidden"/>
          <span className="text-white">98.7%</span>
        </h1>
        <div className="flex-1 flex w-full items-end">
            <div className="flex-1 flex items-center">
                <h1 className="text-white font-poppins font-semibold text-[20px]">Number of MRI:</h1>
                <p className="text-white font-poppins font-medium text-[16px]"> &nbsp;120</p>
            </div>
            <div className="flex-1 flex items-center">
                <h1 className="text-white font-poppins font-semibold text-[20px]">Successful Result:</h1>
                <p className="text-white font-poppins font-medium text-[16px]">&nbsp; 116</p>
            </div>
           
        </div>
    </div>
  )
}

export default Cards
