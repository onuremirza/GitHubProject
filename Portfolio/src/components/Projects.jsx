import React from 'react'
import ProjectItem from "./ProjectItem"

const Projects = () => {
  return (
    <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-[#001b5e] text-center font-bold text-4xl'>Projects</h1>
      <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, saepe! Animi non iusto possimus quod!</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img='./src/img/background.jpg' title="Admin Panel"/>
        <ProjectItem img='./src/img/background.jpg' title="E-Commerce"/>
        <ProjectItem img='./src/img/background.jpg' title="Forum"/>
        <ProjectItem img='./src/img/background.jpg' title="Portfolio"/>
      </div>
    </div>
  )
}

export default Projects