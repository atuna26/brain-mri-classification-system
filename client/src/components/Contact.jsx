import styles from '../style'
const Contact = () =>  (
  <section id="contact" className={`flex flex-col w-full justify-center items-center  ${styles.paddingY}`}>
    <div className='flex flex-col w-full justify-center items-center'>
      <h1 className='font-poppins font-semibold text-[32px] text-primary text-center leading-[50.8px]'>
        Contact Us
      </h1>
      <p className={`${styles.paragraph} text-primary mt-5 text-center`}>
        For any inquiries or feedback, feel free to reach out to us.
      </p>
      <div className='flex flex-col sm:flex-row w-full justify-center items-center mt-5'>
        <a href='mailto:alperentuna26@gmail.com' />
        </div>
        </div>
  </section>
)

export default Contact
