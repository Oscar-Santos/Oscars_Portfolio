import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#1c3d6d]'>

      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 text-3xl'>Hi, my name is :</p>
        <h1 className='text-4xl sm:text-5xl font-bold text-[#ccd6f6]'>Oscar Santos</h1>
        <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'>I'm a Software Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] text-2xl'>
          I specialize in building and designing exceptional digital experiences. Currently, I'm focused on developing responsive full-stack web applications.
        </p>

        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work 
            <span className='group-hover:rotate-90 duration-500 text-black'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>

      </div>

    </div>
  )
}

export default Home