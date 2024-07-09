'use client'
import React, { startTransition, useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import ProjectsSection from './ProjectsSection';

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Node.js</li>
          <li>Express</li>
          <li>PostgreSQL</li>
          <li>Sequelize</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Fullstack Academy of Code</li>
          <li>University of California, Santa Cruz</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      
      content: (
        <ul className="list-disc pl-2">
          <li>AWS Cloud Practitioner</li>
          <li>Google Professional Cloud Developer</li>
        </ul>
      ),
    },
  ];




export const AboutSection = () => {

    const [tab , setTab] = useState('skills')
   
    const handleChangeTab = (id)=>{
       startTransition(()=>{
        setTab(id)
    })
    }


    return (
    <section className='text-white'>
<div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
<Image src="/images/about-image.png" width={500} height={500}/>
<div 
className='mt-4 md:mt-0 text-left flex flex-col h-full'

>
    <h2
    className='text-4xl font-bold text-white mb-4'
    >About Me</h2>
    <p
    className='text-base lg:text-lg '
    >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quo nesciunt veritatis reiciendis temporibus at aperiam laborum soluta neque possimus blanditiis sapiente et inventore minima animi, in vel. Sint, debitis quaerat? Sed ratione recusandae, aspernatur odit pariatur voluptate ut adipisci reprehenderit quos excepturi illo ducimus nam fugit soluta suscipit vel.
    </p>
    <div
    className='flex flex-row justify-start mt-8'
    >
   
   <TabButton
   active={tab==='skills'}
   selectTab={()=>handleChangeTab('skills')}
   >
    skills
   </TabButton>
   <TabButton
   active={tab==='education'}
   selectTab={()=>handleChangeTab('education')}
   >
   education
   </TabButton>
   <TabButton
   active={tab==='certifications'}
   selectTab={()=>handleChangeTab('certifications')}
   >
    certifications
   </TabButton>

    </div>
        <div
        className='mt-8'
        >
{TAB_DATA.find((t)=>(t.id===tab)).content}
        </div>
</div>
</div>

</section>
  )
}

