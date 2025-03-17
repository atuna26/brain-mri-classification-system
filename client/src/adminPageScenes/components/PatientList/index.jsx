
const PatientList = () => {
  return (
    <section className={`flex sm:flex flex-col w-full items-center sm:py-10 py-6`}>
       <div className="w-full overflow-x-auto">
             <table className="table-auto w-full border-collapse border border-gray-400 overflow-hidden rounded-b-lg shadow-lg">
               <caption className='caption-top text-center font-semibold text-white text-base md:text-xl lg:text-2xl rounded-t-lg bg-primary py-3 md:py-6'>
                 Patient List
               </caption>
               <thead className="bg-primary">
                 <tr>
                   <th className='border border-x-gray-300 border-b-gray-300 p-2 md:p-4 pl-4 md:pl-8 text-left font-bold text-white whitespace-nowrap'>Patient Name</th>
                   <th className='border border-x-gray-300 border-b-gray-300 p-2 md:p-4 pl-4 md:pl-8 font-bold text-white whitespace-nowrap text-center'>Age</th>
                   <th className='border border-x-gray-300 border-b-gray-300 p-2 md:p-4 pl-4 md:pl-8  font-bold text-white whitespace-nowrap text-center'>Number of MRI</th>
                   <th className='border border-x-gray-300 border-b-gray-300 p-2 md:p-4 pl-4 md:pl-8 text-left font-bold text-white whitespace-nowrap'>Tumor Name</th>
                   <th className='border border-x-gray-300 border-b-gray-300 p-2 md:p-4 pl-4 md:pl-8 text-left font-bold text-white whitespace-nowrap'>Details</th>
                 </tr>
               </thead>
               <tbody>
                 {[...Array(25).keys()].map((item, index) => (
                   <tr key={index}>
                      <td className='border border-gray-300 bg-gray-50 p-2 md:p-4 pl-4 md:pl-8 text-left text-sm md:text-base font-medium text-gray-700'>Ayşen Deniz</td>
                     <td className='border border-gray-300 bg-gray-50 p-2 md:p-4 pl-4 md:pl-8  text-sm md:text-base font-medium text-center text-gray-700 '>47</td>
                     <td className='border border-gray-300 bg-gray-50 p-2 md:p-4 pl-4 md:pl-8 text-sm md:text-base text-center font-medium text-gray-700 '>52</td>
                     <td className='border border-gray-300 bg-gray-50 p-2 md:p-4 pl-4 md:pl-8 text-left text-sm md:text-base font-medium text-gray-700 '>Meningioma</td>
                     <td className='border border-gray-300 bg-gray-50 p-2 md:p-4 pl-4 md:pl-8 text-left text-sm md:text-base font-medium text-gray-700 '>View Detail</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
    </section>
  )
}

export default PatientList
