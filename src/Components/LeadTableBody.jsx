import React from 'react'

const LeadTableBody = ({Leads}) => {
  return (
        <tbody>
          {
            Leads.map((lead)=>(
              <tr className="even:bg-slate-100" >
                <td className="py-1 px-2 border-2 border-slate-700" >{lead.id}</td>
                <td className="py-1 px-2 border-2 border-slate-700" >{lead.name}</td>
                <td className="py-1 px-2 border-2 border-slate-700" >{lead.email}</td>
                <td className="py-1 px-2 border-2 border-slate-700 text-nowrap" >{lead.phoneNo}</td>
                <td className="py-1 px-2 border-2 border-slate-700" >{lead.message}</td>
                <td className="py-1 px-2 border-2 border-slate-700" >{lead.interest}</td>
                <td className="py-1 px-2 border-2 border-slate-700" >{lead.source}</td>
                <td className="py-1 px-2 border-2 border-slate-700" >{lead.assignedTo}</td>
              </tr>
            ))
          }
        </tbody>
  )
}

export default LeadTableBody