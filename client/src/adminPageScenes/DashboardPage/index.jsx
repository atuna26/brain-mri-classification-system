import styles from '../../style'
import Cards from '../components/cards'

const DashboardPage = () => {
  return (
    <section className={`flex sm:flex flex-col w-full items-center ${styles.paddingY}`}>
       <div className='flex flex-row flex-1'>
          <Cards/>
       </div>
    </section>
  )
}

export default DashboardPage
