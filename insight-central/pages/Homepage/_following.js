import { Button, Text } from '@chakra-ui/react'
import React,{useState} from 'react'

function Follower() {
    const[toggle,setToggle] = useState(false)
    
  //  this theme is handleing the follow
  const handleToggle = () =>{
      {toggle == false ? setToggle(true):setToggle(false)}
  }
  return (
    <>
    <Button 
              
    style={
      toggle === true
        ? {
            background: "black",
            color: "white",
            
          }
        : {
            background: "white",
            color: "black",
            border:"1px solid black"
            
          }
    }
    
    onClick={handleToggle} borderRadius='full' color="gray" >

      {toggle === false ? <Text>Follow</Text> : <Text>Following</Text>}
    </Button>
    </>
  )
}

export default Follower