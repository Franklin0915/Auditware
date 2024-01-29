import React from 'react'
import Wrapper from '../Components/Wrapper'
import ProjectListings from './Includes/ProjectListings'

function Projects() {
  return (
    <Wrapper page={'Profiles'} content={<>
        <ProjectListings/>
    </>}/>
  )
}

export default Projects