import React from 'react'

const LeadTableHeader = () => {
  return (
        <thead className="" >
          <tr className="border-2 border-slate-600 bg-violet-200 text-nowrap" >
            <th className="py-2 px-4 border-2 border-slate-700" >Id</th>
            <th className="py-2 px-4 border-2 border-slate-700" >Name</th>
            <th className="py-2 px-4 border-2 border-slate-700" >Email</th>
            <th className="py-2 px-4 border-2 border-slate-700" >PhoneNo</th>
            <th className="py-2 px-4 border-2 border-slate-700" >Message</th>
            <th className="py-2 px-4 border-2 border-slate-700" >Interest</th>
            <th className="py-2 px-4 border-2 border-slate-700" >Source</th>
            <th className="py-2 px-4 border-2 border-slate-700" >Assigned To</th>
          </tr>
        </thead>
  )
}

export default LeadTableHeader