import styles from "../../style"
import PropTypes from "prop-types"

const Cards = (props) => {
  return (
    <div className={`flex justify-between flex-col ${props.bgColor === "primary" ? "bg-primary" : "bg-success"} shadow-2xl rounded-2xl h-[200px] w-full relative overflow-hidden`}>
    <i className={`${props.icon} text-[300px] text-gray-200 opacity-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></i>
    
    <h1 className={`${styles.flexCenter} flex-col flex-1 font-poppins font-semibold ss:text-[42px] text-[22px] pt-5 text-white text-center`}>
      {props.title}
        {props.percentage &&
            <>
            <br className="sm:block hidden"/>
            <span className="text-white text-center font-medium">{props.percentage}</span>
            </> 
        }
      
    </h1>

    <div className="flex-1 flex items-center justify-center ss:justify-between ss:flex-row flex-col w-full px-6 pb-2">
        <div className="flex items-center">
            <h1 className="text-white font-poppins font-semibold text-[17px] ss:text-[20px]">{props.firstSubTitle}</h1>
            <p className="text-white font-poppins font-medium text-[16px]"> &nbsp;{props.firstSubTitleValue}</p>
        </div>
        <div className="flex items-center">
            <h1 className="text-white font-poppins font-semibold text-[20px]">{props.secondSubTitle}</h1>
            <p className="text-white font-poppins font-medium text-[16px]">&nbsp;{props.secondSubTitleValue}</p>
        </div>
    </div>
  </div>
  )
}


Cards.propTypes = {
  icon: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  percentage: PropTypes.string,
  firstSubTitle: PropTypes.string.isRequired,
  firstSubTitleValue: PropTypes.number.isRequired,
  secondSubTitle: PropTypes.string.isRequired,
  secondSubTitleValue: PropTypes.number.isRequired

}


export default Cards
