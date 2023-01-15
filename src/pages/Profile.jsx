import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import IDJSON from '../Id.json'
import axios from 'axios'
import Navbar from '../components/Navbar'


const Profile = (props) => {
    const [data, updateData]= useState({})
    const [dataFetched, updateDataFetched] = useState(false)
    // const[message, updateMessage] = useState("")
    const [currAddress, updateCurrAddress] = useState("0x")

    async function getIDData(apa) { //apa data?
        const ethers = require("ethers")
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const addr = await signer.getAddress()

        let contract = new ethers.Contract(IDJSON.address, IDJSON.abi, signer)

        const tokenURI = await contract.tokenURI(apa) //tengok balik amik dari contract
        const listedToken = await contract.getListedTokenForId(apa) 
        let meta = await axios.get(tokenURI)
        meta = meta.data
        console.log(listedToken)

        let item = {
            tokenId: tokenId,
            firstName: meta.firstName,
            lastName: meta.lastName,
            location: meta.location, 
            city: meta.city, 
            state: meta.state, 
            zip: meta.zip, 
            sex: meta.sex, 
            age: meta.age, 
            tel: meta.tel, 
            email: meta.email,
            image: meta.image
        }

        console.log(item)
        updateData(item)
        updateDataFetched(true)
        console.log("address", addr)
        updateCurrAddress(addr)
    }

    const params = useParams()
    const tokenId = params.tokenId
    if(!dataFetched)
    getIDData(tokenId)

    return (
    <div>
        <Navbar />
            <div className="min-w-screen min-h-screen flex items-center p-5 lg:p-10 overflow-hidden relative">
              <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                <div className="md:flex items-center -mx-10">
                  <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                    <div className="relative">
                      <img src={data.image} className="w-full relative z-10" alt="" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <div className="mb-10">
                      <h3 className="text-sm">Id: 101</h3>
                      <h1 className="font-bold uppercase text-2xl mb-5">
                        Name: Syed Nizar
                      </h1>
                      <p className="text-sm">
                        Address: Lakefront Homes Cyberjaya, Selangor, 63000
                      </p>
                      <p className="text-sm">
                        Sex: Male
                      </p>
                      <p className="text-sm">
                        Age: 32
                      </p>
                      <p className="text-sm">
                        Tel: 019 2345678
                      </p>
                      <p className="text-sm">
                        Email: syednizar@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
    </div>
  )
}

export default Profile