import React,{useState} from 'react';
import './Home.css';
import {motion} from "framer-motion";
// import dccVideo from '../Assests/DCC VIDEO Business Development 08-17 Rough.mp4'

const Home = () => {

  const [isMuted, setIsMuted] = useState(true);
  return (
    <div className='home-sec'>
      <div className="video-player">
      <video src="https://drive.google.com/file/d/1J2m7kX1ZnV-GYP6fVtlCSWEyz7r-waP3/view?usp=sharing" loop={true} muted={isMuted} autoPlay={true} width="100%"/>
      <button className='mute-button' onClick={() => setIsMuted(!isMuted)}>
      {isMuted ? '🔇' : '🔊'}
    </button>
    </div>

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

     <div className='info'>
        <p>At DCC Marketing, we do things a little differently. Working with clients who share our vision for a better world to drive action and inspire behavior change. We leverage our experience and expertise for good. DCC is proud to partner with organizations and causes that align with our values—sustainability, education, human services and beyond. We are redefining modern marketing and seeking more altruistic KPIs than clicks and conversions.</p>
        <br />
        <p>Our talented team brings fresh perspectives and strategic creativity to every project. We prioritize diversity, equity, and inclusion, as it fuels our ability to create authentic and engaging work that resonates with target audiences.
</p> </div>

    <div className='btn1'>
        <button className='btn-text' type='btn'>Get to know us!</button>
    </div>
    </motion.div>
    </div>
   

  )
}

export default Home
