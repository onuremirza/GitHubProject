import React from 'react'
import WorkItem from './WorkItem'

const data =[
    // {
    //     year: 2022,
    //     title: 'CEO',
    //     duration: '6 Month',
    //     details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis accusamus, eos modi cum deleniti magnam.'
    // },
    {
        year: 2021,
        title: 'Technical Services',
        duration: '6 Month',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis accusamus, eos modi cum deleniti magnam.'
    },
    {
        year: 2021,
        title: 'Technical Services',
        duration: '4 Month',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis accusamus, eos modi cum deleniti magnam.'
    },
    {
        year: 2020,
        title: 'PLC Programmer and Technical Services',
        duration: '6 Month',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis accusamus, eos modi cum deleniti magnam.'
    },
    {
        year: 2020,
        title: 'PLC Programmer',
        duration: '6 Month',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis accusamus, eos modi cum deleniti magnam.'
    },
    {
        year: 2019,
        title: 'Technician',
        duration: '1 Year',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis accusamus, eos modi cum deleniti magnam.'
    },
];

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item, idx)=>(
            <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
        ))}
    </div>
  )
}

export default Work