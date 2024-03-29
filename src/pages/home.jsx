import React from 'react'
import '../css/style.css';
import business from '../assets/rakesh.jpeg'
import logo from '../assets/maximice_logo_white-removebg-preview.png'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import ReactTyped from 'react-typed';
import digital1 from '../assets/female-logo-designer-working-her-tablet-connected-laptop.jpg'
import digital2 from '../assets/hand-holding-notebook-with-drew-brand-logo-creative-design-ideas.jpg'
import digital3 from '../assets/social-media-marketing-concept-marketing-with-applications.jpg'
// import webdesign from './assets/girl.png'
import project1 from '../assets/01.01.2024_01.31.00_REC.png'
import project2 from '../assets/Screenshot (43).png'
import bird from '../assets/31530356_bird_2-removebg-preview.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <div>
        <div className='flex flex-col-reverse  lg:flex-row w-full h-full scale-95 shadow-md shadow-black'>
          <div className='w-[900px] h-full hidden lg:flex lg:h-screen'>
            <img src={business} alt='business img ' className='object-cover  w-full h-full' />
          </div>
          <div className='w-full h-screen bg-black p-10 flex flex-col justify-between '>
            <div className='flex items-center gap-2'>
              <img src={logo} alt='' className='w-[50px]' />
              <h1 className=' font-bold  text-2xl text-white'>Maximice Associates</h1>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='text-6xl text-white uppercase'>Custom Software Solution. </h1>
              <p className='mt-1 text-md text-2xl text-white'> <ReactTyped
                strings={["Leverage Your Business", "Seamless Solution", "Designer"]}
                typeSpeed={50}
                loop
                backSpeed={20}
                cursorChar="."
                showCursor={true}
              /></p>
              <button className='rounded-xl p-4 bg-gradient-to-t from-purple-600 to-violet-700 w-[200px] font-semibold mt-2 text-white transition-all ease-in-out hover:bg-white hover:text-black '>Contact Now</button>
            </div>
            <div className='flex w-full gap-2 text-white'>
              <FaFacebookSquare size={30} />
              <FaInstagramSquare size={30} />
              <FaLinkedin size={30} />
              <FaWhatsappSquare size={30} />
            </div>
          </div>
        </div>

        <div className='flex w-full h-screen flex-col'>
          <div className=' bg-gradient-to-tr from-pink-400 to-[#4169E1] h-[30vh] flex items-center sm:justify-center sm:p-2'>
            <h1 className='text-5xl lg:text-6xl  text-white uppercase text-center font-semibold p-4'>maximice Associates</h1>
          </div>
          <div className='bg-black h-screen grid lg:grid-cols-2 sm:grid-cols-1 '>
            <div className='w-full justify-center flex flex-col p-4 h-full'>
              <h1 className=' text-white lg:text-8xl sm:text-4xl font-semibold uppercase p-4'>Who We Are.</h1>
              <p className='text-white p-2'>100% Trusted and Registered Company in Pune Maharashtra India, with a professional website that provides the best web development and web design services. We are a company that offers multi-functional web portals, and we make sure that a well-developed and attractive website can help our clients to record ROI-driven results.</p>
            </div>
            <div className='flex justify-center lg:items-center sm:items-start  w-full h-full'>
              <div class="bg-black py-5 d-flex justify-content-center align-items-center -mt-4">
                <div class="obj">
                  <div className='flex flex-col gap-2'>
                    <span className='text-white text-2xl '>Learn, Grow,</span>
                    <span className='text-white text-2xl '>Expand</span>
                    <span className='text-white text-2xl '>& More</span>
                  </div>
                  <div class="objchild">
                    <span class="inn6"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' bg-black  w-full flex items-center h-[30vh]'>

        </div>
        <div className='flex w-full flex-col justify-center m-auto items-center '>

          {/* heading */}


          <h1 className='text-5xl lg:text-6xl uppercase  font-semibold p-4 ml-4'>The Services we offer</h1>
          {/* webdesign  */}

          <div className='grid grid-row-2 lg:grid-cols-2 w-full h-full scale-90'>
            <div className='flex flex-col justify-center w-full p-4'>
              {/* <div className='flex  w-full'> */}
              <img src={bird} className='w-[150px]' alt='' />
              {/* </div> */}
              <div className='flex justify-center w-full flex-col p-4 gap-4 lg:gap-0'>
                <span className='uppercase text-5xl lg:text-8xl font-semibold '>Web</span>
                <span className='uppercase text-5xl lg:text-8xl font-semibold -mt-6'>development</span>
                <p className='text-gray-700 w-full lg:w-[500px]'>Our skilled web development wizards specialize in crafting responsive designs that seamlessly adapt to any device, ensuring a captivating user journey. Beyond static pages, we create living, breathing entities that engage users through intuitive navigation, eye-catching visuals, and purposeful content, leaving a lasting impression.
                </p>
                <Link className='p-4 w-[200px] mt-5 bg-gradient-to-tr from-pink-400 to-[#4169E1] text-center' to={'/webplan'}>View plan</Link>
              </div>
            </div>
            <div className='flex justify-center items-center w-full '>
              <img src={business} className='object-cover w-[450px]' alt='' />
            </div>
          </div>

          {/* Logo Design  */}
          <div className=' bg-black w-full h-full'>
            <div className='grid grid-rows-1 lg:grid-cols-2 w-full h-full lg:h-screen bg-black scale-90'>



              <div className='text-white flex flex-col gap-8 justify-center items-center mt-8 lg:mt-0 w-full h-full p-4'>
                <img src={digital1} className='w-full object-cover h-[300px] grayscale' alt='' />
                <img src={digital2} className='w-full object-cover h-[200px] grayscale' alt='' />
              </div>
              <div className='text-white flex flex-col w-full h-full p-4'>
                <img src={bird} className='w-[150px]' alt='' />
                <h1 className='font-bold text-7xl lg:text-9xl uppercase'>Logo </h1>
                <h1 className='font-bold text-7xl lg:text-9xl uppercase '>Design </h1>
                <p className='w-full lg:w-[500px] font-normal text-gray-300'>dsjdkfk kafjg akjgka jgsfb akjf kagfb eyughbvhcjiugf huj sjb jbKJ huegbb   urg urgi riu uih u uifhauh   afh vblkbj aiu iuf fiu uufhaauifhafh  sif ieofij vefi f if oifj nodfjoiej  oIF fnskDFoi  hfduij bfkj bfKDFb JHDFb JHDFb FHbJDHFvsdhvlkhDFvFaDollyFlatbed;. g;oligz jg;zk</p>
                <Link className='p-4 w-[200px] mt-5 bg-gradient-to-tr from-pink-400 to-[#4169E1]' to={'/logoplan'}>View plan</Link>
              </div>
            </div>
          </div>

          {/* {digital marketing}  */}

          {/* <div className='w-full h-full '> */}
          <div className=' h-full lg:h-screen grid grid-rows-2 p-6'>
            <div className='flex w-full h-[50vh]'>
              <img src={digital3} className='w-full object-cover grayscale' alt='' />
            </div>
            <div className='grid grid-rows-1  lg:grid-cols-2  w-full p-4 '>
              <div className='flex flex-col w-full justify-center '>
                <h1 className='text-6xl lg:text-8xl font-semibold uppercase '>Digital</h1>
                <h1 className='text-6xl lg:text-8xl font-semibold uppercase -mt-3 '>Marketing</h1>
              </div>
              <div className='w-full flex-col flex  '>
                <img src={bird} className='w-[80px]' alt='' />
                <p className='flex text-justify w-full justify-end'>dsjdkfk kafjg akjgka jgsfb akjf kagfb eyughbvhcjiugf huj sjb jbKJ huegbb   urg urgi riu uih u uifhauh   afh vblkbj aiu iuf fiu uufhaauifhafh  sif ieofij vefi f if oifj nodfjoiej  oIF fnskDFoi  </p>
                <button className='p-4 w-[200px] mt-5 bg-gradient-to-tr from-pink-400 to-[#4169E1]'><Link to={'/digiplan'}>View Plan</Link></button>
              </div>

            </div>
          </div>
          {/* </div> */}

          {/* {our projects } */}

          <div className='w-full h-full'>
            <div className='h-full bg-black'>
              <div className=' bg-gradient-to-tr from-pink-400 to-[#4169E1] h-[30vh] flex items-center sm:justify-center sm:p-2'>
                <h1 className='text-5xl lg:text-6xl  text-white uppercase text-center font-semibold p-4'>Our Previous work & Achievements</h1>
              </div>

              <div className='h-full scale-95'>
                {/* <div className='flex text-white gap-2'> */}
                <Carousel className='p-2 border-none' infiniteLoop={3000} showArrows >
                  <div className='w-full h-full grid-rows-1 grid lg:grid-cols-2 bg-black  '>
                    <div className='flex justify-center  items-center w-full h-full p-4'>
                      <img src={project1} alt='' className='w-[200px]' />
                    </div>
                    <div className='flex flex-col justify-center items-center w-full h-full'>
                      <div>
                        <img src={bird} alt='' className='max-w-[50px]' />
                        <h1 className='text-white text-2xl lg:text-4xl font-serif'>Interrio</h1>
                      </div>
                      <p className='text-gray-300 text-sm lg:text-md max-w-[300px] '>lorem shuashdbh hasduyda slorem asdd ja djasd ajd ajsdakjf hajdoegbs veyeifnhd sirnjdh ajejnaaefnf </p>
                    </div>
                  </div>

                  <div className='w-full h-full grid grid-rows-1 lg:grid-cols-2 bg-black p-4 '>
                    <div className='flex justify-center  items-center w-full h-full p-4'>
                      <img src={project2} alt='' className='w-[200px]' />
                    </div>
                    <div className='flex flex-col justify-center items-center w-full h-full'>
                      <div>
                        <img src={bird} alt='' className='max-w-[50px]' />
                        <h1 className='text-white text-2xl lg:text-4xl font-serif'>Interrio</h1>
                      </div>
                      <p className='text-gray-300 text-sm lg:text-md max-w-[300px] '>lorem shuashdbh hasduyda slorem asdd ja djasd ajd ajsdakjf hajdoegbs veyeifnhd sirnjdh ajejnaaefnf </p>
                    </div>
                  </div>

                  <div className='w-full h-full grid grid-rows-1 lg:grid-cols-2 bg-black p-4 '>
                    <div className='flex justify-center items-center w-full h-full p-4'>
                      <img src={project1} alt='' className='w-[200px]' />
                    </div>
                    <div className='flex flex-col justify-center items-center w-full h-full'>
                      <div>
                        <img src={bird} alt='' className='max-w-[50px]' />
                        <h1 className='text-white text-2xl lg:text-4xl font-serif'>Interrio</h1>
                      </div>
                      <p className='text-gray-300 text-sm lg:text-md max-w-[300px] '>lorem shuashdbh hasduyda slorem asdd ja djasd ajd ajsdakjf hajdoegbs veyeifnhd sirnjdh ajejnaaefnf </p>
                    </div>
                  </div>
                </Carousel>

                <div className='w-full h-full flex justify-between text-white mt-10 gap-2 '>
                  <div className='flex justify-center w-full flex-col items-center p-4 bg-gradient-to-br from-blue-500 to-violet-600 '>
                    <span className='text-md lg:text-4xl font-semibold uppercase'>+12</span>
                    <h1 className='text-sm lg:text-3xl text-center font-semibold uppercase'>Web development</h1>
                  </div>
                  <div className='flex justify-center w-full flex-col items-center p-4 bg-gradient-to-br from-blue-500 to-violet-600'>
                    <span className='text-md lg:text-4xl font-semibold uppercase'>+15</span>
                    <h1 className='text-sm lg:text-3xl text-center font-semibold uppercase'>Logo Design</h1>
                  </div>
                  <div className='flex justify-center w-full flex-col items-center p-4 bg-gradient-to-br from-blue-500 to-violet-600'>
                    <span className='text-md lg:text-4xl font-semibold uppercase'>+02</span>
                    <h1 className='text-sm lg:text-3xl text-center font-semibold uppercase'>App Development</h1>
                  </div>
                </div>
                {/* </div> */}

                {/* <div className='w-full h-screen  rounded-2xl  '> */}
                <div className='grid grid-rows-1  lg:grid-cols-2 w-full h-full lg:h-screen bg-slate-100 mt-0 lg:mt-5 scale-95 '>
                  <div className='text-white flex flex-col justify-around'>
                    <div className='flex w-full flex-col items-center  '>
                      <h1 className='text-4xl lg:text-7xl  font-bold text-center mt-2 lg:mt-2 text-gray-800 '>Innovate with us</h1>
                      <p className=' w-full lg:w-[500px] text-justify text-xl mt-2 p-4 lg:p-0 text-gray-600'>Ready to take your business to next level? Contact us today to discuss your project & get a free consultation. We're here to answer any question you may have.</p>
                    </div>

                    <div className=''>
                      <h1 className='text-orange-500 text-4xl lg:text-6xl text-center uppercase'>Book Now</h1>
                      <h2 className='text-orange-500 text-4xl lg:text-5xl text-center uppercase'>Free consultation</h2>
                    </div>
                    <div>
                      <h1 className='text-gray-800 mt-4 lg:mt-0 text-xl lg:text-3xl text-center uppercase'>+91 9890845263</h1>
                      <p className='text-gray-800 text-xl lg:text-3xl text-center '>businessatmaximice@gmail.com</p>
                    </div>
                  </div>
                  <div className='text-white w-full h-full flex flex-col justify-center items-center gap-4'>
                    <img src={business} className=' mt-10 lg:mt-0 object-cover rounded-xl w-[200px]' alt='' />
                    <h1 className='text-gray-700 text-3xl'>Shruti Gade</h1>
                    <p className='text-gray-500 -mt-5 text-xl'>Team leader</p>
                    <h1 className='text-3xl text-center text-white p-2 cursor-pointer hover:text-gray-800  bg-gradient-to-tr from-pink-400 to-[#4169E1]'>Contact Us</h1>
                    <span className='text-gray-800 text-xl mb-3 lg:mb-0'>Maximice Associates</span>
                  </div>
                </div>

                {/* </div> */}


                {/* <h1 className='text-6xl  text-white uppercase text-center font-semibold p-4 mt-10'>Our Achievements</h1> */}

              </div>
            </div>

          </div>

          {/* contact us  */}

          <div className='w-full h-full p-4'>
            <div className='grid grid-rows-1 lg:grid-cols-2 p-4 gap-4  h-[40vh] justify-center items-center'>
              <div className='flex flex-col'>
                <h1 className='text-4xl font-semibold'>Its not about idea</h1>
                <h1 className='text-4xl font-semibold'>Its about making idea happen </h1>
                <span className='text-xl text-gray-600 font-semibold'>- Scott belsky</span>
              </div>
              <div className='flex justify-center gap-4 '>
                <div>
                  <h1 className='text-4xl font-bold'>Maximice Associates</h1>
                  <h2 className='text-xl'>Seamless Solution</h2>
                </div>

              </div>
            </div>
            <div>
              <h1 className='mt-2 text-center  font-semibold'>businessatmaximice@gmail.com</h1>
              <h1 className='text-center font-semibold'>+91 9890845263</h1>
              <h1 className='text-center uppercase mt-6 font-semibold text-white bg-black p-2'>@ 2024 All Rights Reserved</h1>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Home