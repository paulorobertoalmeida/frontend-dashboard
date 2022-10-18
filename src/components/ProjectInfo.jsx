import React from 'react'
import BuildingData from './BuildingData'
import CadastralSearch from './CadastralSearch'
import ProjectCards from './ProjectCards'
import ProjectHeader from './ProjectHeader'
import ProjectSocials from './ProfileSocials'
import ProfileTable from './ProfileTable'
export default function ProjectInfo() {
    return (
        <div>
            <ProjectHeader />
            <ProjectCards />
            <CadastralSearch />
            <ProjectSocials />
            <ProfileTable />
        </div>
    )
}
