import React from 'react'

const VideoBanner = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <div className='container py-8 w-full'>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className='rounded-md border border-green-600 bg-gradient-to-r from-green-400 via-teal-500 to-green-600 p-6 text-center shadow-lg transition-transform transform hover:scale-105'>
            <h2 className='text-3xl font-bold mb-4 font-sans text-white'>Extend a Helping Hand</h2>
            <p className='text-md font-serif text-white'>Small acts of kindness can transform lives. Your support can provide food, shelter, and hope to those in need.</p>
          </div>
          {/* Card 2 */}
          <div className='rounded-md border border-green-600 bg-gradient-to-r from-green-400 via-teal-500 to-green-600 p-6 text-center shadow-lg transition-transform transform hover:scale-105'>
            <h2 className='text-3xl font-bold mb-4 font-sans text-white'>Make a Difference</h2>
            <p className='text-md font-serif text-white'>Every contribution counts. Join us in our mission to uplift the lives of the poor and bring positive change to our community.</p>
          </div>
          {/* Card 3 */}
          <div className='rounded-md border border-green-600 bg-gradient-to-r from-green-400 via-teal-500 to-green-600 p-6 text-center shadow-lg transition-transform transform hover:scale-105'>
            <h2 className='text-3xl font-bold mb-4 font-sans text-white'>Be the Change</h2>
            <p className='text-md font-serif text-white'>Your generosity can create lasting impact. Together, we can build a better future for everyone.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoBanner
