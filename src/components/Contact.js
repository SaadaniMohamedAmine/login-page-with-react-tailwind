import React from 'react'

const Contact = () => {
  return (
    // Full page 
    <div className='min-h-screen bg-zinc-200 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center'>
      <div className=' max-w-md w-full space-y-8 bg-white p-5'>
        <div>
          <img src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" className='mx-auto h-12'/>
        </div>
        <h1 className='text-3xl text-center font-bold mt-6'>Sign in to your account</h1>
        <p className='text-center  mt-2  text-sm text-gray-600'>
          Or <a href="" className='text-indigo-500 font-medium hover:text-indigo-400'>start your 14-day free trial</a>
        </p>
        <form action="" className=' mt-8 space-y-6 py-5'>
          <div>
            <label htmlFor="" className='block font-semibold'>Email</label>
            <input type="email" className='p-2 border border-gray-400 w-full rounded mt-3 hover:border-indigo-500 ' />
          </div>
          <div>
            <label htmlFor="" className='block font-semibold'>Password</label>
            <input type="password" className='p-2 border border-gray-400 w-full rounded mt-3 hover:border-indigo-500' />
          </div>
          <div className='mt-6 text-center'>
            <button className='rounded bg-indigo-500 text-white px-5 py-2 w-full hover:bg-indigo-400'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact