import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    Box,
    Text,

   
  } from '@chakra-ui/react'
  import { auth } from '../Firebase';
  import { useNavigate } from 'react-router-dom';
  import {RiAccountCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom'
export const Account = ({user}) => {
const navigate=useNavigate()
  const logout=()=>{
    auth.signOut()
    navigate("/login")
    console.log("logo")
  }
  return (
    <div>
    <Menu  >
    <MenuButton style={{marginLeft:"5px",border:"0px",background:"white"}}
  
    > 
    <RiAccountCircleLine size={"27px"} style={{marginLeft:"5px",marginTop:"5px",background:"white",cursor:"pointer"}}/>
    </MenuButton>
    <MenuList>
    {user ?  
    <Box>

   
    <Box>
        {user?.email}
      </Box>
      <button onClick={()=>logout()} style={{background:"black",color:"white",cursor:"pointer"}}>Logout</button> 
      </Box>
      :
    <Box>


    <Link to='/login'>
      <Box cursor='pointer' border={"0px"} >
          <Text fontSize='2xl'>Login</Text>
      </Box>
      </Link>
      <Link to='/signup'>
      <Box cursor='pointer' >
          <Text fontSize='2xl'>Register</Text>
      </Box>
      </Link>
      </Box>
      }
     
    </MenuList>
  </Menu>
      </div>
  )
}
