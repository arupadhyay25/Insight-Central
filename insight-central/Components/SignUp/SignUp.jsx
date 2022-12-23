import { useEffect, useState } from 'react'
import {
    Button,
    TabPanel,
    Input,
    InputGroup,
    InputRightElement,
    useToast,
    Flex,
    Link,
    Text,
  } from '@chakra-ui/react'
import {ViewIcon,ViewOffIcon} from "@chakra-ui/icons"
import axios from "axios"

const initState={
    name:"",
    email:"",
    img:"",
    password:""
}

const SignUp = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const [formData,setFormData]=useState(initState)

    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormData({...formData,[name]:value})
    }

      
    const register=()=>{
        setLoading(true);
        axios
          .post("https://zany-red-toad-cape.cyclic.app/signup", formData)
          .then((res) => {
            console.log(res.data)
            toast({
              title: "Account created.",
              description: "We've created your account for you.",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
            setLoading(false);
          })
          .catch((err) => {
            toast({
              title: "Email already registered.",
              description: "Please use another email address.",
              status: "error",
              duration: 5000,
              isClosable: true,
            });
            setLoading(false);
          });

          setFormData(initState)
    }
  
  return (
    <>
        <TabPanel>
            <label>Name </label>
            <Input type="text" placeholder='Enter name'  mb="10px" mt="5px" name="name" value={formData.name} onChange={handleChange}/>
            <label>Email address</label>
            <Input type="email" placeholder='Enter email'  mb="10px" mt="5px" name="email" value={formData.email} onChange={handleChange}/>
            <label>Profile Picture</label>
            <Input type="url" placeholder='Paste URL'  mb="10px" mt="5px" name="img" value={formData.img} onChange={handleChange}/>
            <label>Password</label>
            <InputGroup mt="5px" size='md'>
                <Input
                border="1px solid grey"
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? <ViewOffIcon/> : <ViewIcon/>  }
                </Button>
            </InputRightElement>
            </InputGroup>
                <Text fontSize="14px" mt="10px">By registering, you agree with our <Link>Terms & Conditions</Link>  and <Link>Privacy and Cookie Policy.</Link></Text>
                <Button onClick={register} _hover={{bg:"rgb(65, 63, 63)"}} bg="black" color="white" mt="15px" w="100%">Register</Button>
        </TabPanel>
      
    </>
  )
}

export default SignUp