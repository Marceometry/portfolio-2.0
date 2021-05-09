import React from 'react'
import Head from 'next/head'

import Landing from '../components/Landing'
import About from '../components/About'
import Technologies from '../components/Technologies'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Marcelino | FrontEnd Dev</title>
      </Head>
  
      <Landing />

      <About />

      <Technologies />

      <Projects />

      <Footer />
    </div>
  )
}
