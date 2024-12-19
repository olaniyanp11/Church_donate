import React from 'react'

 const Loader = ({ width }) => {
  return (
    <>
      <div className='w-full z-50 h-screen bg-accent fixed  top-0 flex justify-center items-center flex-col'>
        <div className={` border-t-4 border-secondary w-16 h-16  border-solid rounded-full animate-spin `}>
        </div>
        <h3 className='text-white mt-5'>Loading...</h3>
      </div>
    </>
  )
}

export default Loader
