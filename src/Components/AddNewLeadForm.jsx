import {useState, useEffect} from 'react'
import { handleAddNewLead } from '../../services/apis'
import AlertTopup from './AlertTopup'

const AddNewLeadForm = () => {
  
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phoneNo: '',
    message: '',
    interest: '',
    status: '',
    assignedTo: '',
    source: ''
  })
  
  const handleInputChange = (e) => {
    //alert(e.target.value)
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }
  
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    
    
    
    /* For Actual Backend API 
    try{
      let response = await handleAddNewLead('POST', JSON.stringify(inputs))
      //alert(response.data.mes)
    }
    catch(err){
      console.log(err)
    }
    */
  }
  
  return (
    <form onSubmit={handleFormSubmit} id="createLeadForm" className="h-auto w-auto pt-20" >
      <fieldset className="mx-auto px-4 w-4/5 flex flex-col gap-4 py-4 md:grid md:px-6 md:grid-cols-2 md:gap-x-6 md:gap-y-4 border-2 border-violet-300 rounded-md">
        <legend className="px-1" >Add New Lead</legend>
        <div className="mx-auto flex flex-col w-full md:w-[calc(100%-24px)]">
          <label htmlFor="name" className="text-sm py-1 md:py-2" >Enter Name:</label>
          <input id="name" onChange={handleInputChange} value={inputs.name} name="name" type="text" placeholder="Enter Name Here.."  className="focus:outline-1 border-2 border-violet-300 focus:outline-violet-700 w-full shadow-sm py-2 px-2 rounded-md" />
        </div>
        <div className="mx-auto flex flex-col w-full md:w-[calc(100%-24px)]">
          <label htmlFor="email" className="text-sm py-1 md:py-2" >Enter Email:</label>
          <input id="email" onChange={handleInputChange} value={inputs.email} name="email"  type="email" placeholder="Enter Email Here.."  className="focus:outline-1 border-2 border-violet-300 focus:outline-violet-700 w-full shadow-sm py-2 px-2 rounded-md" />
        </div>
        <div className="mx-auto flex flex-col w-full md:w-[calc(100%-24px)]">
          <label htmlFor="phoneNo" className="text-sm py-1 md:py-2" >Enter Phone No.:</label>
          <input id="phoneNo" onChange={handleInputChange} value={inputs.phoneNo} name="phoneNo"  type="number" placeholder="Enter Phone No. Here.."  className="focus:outline-1 border-2 border-violet-300 focus:outline-violet-700 w-full shadow-sm py-2 px-2 rounded-md" />
        </div>
        <div className="mx-auto flex flex-col w-full md:w-[calc(100%-24px)]">
          <label htmlFor="message" className="text-sm py-1 md:py-2" >Message:</label>
          <textarea id="message" onChange={handleInputChange} value={inputs.message} name="message" placeholder="Enter Message Here..."  className="h-20 focus:outline-1 border-2 border-violet-300 focus:outline-violet-700 w-full shadow-sm py-1 px-2 rounded-md"></textarea>
        </div>
        <div className="mx-auto flex flex-col w-full md:w-[calc(100%-24px)]">
          <label htmlFor="interest" className="text-sm py-1 md:py-2" >Interest:</label>
          <select id="interest" onChange={handleInputChange} name="interest" className="focus:outline-1 border-2 border-violet-300 focus:outline-violet-700 w-full shadow-sm py-2 px-1 rounded-md">
            <option value="web_dev" >Web Development</option>
            <option value="mobile_app_dev" >Mobile App Development</option>
            <option value="backend_dev" >Backend Development</option>
            <option value="other" >Other</option>
          </select>
        </div>
        <div className="mx-auto flex flex-col w-full md:w-[calc(100%-24px)]">
          <label htmlFor="source" className="text-sm py-1 md:py-2" >Source:</label>
          <select id="source" onChange={handleInputChange} name="source" className="focus:outline-1 border-2 border-violet-300 focus:outline-violet-700 w-full shadow-sm py-2 px-1 rounded-md">
            <option value="linkedIn" >LinkedIn</option>
            <option value="googleAds" >Google Ads</option>
            <option value="referral" >Referral</option>
            <option value="other" >Other</option>
          </select>
        </div>
        <div className="mx-auto flex flex-col w-full md:w-[calc(100%-24px)]">
          <label htmlFor="status" className="text-sm py-1 md:py-2" >Status:</label>
          <select id="status" onChange={handleInputChange} name="status"  className="focus:outline-1 border-2 border-violet-300 focus:outline-violet-700 w-full shadow-sm py-2 px-1 rounded-md">
            <option value="new" >New</option>
            <option value="contacted" >Contacted</option>
            <option value="converted" >Converted</option>
          </select>
        </div>
        <div className="mx-auto flex flex-col w-full md:w-[calc(100%-24px)]">
          <label htmlFor="assignedTo" className="text-sm py-1 md:py-2" >Assigned To:</label>
          <input id="assignedTo" onChange={handleInputChange} value={inputs.assignedTo} name="assignedTo" type="text" placeholder="Assigned To..."  className="focus:outline-1 border-2 border-violet-300 focus:outline-violet-700 w-full shadow-sm py-2 px-2 rounded-md" />
        </div>
        <button type="submit" className="my-4 w-full mx-auto md:w-[calc(100%-24px)] py-2 bg-violet-600 text-white rounded-md" >Create Lead</button>
      </fieldset>
    </form>
  )
}

export default AddNewLeadForm