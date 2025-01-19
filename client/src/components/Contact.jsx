import styles from '../style'
const Contact = () =>  (
  <section id="contact" className={`flex flex-row w-full justify-center bg-discount-gradient px-2 rounded-lg shadow-glow-soft items-center my-5  ${styles.paddingY}`}>
   <div className='flex flex-col w-1/3 '>
      <h1 className='`flex-1 font-poppins font-semibold ss:text-[32px] text-[22px] text-white text-center ss:leading-[50.8px]
            leading-[25px]'>  Contact Us
      </h1>
      <p className={`${styles.paragraph} text-white mt-5 text-center`}>
        We are always here to help you. Contact us through the form below.
      </p>
   </div>
   <div className='flex flex-col w-2/3 border-l pl-4 border-solid border-white '>
      <form className='flex justify-center items-center flex-col w-full'>
        <div className='flex-1 flex gap-4 flex-row w-full justify-between items-center mx-2'>
          <input type='text' placeholder='Name Surname' className='border-2 border-white rounded-lg p-2 mt-5 w-1/2' />
          <input type="email" placeholder='Email' className='border-2 border-white rounded-lg p-2 mt-5 w-1/2' />
        </div>
        <div className='flex-1 flex gap-4 flex-row w-full justify-between items-center mx-2'>
          <input type='text' placeholder='Subject' className='border-2 border-white rounded-lg p-2 mt-5 w-1/2' />
          <input type="text" placeholder='Occupation' className='border-2 border-white rounded-lg p-2 mt-5 w-1/2' />
        </div>
        <textarea placeholder='Message' className='border-2 border-white rounded-lg p-2 mt-5 w-full' />
        <button className='bg-white text-primary font-poppins font-semibold text-center rounded-lg p-2 mt-5'>Send</button>
      </form>
   </div>
  </section>
)

export default Contact
