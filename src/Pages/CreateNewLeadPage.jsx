import React from 'react'

import AddNewLeadForm from '../Components/AddNewLeadForm'
import Header from '../Components/Header'

const CreateNewLeadPage = () => {
  return (
    <div className="pb-8" >
      <Header/>
      <h2 className="text-2xl font-bold text-center text-slate-600 relative py-5 top-20 " >Create New Lead</h2>
      <AddNewLeadForm />
    </div>
  )
}

export default CreateNewLeadPage