import { useState } from 'react'

const AlertTopup = ({message, link, display}) => {
  const [cancel, setCancel] = useState(false)
  
  return (
    <div className={`${display ? "flex" : "hidden"} ${cancel && 'hidden'} h-screen w-screen fixed z-10 flex items-center justify-center`} >
      <div className="flex flex-col gap-2 bg-slate-200 items-center justify-center gap-6 min-h-48 md:w-1/3 w-2/3 rounded-md border-2 border-violet-500" >
        <p className="px-4 text-center text-md">{message}</p>
        <div className="flex gap-2" >
          <button onClick={()=>setCancel(true)} className="bg-white hover:bg-gray-100 active:bg-gray-300 px-6 py-1 rounded-md text-black shadow-md font-bold" >Cancel</button>
          <a href={link} className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 px-6 py-1 rounded-md text-white shadow-md font-bold" >Ok</a>
        </div>
      </div>
    </div>
  )
}

export default AlertTopup