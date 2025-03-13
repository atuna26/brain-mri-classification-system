import styles from '../../style'
import Cards from '../components/cards'
import Chart from '../components/Chart'
import ReviewDataShort from '../components/ReviewDataShort'

const DashboardPage = () => {
  return (
    <section className={`flex sm:flex flex-col w-full items-center sm:py-10 py-6`}>
       <div className='flex flex-col sm:flex-row gap-8 sm:gap-10 justify-between items-center w-full'>
          <div className="flex flex-col w-full gap-8 ">
            <Cards title="AI Success Percentage" percentage="%98.7" firstSubTitle="Number of MRI:" firstSubTitleValue={120} secondSubTitle="Successful AI Result:" secondSubTitleValue={116} bgColor="primary" icon="fa-solid fa-check"/>
            <Cards title="All Medical Expert Reviews" firstSubTitle="Completed Review:" firstSubTitleValue={20} secondSubTitle="Ongoing Review:" secondSubTitleValue={5} bgColor="success" icon='fa-solid fa-magnifying-glass'/>
          </div>
          <div className="flex flex-col w-full gap-8">
            <Chart />
            <Chart />
          </div>
       </div>
       
       <div className='flex gap-8 sm:flex-row flex-col w-full mt-10'>
          <ReviewDataShort />
          <ReviewDataShort />
       </div>
    </section>
  )
}

export default DashboardPage
