import React from 'react'
import CountUp from "react-countup"
import { motion } from "framer-motion"

const OverviewCounter = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ type: "spring", stiffness: 80 }} 
      className="container mx-auto p-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex flex-col items-center justify-center p-4 bg-gray-100 shadow-lg rounded">
          <p className="text-lg md:text-2xl font-bold text-blue-600">
            <CountUp start={0} end={200} suffix="+" duration={3} />
          </p>
          <p className="text-sm md:text-lg text-gray-700">Projects Completed</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 bg-gray-100 shadow-lg rounded">
          <p className="text-lg md:text-2xl font-bold text-green-600">
            <CountUp start={0} end={75} suffix="K+" duration={3} />
          </p>
          <p className="text-sm md:text-lg text-gray-700">Happy Clients</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 bg-gray-100 shadow-lg rounded">
          <p className="text-lg md:text-2xl font-bold text-red-600">
            <CountUp start={0} end={150} suffix="M+" duration={3} />
          </p>
          <p className="text-sm md:text-lg text-gray-700">Lines of Code</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 bg-gray-100 shadow-lg rounded">
          <p className="text-lg md:text-2xl font-bold text-purple-600">
            <CountUp start={0} end={50} suffix="+" duration={3} />
          </p>
          <p className="text-sm md:text-lg text-gray-700">Awards Won</p>
        </div>
      </div>
    </motion.section>
  )
}

export default OverviewCounter
