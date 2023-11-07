import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Drawer from './Components/Drawer'
import { Box, MenuList } from '@chakra-ui/react'
import Discover from './Components/Discover'
import Gallery from './Components/Gallery'
import Customers from './Components/Customers'
import Packages from './Components/Packages'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  const[show,setShow]=useState(false);
  
  const Toggle=()=>{
    setShow(!show);
  }
  return (
    <div>
      <Navbar Btn={Toggle}/>
      <Hero/>
     {show?<Box height={"100vh"}
        width={"100vw"}
        bg={"white"}
        position={"absolute"}
        top={-0.5}
        zIndex={1}><Drawer Btn={Toggle} /></Box>:""}
        <Box mt={{base:6,xl:16}} ml={{base:4,xl:16}}><Discover/></Box>
        <Box ml={{base:9,xl:'25rem'}}>
          <Gallery/>
        </Box>
        <Box mt={{xl:'6rem',base:'2rem'}}>
          <Customers/>
        </Box>
        <Box mt={{xl:'10rem',base:'4rem'}}>
          <Packages/>
        </Box>
        <Box mt={{xl:'10rem',base:'4rem'}}>
          <Contact/>
        </Box>
        <Box bgColor={'black'} color={'white'} mt={{xl:'10rem',base:'4rem'}}>
          <Footer/>
        </Box>
    </div>
  )
}

export default App