import styles from "./style"
import { Navbar,Hero } from "./components"


const App = () => (
  <div className='bg-white w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}  `}>
          <Navbar/>
        </div>
      </div>

      <hr className="shadow-glow"/>
    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} `}>
        <Hero/>
      </div>
    </div>
    <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>

      </div>
    </div>
  </div>
)

export default App
