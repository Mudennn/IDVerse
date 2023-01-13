import React from 'react'

const Form = () => {
  return (
    <section className='max-w-screen-lg mx-auto py-8'>
        <div className='text-left ml-3'>
            <h1 className='text-2xl font-semibold'>Digital Identity</h1>
            <h3 className='mt-2 text-gray-500'>Lengkapkan semua maklumat peribadi anda</h3>
        </div>
        {/* First and Last name  */}
        <div className='mt-4 flex gap-3 gap-y-5 text-left'>
            <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
                <label htmlFor="" className='mb-1 font-semibold text-gray-500'>First Name</label>
                <input type="text" placeholder='John' className='block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 appearance-none ' />
            </div>
            <div className='md:w-1/2 px-3'>
                <label htmlFor="" className='mb-1 font-semibold text-gray-500'>Last Name</label>
                <input type="text" placeholder='Doe' className='block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 appearance-none ' />
            </div>
        </div>
        {/* Address  */}
        <div className='text-left mx-3'>
            <label htmlFor="" className='mb-1 font-semibold text-gray-500'>Address</label>
            <input type="text" placeholder='Address' className='block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 appearance-none ' />
        </div>
        {/* City, State, Zip  */}
        <div className='text-left flex mt-3'>
            <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
                <label htmlFor="" className='mb-1 font-semibold text-gray-500'>City</label>
                <input type="text" placeholder='Kajang' className='block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 appearance-none ' />
            </div>
            <div className='md:w-1/2 px-3'>
                <label htmlFor="" className='mb-1 font-semibold text-gray-500'>State</label>
                <input type="text" placeholder='Selangor' className='block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 appearance-none ' />
            </div>
            <div className='md:w-1/2 px-3'>
                <label htmlFor="" className='mb-1 font-semibold text-gray-500'>Zip</label>
                <input type="text" placeholder='43000' className='block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 appearance-none ' />
            </div>
        </div>
        {/* Gender  */}
        <div className='text-left flex mt-3'>
            <div className='md:w-1/3 px-3 mb-6 md:mb-0'>
                <label htmlFor="" className='mb-1 font-semibold text-gray-500'>Sex</label>
                <select name="gender" id="" className='block w-full bg-gray-100 border text-gray-700 py-3 px-4 pr-8 rounded'><option value="Male">Male</option><option value="Female">Female</option></select>
            </div>
        </div>
        {/* Email */}
        <div className='text-left mt-3'>
            <div className='md:w-1/2 px-3'>
                <label htmlFor="" className='mb-1 font-semibold text-gray-500'>Email</label>
                <input type="text" placeholder='JohnDoe@gmail.com' className='block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 appearance-none ' />
            </div>
        </div>
        {/* Save Button  */}
        <div className='mt-5 ml-3'>
            <button className='my-2 flex w-32 items-center justify-center rounded-lg bg-blue-700 py-2 text-center font-bold text-white outline-none transition focus:ring'>Save</button>

        </div>


    </section>
  )
}

export default Form