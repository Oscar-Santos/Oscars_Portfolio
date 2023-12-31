import React from 'react';

const About = () => {
  return (
    // <div name='about' className='w-full h-screen bg-[#142f57] text-gray-300'>
    <div name='about' className='w-full h-screen bg-[#3a3a39] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Nice to meet you!. Please take a look around.</p>
            </div>
            <div className='text-2xl'>
              <p>I am a passionate and sociable software developer with Latino heritage. Proficient in both English and Spanish, I have a genuine passion for problem-solving and helping others. I excel in collaborative team environments and am equally adept at working independently.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;