import React, { useState } from 'react'
import Styles from "./profile.module.css"
import { Text,
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
  Input,
  FormControl,
  FormLabel
 } from '@chakra-ui/react'

function UserProfile() {
  let data=JSON.parse(sessionStorage.getItem("data"))
  const [bio,setBio]=useState("Bio")
  const { isOpen, onOpen, onClose } = useDisclosure()
  



  return (
    <>
      <div className={Styles.mainDiv}>
        <div className={Styles.leftDiv}>
          <Text mt="60px" fontSize="36px" fontWeight="bold">{data.data.name}</Text>
          <Text mt="30px">Your Posts</Text>
        </div>

        <div className={Styles.rightDiv}>
          <Box borderRadius="50px" w="280px" p="5px" textAlign="center" bg="black" color="white" >Get unlimited access</Box>
          <Avatar mt="20px" size="xl" src={data.data.img} cursor="pointer"/>
          <Text mt="10px" fontWeight="bold">{data.data.name}</Text>
          <Text mt="15px">{bio}</Text>

          <Text cursor="pointer" mt="15px" bg="white" color="green" onClick={onOpen}>Edit Profile</Text>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Profile information</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormControl>
                  <FormLabel>Photo</FormLabel>
                  <Avatar mt="5px" size="lg" src={data.data.img} cursor="pointer"/>
                  <Input variant='flushed' mt="10px" placeholder='Paste Image URL' name="img" />
                </FormControl>
                <FormControl mt="20px" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input variant='flushed' placeholder='Enter Your Name' name="name"/>
                  <Text mt="5px" fontSize="14px">Appears on your Profile page, as your byline, and in your responses.</Text>
                </FormControl>
                <FormControl mt="20px" >
                  <FormLabel>Bio</FormLabel>
                  <Input variant='flushed' placeholder='About' name="bio" />
                  <Text mt="5px" fontSize="14px">Appears on your Profile and next to your stories.</Text>
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button border="1px solid green" bg="white" borderRadius="50px"  mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button borderRadius="50px" bg="green" _hover={{color:"green"}} variant='ghost'>Save</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </>
  )
}

export default UserProfile
