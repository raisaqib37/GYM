import React from 'react'
import { Box, Button, HStack, Icon, Image, Text, VStack } from '@chakra-ui/react';
import {FaRegUser} from 'react-icons/Fa';
import {TfiMenu} from 'react-icons/tfi';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'



const Navbar = ({Btn}) => {

  const NavLinks = [
    {
      text: "About us",
      id:0,
    },
    {
      text: "Services",
      id:1,
    },
    {
      text: "Contact",
      id:2,
    },
  ];
  return (
    <div>
<HStack justifyContent={"space-between"} height={"5rem"}  boxShadow={'1px 1px 5px'}>
<HStack mt={2}>
  <Image cursor={"pointer"} src="./logo.png" height={{xl:"130px",base:"100px"}}/>
  <HStack className='icons' display={{base:"block",xl:"none"}}>
  <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton ml={{lg:'20rem'}} _hover={{bg:"none"}} bg={"none"} isActive={isOpen} as={Button}>
        <Icon fontSize={"20px"} as={FaRegUser} />
      </MenuButton>
      <MenuList>
        <MenuItem>Login</MenuItem>
        <MenuItem>Sign Up</MenuItem>
      </MenuList>
    </>
  )}
</Menu>
<Icon  fontSize={"20px"} as={TfiMenu} onClick={Btn}/>
    </HStack>
    <HStack>
{NavLinks.map((map)=>{
return(
  <Box display={{base:"none",xl:"block"}} key={map.id}>
    <Text cursor={"pointer"} fontWeight={400} color={"gray.500"} _hover={{
      color:"black",
      fontWeight:500,
    }}>{map.text}</Text>
  </Box>
)
})}
</HStack>
</HStack>

<HStack display={{
  base:"none",
  xl:"block",
}} mr={{
  base:0,lg:8
}}>
  
  <Button bg={"none"} border={"2px solid black"} borderRadius={0} _hover={{
    bg:"none",
  }}>Login</Button>
  <Button ml={2} bg={"black"} color={"white"} border={"2px solid black"} borderRadius={0} transition={"0.3s ease-in"} _hover={{
    bg:"none",
    color:"black",
    border:"2px solid black",
    borderRadius:0,
  }}>Sign Up</Button>
</HStack>
</HStack>
    </div>
  )
}
export default Navbar