import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
//import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import Recommendations from './components/Recommendations/Recommendations'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <About></About>
    <Experience></Experience>
    {/*<Services></Services>*/}
    <Projects></Projects>
    <Recommendations></Recommendations>
    <Contact></Contact>
    <Footer></Footer>
    </>
  )
}

export default App