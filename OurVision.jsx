import { motion } from 'framer-motion'
import React from 'react'

const fadeAnimation = (delay) => {
  return {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  }
}

const OurVision = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 py-8'>
      <div className='container mx-auto bg-white pl-6'>
        <div className='flex flex-col lg:flex-row gap-10'>
          <motion.div
            variants={fadeAnimation(0.2)}
            initial='initial'
            whileInView='animate'
            className='flex-1 p-6 space-y-4 shadow-lg border-4 border-green-800 rounded-lg bg-green-50'
          >
            <h1 className='text-xl font-semibold text-green-800'>What is Crowdfunding?</h1>
            <p>
              Crowdfunding is a method of raising capital through the collective effort of a large number of individuals. This approach leverages the extensive networks of friends, family, and online communities, primarily through social media and crowdfunding platforms, to bring investors and entrepreneurs together.
            </p>
            <a
              href='#'
              className='inline-block text-green-800 hover:text-green-600 border-b border-green-800 hover:border-green-600'
            >
              Learn More
            </a>
          </motion.div>
          <motion.div
            variants={fadeAnimation(0.4)}
            initial='initial'
            whileInView='animate'
            className='flex-1 p-6 space-y-4 shadow-lg border-4 border-yellow-800 rounded-lg bg-yellow-50'
          >
            <h1 className='text-xl font-semibold text-yellow-800'>Types of Crowdfunding</h1>
            <p>
              There are several types of crowdfunding, including donation-based, reward-based, equity-based, and debt-based crowdfunding. Each type serves different purposes and caters to different types of investors and entrepreneurs.
            </p>
            <a
              href='#'
              className='inline-block text-yellow-800 hover:text-yellow-600 border-b border-yellow-800 hover:border-yellow-600'
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default OurVision
