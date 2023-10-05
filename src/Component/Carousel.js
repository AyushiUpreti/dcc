import React from 'react';
import {motion} from "framer-motion";
import 'swiper/css';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Carousel.css';
import LineGradient from './LinearGradient/LineGradient';
import Creative from '../Assests/creative.jpg';
import Digital from '../Assests/digital.avif';
import Content from '../Assests/images.jpeg';
import Media from '../Assests/media.jpg';
import PR from '../Assests/public.avif';
import Video from '../Assests/youtube 1.webp';
import risk from '../Assests/risk.jpg';
import risk1 from '../Assests/risk2.jpg';
import risk2 from '../Assests/risk3.png';
import risk3 from '../Assests/risk4.jpg';
import risk4 from '../Assests/risk5.jpg';
import risk5 from '../Assests/risk6.jpg';
import game from '../Assests/game.webp';
import idhs from '../Assests/idhs.webp';
import snaped from '../Assests/snaped.webp';
import census from '../Assests/census.webp';
import tcci from '../Assests/tcci.webp';
import tillotson from '../Assests/tillotson.webp';


const Carousel=()=> {
  
  const Risk=[
    {
      src:Content,
      photo:risk,
      point1: "Content Strategy",
      point2:"Message Development",
      point3:"Audience Message Mapping",
      point4:"Webinars & Podcasts",
      point5:"Blogs & Translations",
      point6:"Cultural Adaptation & E-Communications"


    },
    {
      src:Media,
      photo:risk1,
      point1:"Multicultural Targeting",
      point2:"Digital",
      point3:"Traditional",
      point4:"Social",
      point5:"Influencer Marketing",
      point6:"Partner Sponsorships"
    },
    {
      src:Creative,
      photo:risk2,
      point1:"Logo Design",
      point2:"Photography / Videography",
      point3:"Print Collateral",
      point4:"Packaging",
      point5: "Infographics & Illustrations",
      point6: "POS/Merchandise Displays"
    },
    {
      src:Digital,
      photo:risk3,
      point1:"Search Engine Marketing & Optimization",
      point2:"Social Media Management",
      point3:"Analytics",
      point4:"Measurement",
      point5:"Paid Social Media",
      point6:"Mobile Apps & Gamification"
    },
    {
      src:PR,
      photo:risk4,
      point1:"Media Relations",
      point2:"Crisis Communications",
      point3:"Brand Engagement",
      point4:"Earned Media"
    },
    {
      src:Video,
      photo:risk5,
      point1:"Scriptwriting",
      point2:"Production",
      point3:"Editing",
      point4:"Animation"
    },

  ]

  return (
    <>
     <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once:true, amount:0.5}}
      transition={{duration:1}}
      variants={{
        hidden:{opacity:0 , y:-50},
        visible:{opacity:1,y:0}
        }}
        >
     <div className='carousel' >
     <h1 className='heading'>Driving Behavior Change through </h1>
     <h1 className='heading3'>Consumer Education</h1>

     <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="https://dccmarketing.com/wp-content/uploads/2023/03/SNAP-Ed-Case-Study-1-1.pdf" target='_blank'  rel="noreferrer" >
          <img src={snaped} alt=""/>
          <div className="case-btn">
          <button className='btn' type='btn'>SNAP-Ed</button>
          </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://dccmarketing.com/wp-content/uploads/2023/03/IDOT-Case-Study-1-1.pdf" target='_blank'  rel="noreferrer">
          <img src={game} alt=""/>
          <div className="case-btn">
          <button className='btn' type='btn'>IDOT</button>
          </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://dccmarketing.com/wp-content/uploads/2023/06/IDHS-Case-Study.pdf" target='_blank'  rel="noreferrer">
          <img src={idhs} alt=""/>
          <div className="case-btn">
          <button className='btn' type='btn'>IDHS</button>
          </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://dccmarketing.com/wp-content/uploads/2023/03/Census-2020-Case-Study.pdf" target='_blank'  rel="noreferrer">
          <img src={census} alt=""/>
          <div className="case-btn">
          <button className='btn' type='btn'>Census</button>
          </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://dccmarketing.com/wp-content/uploads/2023/03/TCCI-Case-Study-1-1.pdf" target='_blank'  rel="noreferrer">
          <img src={tcci} alt=""/>
          <div className="case-btn">
          <button className='btn' type='btn'>TCCI</button>
          </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://dccmarketing.com/wp-content/uploads/2023/03/Tillotson-Case-Study-1.pdf" target='_blank'  rel="noreferrer">
          <img src={tillotson} alt=""/>
          <div className="case-btn">
          <button className='btn' type='btn'>Tillotson</button>
          </div>
          </a>
        </SwiperSlide>
      </Swiper>
      <div className="btn1 case-btn">
      <button className='btn-text' type='btn'> View All Our Case Studies</button>
      </div>
      </div> 

      </motion.div>

      {/* </div> */}
      <LineGradient/>
      
      <div className="Risk-container">
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once:true, amount:0.5}}
      transition={{duration:2}}
      variants={{
        hidden:{opacity:0 , y:-50},
        visible:{opacity:1,y:0}
        }}
        >
      <h1 className='heading'>We connect with and impact  </h1>
      <h1 className='heading1'>hard-to-reach audiences</h1>
      
      <div className="at-risk">
        {Risk.map((value,index)=>(
          <div key={index}>
            <img className='risk-img' src={value.photo} alt="" />
          </div>
        ))}
      </div>
      </motion.div>
      </div>
    

     <div className="grid-container">
     <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once:true, amount:0.5}}
      transition={{duration:1}}
      variants={{
        hidden:{opacity:0 , y:-50},
        visible:{opacity:1,y:0}
        }}
        >
      <h1 className='heading'>Our Capabilities </h1>
      <div className="experts">
        {Risk.map((value,index)=>(
            <div key={index}>
              <div className="card">
                <div className="box">
                <img className='expert-img' src={value.src} alt="risks" />
                </div>
            
            <div className="card-info">
              <div className="hover-info">  
                  <p>• {value.point1}</p>
                  <p>• {value.point2}</p>
                  <p>• {value.point3}</p>
                  <p>• {value.point4}</p>
                  <p>• {value.point5}</p>
                  <p>• {value.point6}</p>
              </div>
            </div>
            </div>
          </div>
          ))}
    </div>
    </motion.div>
    </div>

    </>
  );
}
export default Carousel;

