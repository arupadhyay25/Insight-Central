import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Input,
  InputGroup,
  InputRightElement,
  Checkbox,
  Flex,
  Link,
  Text,
  useToast,
} from "@chakra-ui/react";
import { CiUser } from "react-icons/ci";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState} from "react";
import SignUp from "./SignUp";
import axios from "axios"


const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(false);
//   const [userIcon,setuserIcon]=useState(true);
  const handleClick = () => setShow(!show);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const toast = useToast();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.type]: e.target.value });
  };



    const register=()=>{
        setLoading(true);
    axios
      .post("https://zany-red-toad-cape.cyclic.app/login", formData)
      .then(({ data }) => {
      console.log(data.token)
        sessionStorage.setItem("data",JSON.stringify(data))
        toast({
          title: data.message,
          description: "You are Successfully Logged in.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setLoading(false);
      })
      .catch((err) => {
        toast({
          title: "Invaild Email or Password",
          description: "Please check your Email and Password.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        setLoading(false);
        window.location.reload();
      });
      setFormData({ email: "", password: "" })
    }

  return (
    <Box w="35x">
      <Button _hover={{ bg: "white" }} onClick={onOpen} bg="white">
        <CiUser cursor="pointer" color="rgba(117, 117, 117, 1)" size="1.5em" />
      </Button>
      

      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Come on in</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs mt="10px">
              <TabList>
                <Tab>SIGN IN</Tab>
                <Tab>I'M NEW HERE</Tab>
              </TabList>
{/**************************************************************  Log In ***************************************/}
              <TabPanels>
                <TabPanel>
                  <label>Email address</label>
                  <Input type="email" placeholder="Enter email" mb="10px" mt="5px" value={formData.email} onChange={handleChange}/>
                  <label>Password</label>
                  <InputGroup mt="5px" size="md">
                    <Input
                      border="1px solid grey"
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? <ViewOffIcon /> : <ViewIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Flex mt="10px" gap="10px">
                    <Checkbox defaultChecked></Checkbox>
                    <label>
                      Keep me signed in. <Link>What's this?</Link>
                    </label>
                  </Flex>
                  <Flex mb="12px">
                    <Link mt="5px">Forgot your password?</Link>
                  </Flex>
                  <Button
                    _hover={{ bg: "rgb(65, 63, 63)" }}
                    bg="black"
                    color="white"
                    w="100%"
                    isLoading={loading}
                    onClick={register}
                  >
                    Sign In
                  </Button>
                </TabPanel>

{/**************************************************************  Sign Up ***************************************/}

                <SignUp />

              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Login;