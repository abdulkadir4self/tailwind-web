import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../../Pages/Home/Home.css';

function Footer() {


  return (<>
  <div className='container max-w-full bg-[#E7ECFF] footerContainer'>
    <div className='container flex justify-between py-10 footerChild1'>
    <p className='text-[#939EA4]'>&copy;2023 YourCompany</p>

    <h1 className='text-4xl font-bold'>Logo</h1>

    <button className='bg-[#091133] shadow-md shadow-blue-950 text-white py-2 px-5 mr-10 hover:scale-110 transition-all '>Purchase Now</button>

    </div>
    <div className='container flex  justify-between border-t-2  border-[#CDD1D4] py-5 footerChild2'>
    <div className='flex gap-5 footerSubChild1'>
        <a className='hover:scale-110 transition-all text-[#929ECC]'>Home</a>
        <a className='hover:scale-110 transition-all text-[#929ECC]'>About</a>
        <a className='hover:scale-110 transition-all text-[#929ECC] '>Contact</a>
    </div>

    <div className='flex gap-5 footerSubChild2'>
        <i className='hover:scale-150 transition-all'> <FontAwesomeIcon icon={faFacebookF} size="lg" style={{color: "#b0b8bc",}} />  </i>
        <i className='hover:scale-150 transition-all'> <FontAwesomeIcon icon={faLinkedinIn} size="lg" style={{color: "#b0b8bc",}} />  </i>
        <i className='hover:scale-150 transition-all'> <FontAwesomeIcon icon={faTwitter} size="lg" style={{color: "#b0b8bc",}} />  </i>
        <i className='hover:scale-150 transition-all'> <FontAwesomeIcon icon={faYoutube} size="lg" style={{color: "#b0b8bc",}} />  </i>
        <i className='hover:scale-150 transition-all'> <FontAwesomeIcon icon={faInstagram} size="lg" style={{color: "#b0b8bc",}} />  </i>


    </div>
    </div>

  </div>
  </>)
}
export default React.memo(Footer)