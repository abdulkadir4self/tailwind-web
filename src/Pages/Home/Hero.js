import React from 'react';
import './Home.css';
import img1 from '../../Assets/designer_1.png';


function Hero() {

  return (<>
  <div className='container max-w-full h-[850px] heroContainer flex justify-between '>

    <div className='heroContent w-6/12 flex items-center justify-center '>
        <div className='w-3/5'>
        <h1 className='text-5xl text-[#091133] pb-5'>Introduce Your Product  Quickly & Effectively</h1>
        <p className='text-[#505F98] pb-5 text-lg'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

        <button className=' firstBtn bg-[#091133] shadow-md shadow-blue-950 text-white py-2 px-5 mr-10 hover:scale-110 transition-all '>Purchase UI Kit</button>
        <button className='border-[#091133] shadow-md shadow-blue-950 border-2 text-[#091133] py-[.4rem] px-5 hover:scale-110 transition-all '>Learn More</button>

        </div>
    </div>
<div className='w-6/12 heroImgContainer'>
    <img className='w-full h-full object-cover'  src={img1} />
</div>
  </div>
  </>)
}
export default React.memo(Hero);
//  data-aos="fade-right" data-aos-duration="5000" data-aos-once="true"