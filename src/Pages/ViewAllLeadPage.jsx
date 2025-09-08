import {useState, useEffect} from 'react'
import { IoSearch } from 'react-icons/io5'

// Import Components 
import Header from '../Components/Header'
import LeadTableHeader from '../Components/LeadTableHeader'
import LeadTableBody from '../Components/LeadTableBody'

// Import Leads from a JSON file
import Leads from '../../Leads.json'

const ViewAllLeadPage = () => {
  const [search, setSearch] = useState('')
  const [filteredLeads, setFilteredLeads] = useState(Leads)
  
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    if(e.target.value !== ""){
      let searchText = e.target.value;
      let filterLeads = Leads.filter((lead)=>
        lead.name.toLowerCase().includes(searchText.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchText.toLowerCase()) ||
        lead.assignedTo.toLowerCase().includes(searchText.toLowerCase()) ||
        lead.source.toLowerCase().includes(searchText.toLowerCase()) ||
        lead.interest.toLowerCase().includes(searchText.toLowerCase())
      )
      setFilteredLeads(filterLeads)
    } else {
      setFilteredLeads(Leads)
    }
  }
  
  return (
    <div className="overflow-x-scroll" >
      <Header />
      <div className="mt-20 mb-4 w-[100wh] h-20 mx-auto flex gap-2 flex-col md:flex-row items-center md:px-4" >
        <p className="text-md md:text-2xl ml-2 font-bold " >Lead Managment System</p>
        <div className="mx-auto w-4/5 md:w-auto md:mr-2 grid place-content-center relative " >
          <input onChange={handleSearchChange} value={search} type="text" placeholder="Search Here..." className="w-full h-12 rounded-full px-4 border-2 border-violet-200 shadow-md focus:outline-violet-500" />
          <IoSearch className="text-xl text-violet-600 absolute top-1/2 -translate-y-1/2 right-3" />
        </div>
      </div>
      
      <div className="overflow-x-scroll px-3" >
        <h3 className="py-2 px-2" >Results: {filteredLeads.length}</h3>
        <table className="border-2 border-slate-600 overflow-x-scroll" >
          <LeadTableHeader />
          <LeadTableBody Leads={filteredLeads} />
        </table>
      </div>
    </div>
  )
}

export default ViewAllLeadPage