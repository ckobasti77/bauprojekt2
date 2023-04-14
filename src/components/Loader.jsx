import React from 'react'

const Loader = () => {
  return (
    <div className='w-screen h-screen fixed loader-bg flex justify-center items-center z-[999]'>
        <div className='loader w-[64px] h-[64px] rounded-full bg-[#fff]'></div>
    </div>
  )
}

export default Loader