import React from 'react';
import brainMri from "../../assets/brainMri.jpg";

const ReviewDataShort = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-400 overflow-hidden rounded-b-lg shadow-lg">
        <caption className='caption-top text-center text-lg font-semibold text-white text-base md:text-xl lg:text-2xl rounded-t-lg bg-primary py-3 md:py-6'>
          Completed Review
        </caption>
        <thead className="bg-primary">
          <tr>
            <th className='border border-x-gray-300 border-b-gray-300 p-2 md:p-4 pl-4 md:pl-8 text-left font-bold text-white whitespace-nowrap'>MRI</th>
            <th className='border border-x-gray-300 border-b-gray-300 p-2 md:p-4 pl-4 md:pl-8 text-left font-bold text-white whitespace-nowrap'>Patient Name</th>
            <th className='border border-x-gray-300 border-b-gray-300 p-2 md:p-4 pl-4 md:pl-8 text-left font-bold text-white whitespace-nowrap'>Expert Name</th>
            <th className='border border-x-gray-300 border-b-gray-300 p-2 md:p-4 pl-4 md:pl-8 text-left font-bold text-white whitespace-nowrap'>Tumor Name</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <tr key={index}>
              <td className='flex items-center min-h-[60px] md:min-h-[75px] justify-center gap-2 md:gap-3 border border-gray-300 bg-gray-50 p-2 md:p-4 pl-4 md:pl-8 text-left font-medium text-gray-700  ss:w-auto w-max'>
                <img src={brainMri} alt="MRI" className="w-8 h-8 md:w-10 md:h-10 rounded-lg"/>
                <i className={`fa-${index % 2 === 1 ? 'solid' : 'regular'} fa-star text-primary text-base md:text-xl`}></i>
              </td>
              <td className='border border-gray-300 bg-gray-50 p-2 md:p-4 pl-4 md:pl-8 text-left text-sm md:text-base font-medium text-gray-700 '>Ayşen Deniz</td>
              <td className='border border-gray-300 bg-gray-50 p-2 md:p-4 pl-4 md:pl-8 text-left text-sm md:text-base font-medium text-gray-700 '>Hasan Tangöz</td>
              <td className='border border-gray-300 bg-gray-50 p-2 md:p-4 pl-4 md:pl-8 text-left text-sm md:text-base font-medium text-gray-700 '>Meningioma</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewDataShort;