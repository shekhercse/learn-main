import Head from 'next/head'

import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Section1 from '../components/Section1'
import Section2 from '../components/section2'

import Section3 from '../components/section3'



export default function Home() {
  
  return (
    <div >
      <Head>
        <title>IT Services</title>
        <meta name="description" content="All you need in Digital Services" />
       

      </Head>

      
    
       <Navbar/>
      
       
       
       <Section1/>

       <Section2/>
       <Section3/>
     

     
    </div>
  )
}
