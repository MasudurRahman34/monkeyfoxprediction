import React from 'react'
import backgroundImage from '../components/resources/bg-image.jpg';

export default function From() {
  const containerStyle = {
    backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)",
  };
 
  return (
    <div className='min-h-screen py-40' style={containerStyle}>
      <div className="container mx-auto">
        <div className=" flex w-8/12 bg-white mx-auto rounded-xl shadow-lg overflow-hidden">
          <div className="w-1/2 bg-cover"  style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1 className='text-3xl text-white p-4'>welcome</h1>
            <div>
              <p className='text-white p-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem atque praesentium qui necessitatibus nam voluptatibus consequuntur beatae suscipit odio minus porro quas tempore quos nesciunt, sit cumque optio corrupti blanditiis.</p>
            </div>
          </div>
          <div className="w-1/2 p-4">
            <h2 className='text-3xl mb-2'>Register</h2>
            <p className='mb-2'>
              submit your details, see you are affected or not.....
            </p>
            <form action="">
              <div className='grid grid-cols-2 gap-5'>
                <input type="text" placeholder='firstname' className='border border-gray-400 py-1 px-2' />
                <input type="text" placeholder='firstname' className='border border-gray-400 py-1 px-2' />
              </div>
              <div className='mt-5'>
                <input type="email" placeholder='Email' className='border border-gray-400 py-1 px-2 w-full' />
              </div>
              <div className='mt-5'>
                <input type="email" placeholder='Email' className='border border-gray-400 py-1 px-2 w-full' />
              </div>
              <div className='mt-5'>
                <input type="checkbox" placeholder='Email' className='border border-gray-400' />
                <span className='px-2'>
                  i accept the term of use and privacy policy
                </span>
              </div>
              <div className='mt-5'>
               <button className='w-full bg-purple-500 py-2 text-center text-white text-xl'>Register Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}