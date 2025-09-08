import { useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router'
 
import LoginPage from "./Pages/LoginPage"
import CreateNewLeadPage from "./Pages/CreateNewLeadPage"
import ViewAllLeadPage from "./Pages/ViewAllLeadPage"
import "./App.css"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/createLead" element={<CreateNewLeadPage />} />
        <Route path="/viewLead" element={<ViewAllLeadPage />} />
      </Routes>
    </>
  )
}

export default App
