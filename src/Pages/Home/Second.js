import React , {useEffect} from 'react';
import Img2 from '../../Assets/Group 10.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../index.css';

function Second() {

  useEffect(()=>{
    Aos.init();
    } , [])

  return (<>
  <div className='container flex py-20 secondContainer'>
    <div className='w-6/12 flex flex-col  justify-center pr-28 secondContentContainer' data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2000">
    <h2 className='text-4xl font-semibold pb-5'>Light, Fast & Powerful</h2>
    <p className='text-lg mb-4 text-[#505F98]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
    <p className='text-lg text-[#505F98]'>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

    <div className='flex gap-6 pt-8 secondSubContainer'>
        <div className='p-4 pl-0'>
            <i ><FontAwesomeIcon icon={faBook} style={{color: "#172554",}} size='2xl' /></i>
            <h6 className='text-lg font-semibold'>Title One</h6>
            <small className='text-sm text-[#5D6970]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</small>
        </div>
        <div className='p-4 pl-0'>
        <i><FontAwesomeIcon icon={faBook} style={{color: "#172554",}} size='2xl' /></i>
            <h6 className='text-lg font-semibold'>Title Two</h6>
            <small className='text-sm text-[#5D6970]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</small>
        </div>  
    </div>
    </div>

    <div className='w-6/12 secondImgContainer'>
      <img className='w-full h-full object-cover p-20' src={Img2} />  
    </div>
  </div>
  </>)
}
export default React.memo(Second);