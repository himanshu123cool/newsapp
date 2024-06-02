import React from 'react';
import logo from '../assets/np12blue-retina.png.webp';


const Wrapper = () => {
  return (
    <div className='container py-2'>
      <div className="row align-items-center">
        <div className="col-12 col-sm-4 col-md-4 d-flex justify-content-center justify-sm-content-start">
            <img src={logo} alt="logo"  className='img-fluid' id='logo_img'/>
        </div>
        <div className="col-12 col-sm-8 col-md-8" id='banner_img_container'>
            <div className="row m-0 px-1 px-sm-4 d-flex align-items-center justify-content-center" id='banner_overlay'>
                <div className="col-12 col-sm-8">
                    <p className='text-light fs-5 fw-bold m-0 text-center text-sm-start' id='main_heading'>Breaking News, Anytime, Anywhere</p>
                </div>
                <div className="col-12 col-sm-4 d-flex justify-sm-content-end justify-content-center">
                    <a href='https://www.nbcnews.com/' target='_blank' rel='noreferrer'><button className='btn' id='read_more_btn'>Read More</button></a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Wrapper
