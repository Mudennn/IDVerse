import React, { useRef, useState } from 'react'
import {useDropzone} from 'react-dropzone'


const Form = () => {
    const [image, setImage] = useState([])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        accept: "image/",
        onDrop: (acceptedFiles) => {
            setImage(
                acceptedFiles.map((uploadFile) => Object.assign(uploadFile, {
                    preview: URL.createObjectURL(uploadFile)
                }))
            )
        }
    })

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

        {/* Gender and Email  */}
        <div className='text-left flex mt-3'>
        <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
                <label htmlFor="" className='mb-1 font-semibold text-gray-500'>Sex</label>
                <select name="gender" id="" className='block w-full bg-gray-100 border text-gray-700 py-3 px-4 pr-8 rounded'><option value="Male">Male</option><option value="Female">Female</option></select>
            </div>
            <div className='md:w-full px-3'>
                <label htmlFor="" className='mb-1 font-semibold text-gray-500'>Email</label>
                <input type="text" placeholder='JohnDoe@gmail.com' className='block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 appearance-none ' />
            </div>
        </div>
            
        {/* Upload Image  */}
        <div className='ml-3 mt-3 text-left'>  
        <label  className='mb-1 font-semibold text-gray-500'>Upload Your IC</label> 
         <div {...getRootProps()} className='bg-gray-200  p-12 cursor-pointer w-1/2 text-center'>
            <input {...getInputProps()} />
             <p>Drag 'n' drop some files here, or click to select files</p>
         </div>
         <div>
             {image.map((uploadFile, index) => {
                 return (
                    <>
                    <div key={index} className='mt-5 text-left'>
                         <p className='text-gray-500'>Preview</p>
                         <img src={uploadFile.preview} alt="" className='w-1/2' />
                         <button onClick={() => setImage([])}>Clear</button>
                     </div>
                     
                     </>
                 )
             })}
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