import React from 'react'
import icons from '../src/images/ux.png'
import icons1 from '../src/images/front.png'
import icons2 from '../src/images/back.png'
import {motion} from 'framer-motion'


function Services() {
  return (
    <section id="services" className='lg:pb-20 md:pb-16 sm:pb-14 xs:pb-12' >
     <h2 className='text-center justify-center font-bold text-3xl  sm:text-5xl  xs:text-4xl pb-10'> Services</h2>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 xs:px-4'>
            <motion.div className='mx-auto'
          initial="hidden"
          whileInView="visible"
         animate={{ x:0 }}
         transition={{ delay:0.2, duration: 0.5 }}
         variants={{
          hidden:{opacity:0, y:100},
          visible:{opacity:1,x:0,y:0}
         }}>
            <div className='w-full h-[500px] bg-[#90CCF3] rounded-3xl text-black text-center px-3'>
            <img className='w-28 pt-5 mx-auto pb-10' src={icons} alt="icon"/>
            <h3 className='text-2xl font-bold pb-5'>UX/UI Design</h3>
            <p>Our UX and UI design services create 
            user-centered digital experiences tailored 
            to businesses' unique needs, through user 
            research, information architecture, 
            wireframes, and usability testing
            </p>
        </div>
        </motion.div>
        <motion.div className='mx-auto'
          initial="hidden"
          whileInView="visible"
         animate={{ x:0 }}
         transition={{ delay:0.4, duration: 0.5 }}
         variants={{
          hidden:{opacity:0, y:100},
          visible:{opacity:1,x:0,y:0}
         }}>
        <div className='w-full h-full bg-[#90CCF3] rounded-3xl text-black text-center px-3'>
            <img className='w-28 pt-5 mx-auto pb-10' src={icons1} alt="icon"/>
            <h3 className='text-2xl font-bold pb-5'>Front-end developer</h3>
            <p>Our front-end development services build responsive and 
                user-friendly web interfaces using the latest technologies, 
                ensuring a seamless user experience on all devices.
            </p>
        </div>
        </motion.div>
        <motion.div className='mx-auto'
          initial="hidden"
          whileInView="visible"
         animate={{ x:0 }}
         transition={{ delay:0.6, duration: 0.5 }}
         variants={{
          hidden:{opacity:0, y:100},
          visible:{opacity:1,x:0,y:0}
         }}>
        <div className='w-full h-full bg-[#90CCF3] rounded-3xl text-black text-center px-3'>
            <img className='w-28 pt-5 mx-auto pb-10' src={icons2} alt="icon"/>
            <h3 className='text-2xl font-bold pb-5'>Back-end developer</h3>
            <p>Our back-end development services provide scalable and secure server-side
                 solutions using modern programming languages and 
                 frameworks, ensuring efficient data management and system performance.
            </p>
        </div>
        </motion.div>
    </div>
    </section>
  )
}

export default Services
