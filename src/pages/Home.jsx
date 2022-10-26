import React from 'react'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import ProjectHeader from '../components/ProjectHeader';
import CadastralSearch from '../components/CadastralSearch';
import ProjectTable from '../components/ProjectTable';
import CadastralData from '../components/CadastralData';



function Home() {
  
  return (
    <div className="mt-24">
    <ProjectHeader />
    <CadastralSearch />
    <CadastralData />
    <ProjectTable />

    
     
    </div >
  )
}

export default Home
