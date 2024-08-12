import React from 'react';
import './Home.css';

function Last() {


  return (<>
  <div className='container max-w-full lastContainer py-20 '>
    <div className='text-center py-32 flex flex-col items-center gap-10 lastContentContainer'>
        <h1 className='text-4xl font-semibold text-[#091133]'>A Price To Suit Everyone</h1>
        <p className='w-4/12 text-[#505F98]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>

        <div>
        <h1 className='text-8xl text-[#091133]'> &#x24;40 </h1>
        <h1 className='text-xl font-semibold text-[#505F98]'>UI Design Kit</h1>
        </div>


        <div>
        <p className='text-[#5D6970] pb-2'>See, One Price, Simple.</p>
        <button className='bg-[#091133] shadow-md shadow-blue-950 text-white py-2 px-5  hover:scale-110 transition-all '>Purchase Now</button>
        </div>

    </div>
  </div>
  </>)
}
export default React.memo(Last);