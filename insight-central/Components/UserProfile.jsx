import React, { useEffect, useState } from "react";
import Styles from "./profile.module.css";
import {
  Text,
  Box,
  Avatar,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  FormControl,
  FormLabel
} from '@chakra-ui/react'
import axios from "axios"
import {EditIcon } from '@chakra-ui/icons'

const initState={
  img:"",
  name:"",
  bio:"",
}
 function UserProfile() {
   let data;
  if(typeof window !=="undefined"){
    data=JSON.parse(sessionStorage.getItem("data"))
  }
  const [userData,setUserData]=useState([])
  const { isOpen, onOpen, onClose } = useDisclosure()

  
  useEffect(()=>{
      getProfile()
    },[])

  const getProfile=()=>{
    axios.get("https://zany-red-toad-cape.cyclic.app/profile",{
      headers:{
        "Content-Type":"application/json",
        "Authorization":`Berer ${data?.token}`
      }
    })
    .then((res)=>{
      setUserData(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  const handleBio=()=>{
    let bio=prompt("Enter Bio")
    console.log(bio)
    axios.patch(`https://zany-red-toad-cape.cyclic.app/user`,{
      headers:{
        "Content-Type":"application/json",
        "authorization":`Berer ${data?.token}`,
        body:JSON.stringify({bio:bio})
      }
    })
    .then((res)=>{
      console.log(res.data)
      // getProfile()
    }).catch((err)=>{
      console.log(err)
    })
  }
  console.log(data);
  const [bio, setBio] = useState("Bio");
  const [blogdata, setData] = useState([]);
  useEffect(() => {
    fetch(`https://zany-red-toad-cape.cyclic.app/blog`)
      .then((res) => res.json())
      .then((r) => {
        setData(r.data);
      });
  }, []);

  return (
    <>
      <div className={Styles.mainDiv}>
        <div className={Styles.leftDiv}>
          <Text mt="60px" fontSize="36px" fontWeight="bold">{userData.name}</Text>
          <Text mt="30px">Your Posts</Text>
          <div style={{ marginTop: "30px" }}>
            {blogdata
              .filter((e) => e.author == data.data._id)
              .map((e) => (
                <div
                  style={{
                    display: "flex",
                    marginTop: "30px",
                    padding: "10px",
                    gap: "20px",
                  }}
                >
                  <Image w={"30%"} height="150px" src={e.img} />
                  <div>
                    <Text mt={10} fontSize={"xl"} fontWeight="bold">
                      {e.title}
                    </Text>
                      {e.date}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className={Styles.rightDiv}>
          <Box borderRadius="50px" w="280px" p="5px" textAlign="center" bg="black" color="white" >Get unlimited access</Box>
          <Avatar mt="20px" size="xl" src={userData.img} cursor="pointer"/>
          <Text mt="10px" fontWeight="bold">{userData.name}</Text>
          <Text mt="15px">{userData.bio}</Text>

          <Text
            cursor="pointer"
            mt="15px"
            bg="white"
            color="green"
            onClick={onOpen}
          >
            Edit Profile
          </Text>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Profile information</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormControl>
                  <FormLabel>Photo</FormLabel>
                  <Avatar mt="5px" size="lg" src={userData.img} cursor="pointer"/>
                  <Text borderBottom="1px solid grey" noOfLines={1} overflow="hidden" mt="10px">{userData.img}</Text>
                </FormControl>
                <FormControl mt="20px" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Text borderBottom="1px solid grey">{userData.name}</Text>
                  <Text mt="5px" fontSize="14px">Appears on your Profile page, as your byline, and in your responses.</Text>
                </FormControl>
                <FormControl mt="20px">
                  <FormLabel>Bio</FormLabel>
                    <Text borderBottom="1px solid grey" >{userData.bio}</Text>
                    <EditIcon onClick={handleBio}/>
                  <Text mt="5px" fontSize="14px">Appears on your Profile and next to your stories.</Text>
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  border="1px solid green"
                  bg="white"
                  borderRadius="50px"
                  mr={3}
                  onClick={onClose}
                >
                  Cancel
                </Button>
                {/* <Button onClick={handleSubmit} borderRadius="50px" bg="green" _hover={{color:"green"}} variant='ghost'>Save</Button> */}
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default UserProfile;