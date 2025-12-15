import React from 'react'
import Navbar from './composants/Navbar'
import Accueil from './Accueil'
import Apropos from './Apropos'
import Contact from './composants/Contact'
import Footer from './composants/Footer'
import Inu from './Inu'

export default function App() {
  return (
    <div>
      <Navbar />
      <Accueil />
      <Apropos/>
      <Contact/>
      <Footer/>
      {/* <Inu/> */}
    </div>
  )
}
