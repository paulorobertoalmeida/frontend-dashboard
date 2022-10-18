import React from 'react'
import BuildingData from './BuildingData'
import CadastralSearch from './CadastralSearch'
import ProjectCards from './ProjectCards'
import ProjectHeader from './ProjectHeader'

export default function ProjectInfo() {
    return (
        <div>
            <ProjectHeader />
           <ProjectCards />
           <CadastralSearch />
           <BuildingData />
        </div>
    )
}
