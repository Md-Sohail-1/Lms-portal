import {useState, useEffect} from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

// how actual login handle func import
// import { handleUserLogin } from "../../services/apis";

import AlertTopup from "./AlertTopup";

const LoginForm = () => {
  const [formInputs, setFormInputs] = useState({
    email:'',
    password:''
  })
  const [passwordToggle, setPasswordToggle] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  const [alertLink, setAlertLink] = useState("")
  const [displayAlertBox, setDisplayAlertBox] = useState(false)
  
  const handleInputChange = (e) => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value
    })
  }
  
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    
    // showing a confirmation box before redirect to another page
    if(formInputs.email === "abc123@gmail.com" && formInputs.password === "abcdabcd"){
      setAlertMessage("Redirect to Home Page");
      setAlertLink("/viewLead")
      setDisplayAlertBox(true)
    } else {
      setAlertMessage("Invalid Credentials");
      setAlertLink("/")
      setDisplayAlertBox(true)
    }
    
    /* for actual server api
    try{
      let response = await handleUserLogin("POST", JSON.stringify({
        email: formInputs.email,
        password: formInputs.password
      }))
      alert(JSON.stringify(response))
    }
    catch(err){
      alert('Invalid Credentials')
    }
    */
  }
  
  const handlePasswordToggler = () => {
    if(passwordToggle === true){
      setPasswordToggle(false)
    } else {
      setPasswordToggle(true)
    }
  }
  
  return (
    <form onSubmit={handleFormSubmit} id="loginForm" className="h-screen bg-slate-100 flex flex-col items-center justify-center">
      <h2 className="font-['Libertinus_Keyboard'] text-2xl font-bold text-center py-4" >LMS Portal</h2>
      <AlertTopup display={displayAlertBox} message={alertMessage} link={alertLink} />
      <fieldset className="py-8 px-4 md:px-10 w-1/2 pb-1 border-2 border-violet-300 rounded-md shadow-sm bg-white">
        <legend className="text-md px-1 ">User Login</legend>
        <div className="grid ">
          <label className="text-[10px]" htmlFor="loginEmail" >Enter Login Email</label>
          <input onChange={handleInputChange} name="email" value={formInputs.email} autofocus="" className="min-w-60 max-w-full border-2 border-violet-300 rounded-md px-2 py-2 text-md mt-1 mb-4 focus:outline-violet-700 shadow-sm" id="loginEmail" type="text" placeholder="Enter your Email..." />
        </div>
        <div className="grid ">
          <label className="text-[10px]" htmlFor="loginPassword" >Enter Login Password</label>
          <div className="relative mb-4 mt-1 min-w-60 max-w-full">
            <input onChange={handleInputChange} name="password" value={formInputs.password} className="w-full border-2 border-violet-300 rounded-md px-2 py-2 text-md focus:outline-violet-700 shadow-sm" id="loginPassword" type={passwordToggle ? 'text' : 'password'} placeholder="Enter your Password..." />
            <i onClick={()=>handlePasswordToggler()} className="p-2 absolute top-1/2 -translate-y-1/2 right-2">{passwordToggle ? <FaRegEye/> : <FaRegEyeSlash />}</i>
          </div>
        </div>
        <button type="submit" className="py-2 px-10 text-white rounded-lg bg-violet-600 hover:bg-violet-600 active:bg-violet-700">Submit</button>
        {/* Login Credentials  */}
        <div className="my-4 text-sm" >
          <b className="text-md" >Login Credentials:-</b><br/>
          "Email Id :- abc123@gmail.com"<br/>
          "Password:- abcdabcd"
        </div>
        </fieldset>
    </form>
  )
}

export default LoginForm