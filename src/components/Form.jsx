import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import {uploadFileToIPFS, uploadJSONToIPFS} from "../pinata"
import Id from '../Id.json'
// import {useLocation} from "react-router"


const Form = () => {
  const [image, setImage] = useState([]);
  // console.log("🚀 ~ file: Form.jsx:6 ~ Form ~ image", image)

  // Upload file to Pinata 
  const [formParams, updateFormParams] = useState({ firstName: '', lastName: '', location:'', city:'', state:'', zip:'', sex:'', age:'', tel:'', email: '' })
  const [fileURL, setFileURL] = useState(null)
  const ethers = require('ethers')
  const [message, updateMessage] = useState('')
  // const location = useLocation();

  // To preview image
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/",
    onDrop: (acceptedFiles) => {
      setImage(
        acceptedFiles.map((uploadFile) =>
          Object.assign(uploadFile, {
            preview: URL.createObjectURL(uploadFile),
          })
        )
      );
    },
  });

  // For upload image to pinata 
  async function OnChangeFile(e) {
    var file = e.target.files[0]

    try {
      const response = await uploadFileToIPFS(file)
      if(response.sucess === true) {
        console.log("Upload image to Pinata:" ,response.pinataURL)
        setFileURL(response.pinataURL)
      }
    } catch(e){
      console.log("Error during file upload", e)
    }
  }

  async function uploadMetaDataToIPFS() {
    const {firstName, lastName, location, city, state, zip, sex, age, tel, email} = formParams

    if(!firstName || !lastName || !location || !city || !state || !zip || !sex || !age || !tel || !email || !fileURL) 
    return

    const idJSON ={ firstName, lastName, location, city, state, zip, sex, age, tel, email, image: fileURL }

    try {
      const response = await uploadJSONToIPFS(idJSON)
      if(response.sucess === true){
        console.log("Uploaded JSON to Pinata: ", response)
        return response.pinataURL
      }
    } catch(e) {
      console.log("error uploading JSON metadata:", e)
    }

    } 

    async function listID(e) {
      e.preventDefault()

      try {
        const metadataURL = await uploadMetaDataToIPFS()
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()

        updateMessage("Please wait ... uploading (upto 5mins")

        let contract = new ethers.Contract(Id.address, Id.abi, signer)
        
        let transaction = await contract.createToken(metadataURL)
        await transaction.wait()

        alert("Succesfully upload your Digital ID")
        updateMessage("")
        updateFormParams({firstName: '', lastName: '', location:'', city:'', state:'', zip:'', sex:'', age:'', tel:'', email: ''})
        window.location.replace("/")

      } catch(e) {
        alert("Upload error: ",)
      }
    }
  

  return (
    <section className="max-w-screen-lg mx-auto py-8">
      <div className="text-left ml-3">
        <h1 className="text-2xl font-semibold">Digital Identity</h1>
        <h3 className="mt-2 text-gray-500">
          Lengkapkan semua maklumat peribadi anda
        </h3>
      </div>
      {/* First and Last name  */}
      <div className="mt-4 flex gap-3 gap-y-5 text-left">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label htmlFor="firstName" className="mb-1 font-semibold text-gray-500">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="John"
            className="block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 appearance-none "
            value={formParams.firstName}
            onChange={e => updateFormParams({...formParams, firstName: e.target.value})}
          />
        </div>
        <div className="md:w-1/2 px-3">
          <label htmlFor="lastName" className="mb-1 font-semibold text-gray-500">
            Last Name
          </label>
          <input
          id="lastName"
            type="text"
            placeholder="Doe"
            className="block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 appearance-none "
            value={formParams.lastName}
            onChange={e => updateFormParams({...formParams, lastName: e.target.value})}
          />
        </div>
      </div>
      {/* Address  */}
      <div className="text-left mx-3">
        <label htmlFor="address" className="mb-1 font-semibold text-gray-500">
          Address
        </label>
        <input
          id="location"
          type="text"
          placeholder="Address"
          className="block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 appearance-none "
          value={formParams.address}
          onChange={e => updateFormParams({...formParams, location: e.target.value})}
        />
      </div>
      {/* City, State, Zip  */}
      <div className="text-left flex mt-3">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label htmlFor="city" className="mb-1 font-semibold text-gray-500">
            City
          </label>
          <input
            id="city"
            type="text"
            placeholder="Kajang"
            className="block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 appearance-none "
            value={formParams.city}
            onChange={e => updateFormParams({...formParams, city: e.target.value})}
          />
        </div>
        <div className="md:w-1/2 px-3">
          <label htmlFor="state" className="mb-1 font-semibold text-gray-500">
            State
          </label>
          <input
            id="state"
            type="text"
            placeholder="Selangor"
            className="block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 appearance-none "
            value={formParams.state}
            onChange={e => updateFormParams({...formParams, state: e.target.value})}
          />
        </div>
        <div className="md:w-1/2 px-3">
          <label htmlFor="zip" className="mb-1 font-semibold text-gray-500">
            Zip
          </label>
          <input
            id="zip"
            type="text"
            placeholder="43000"
            className="block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 appearance-none "
             value={formParams.zip}
            onChange={e => updateFormParams({...formParams, zip: e.target.value})}
          />
        </div>
      </div>

      {/* Gender, Age and Tel  */}
      <div className="text-left flex mt-3">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label htmlFor="sex" className="mb-1 font-semibold text-gray-500">
            Sex
          </label>
          <select
            name="gender"
            id="sex"
            className="block w-full bg-gray-100 border text-gray-700 py-3 px-4 pr-8 rounded"
            value={formParams.sex}
            onChange={e => updateFormParams({...formParams, sex: e.target.value})}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="md:w-1/2 px-3">
          <label htmlFor="age" className="mb-1 font-semibold text-gray-500">
            Age
          </label>
          <input
            id="age"
            type="text"
            placeholder="18"
            className="block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 appearance-none "
            value={formParams.age}
            onChange={e => updateFormParams({...formParams, age: e.target.value})}
          />
        </div>
        <div className="md:w-1/2 px-3">
          <label htmlFor="tel" className="mb-1 font-semibold text-gray-500">
            Tel
          </label>
          <input
            id="tel"
            type="text"
            placeholder="xxx-xxxxxxx"
            className="block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 appearance-none "
             value={formParams.tel}
            onChange={e => updateFormParams({...formParams, tel: e.target.value})}
          />
        </div>
      </div>
      {/* Email  */}
      <div className="text-left flex mt-3">
        <div className="md:w-full px-3">
          <label htmlFor="email" className="mb-1 font-semibold text-gray-500">
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="JohnDoe@gmail.com"
            className="block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 appearance-none "
            value={formParams.email}
            onChange={e => updateFormParams({...formParams, email: e.target.value})}
          />
        </div>
      </div>

      {/* Upload Image  */}
      <div className="ml-3 mt-3 text-left">
        <label className="mb-1 font-semibold text-gray-500">
          Upload Your IC
        </label>
        <div
          {...getRootProps()}
          className="bg-gray-200  p-12 cursor-pointer w-1/2 text-center"
        >
          <input {...getInputProps()} onChange={OnChangeFile} type={"file"} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <div>
          {image.map((uploadFile, index) => {
            return (
              <>
                <div key={index} className="mt-5 text-left">
                  <p className="text-gray-500">Preview</p>
                  <img src={uploadFile.preview} alt={uploadFile.path} className="w-1/3" />
                  <p className="text-gray-500">{uploadFile.path}</p>
                  <button onClick={() => setImage([])} className="my-2 flex w-32 items-center justify-center rounded-lg bg-red-500 py-2 text-center font-bold text-white outline-none transition focus:ring">Clear</button>
                </div>
              </>
            );
          })}
        </div>
      </div>

      {/* Save Button  */}
      <div className="mt-5 ml-3">
        <p className="text-black">{message}</p>
        <button className="my-2 flex w-32 items-center justify-center rounded-lg bg-blue-700 py-2 text-center font-bold text-white outline-none transition focus:ring" onClick={listID}>
          Save
        </button>
      </div>
    </section>
  );
};

export default Form;
