import { AspectRatio,
   Box,
  Button, 
  Container, 
  Flex, 
  GridItem, 
  HStack, 
  Heading, 
  Img, 
  SimpleGrid, 
  Text, 
  VStack,  
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Divider,
  Tag, } from '@chakra-ui/react'
import React,{useEffect,useState} from 'react';
import { FcMediumPriority } from "react-icons/fc";
import { Tooltip } from '@chakra-ui/react';
import { BsBookmarkPlus } from "react-icons/bs";
import { MdOutlineDoNotDisturbOn } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
// import { BsStarFill } from "react-icons/bs";
import { GiStarShuriken } from "react-icons/gi";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductDetails from '../../pages/carosoul/_productcarosoul';
import Follower from './_following';
import Banner from './_recomendation';
import Link from 'next/link';
// for responsive carosoul
import singleblog from '../../pages/singleblog';
export default function Homepage() {

    const [data,setData] = useState([]);
    
  //  this theme is handleing the follow


    useEffect(()=>{
      const data = JSON. parse(sessionStorage.getItem("data"));
      console.log(data);
    })
 
   
    useEffect(()=>{
        fetch('https://zany-red-toad-cape.cyclic.app/blog')
        .then((res) => res.json())
        .then((r) => {
          setData(r.data)
        })
    },[]);
    console.log(data);

    const favBlog =(id) =>{
      const myHeaders = new Headers({
        mode: "no-cors",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      });
  
      fetch(`https://zany-red-toad-cape.cyclic.app/bookmark/${id}`, {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({ quantity: orqty }),
      })
        .then((res) => {
          if (!res.ok) {
            throw Error("Sorry, something went wrong");
          }
        })
        .then((res) => {
          console.log("send successfully");
        })
        .catch((err) => {
          console.log(err);
        });


    }
    const deleteBlog = async(id) =>{
      const myHeaders = new Headers({
        mode: "no-cors",
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2M2E1NDdlZjZkNDQ1MWY2YjkwYjc4NTAiLCJpYXQiOjE2NzE3NzYyNjd9.tTDDts2JvsYzy6U-Flip37IxXbIvRJTyo3sRBixz3gI",
      });
        return  await fetch(`https://zany-red-toad-cape.cyclic.app/blog/${id}`, {
          method: 'DELETE',
          headers: myHeaders,
        }
      )
        .then((response) => {
          
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error("Something went wrong on api server!");
          }
        })
        .then((response) => {
          console.log(response)
          console.log("Delete Success")
        })
        .catch((error) => {
          console.log("Can not Deleted for error")
          console.error(error);
        });
    }
  return (
    
    <>
      <Container maxH="" maxW="container.2xl"p="20">
      <Flex h="full"py="20">
        {/* this is left side */}
      <VStack w="70%"h="full" p={{base:4,sm:6}} spacing={10} align="flex-start" bg="white" >
        {/* carosul time */}
      <Container p={10} h="30" maxW="full"><Banner
      data = {data}
      
      /></Container> 
        {/* <Box h="full"  w="full" border="2px"><ProductDetails/></Box> */}
           
       
       
       
       <Divider/>
      <SimpleGrid columns={4} columnGap={2} >
        {data.map((ele,i)=>(

        
      <GridItem p={10} key={i}   colSpan={{base:4,md:5}} >
        <HStack>
          <AspectRatio  ratio={1} w={6}>
            <Img src={ele.img}/>
          </AspectRatio>
          <Text fontWeight="bold" textAlign="left">Sayan Ghosh</Text>
          <Text fontWeight="bold" textAlign="left">- {ele.date}</Text>
          <GiStarShuriken size={20} color='rgb(255,192,23)'/>
          <Text fontWeight="bold"textAlign="left">Member</Text>
          </HStack>
          {/* This is the middle section */}
        <Flex py="10"w="full">
         <VStack alignItems="left" w="70%">

          <Heading cursor="pointer"  size="md"><Link href={`/singleblog/${ele._id}`} target='_blank'>{ele.title}</Link></Heading>   
          <div style={{
            width: "90%",
            fontSize: "20px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis" 


          }}>{ele.body}</div>
          </VStack>
          <AspectRatio ratio={1} w={24}>
          <Img src={ele.img}/>
          </AspectRatio>
          </Flex>
         {/* This is the last part */}
         <Flex gap={20}>
          <HStack>
            
          <Button size="xs" style={{fontSize:"15px"}}  textAlign="left">{ele.category}</Button>
          
          <Text size="s">5 minutes read</Text>
          <Text size="s"> - selected for you </Text>
          </HStack>
          <HStack gap={2}>
            
          <Tooltip hasArrow label='Save' bg='gray.800' color='white'placement='top'>

            <Box onClick={()=>favBlog(ele._id)}><BsBookmarkPlus 
             size={20}
            /></Box>
          </Tooltip>
          <Tooltip hasArrow label='Show less like this' bg='gray.800' color='white'placement='top'>
            <Box onClick={()=>deleteBlog(ele._id)}><MdOutlineDoNotDisturbOn 
            size={25}
            /></Box>
          </Tooltip>
          <Popover>
            <PopoverTrigger>
              <Box cursor="pointer">
            <BsThreeDots 
            size={20}
            />
            </Box>
            </PopoverTrigger>
            <PopoverContent p={3}>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>Mute this author</PopoverBody>
              <PopoverBody>Mute this publications</PopoverBody>
              <PopoverBody>report</PopoverBody>
            </PopoverContent>
          </Popover>

          
          </HStack>
         </Flex>
         <Divider   color="gray" p={5}/>
      </GridItem>
       
      ))}
      </SimpleGrid>
     
      </VStack>
      {/* this is right side */}
      <VStack gap={8}  alignItems="left" p={10} maxW={"container.sm"} border="2px" borderColor="gray.300">
        <Button color="white"  bg="black"  borderRadius='full' size="lg">Get Unlimited Access</Button>
       
        <Heading  size="sm">2022 Review</Heading>
       
        <SimpleGrid columns={4} columnGap={2} rowGap={10}>
          {data.map((ele,i)=>(
            <GridItem key={i} colSpan= "4">
              
                <HStack>
          <AspectRatio    ratio={1} w={6}>
            <Img  src={ele.img}/>
          </AspectRatio>
          <Text  textAlign="left">Sayan Ghosh</Text>
          <Text  textAlign="left">- December6</Text>
          </HStack>
          <Heading size="xs">{ele.title}</Heading>
        
            </GridItem>
          ))}

        </SimpleGrid>
        <Text color="rgb(26,137,23)" >See full list</Text>

       <VStack alignItems="center">
         {/* icons */}

         <Text>Discover Medium writers you already follow on Twitter.</Text>
       </VStack>
       <Divider mb={5}/>
       <VStack  alignItems="left">
        <Heading size="sm">Recomended Topics</Heading>
        <SimpleGrid columns={4} columnGap={2} rowGap={2}>
          <GridItem  colSpan={1}>
             <Tag  size="sm"borderRadius='full'variant='solid'p={2} >Pogramming</Tag>
          </GridItem>
          <GridItem  colSpan={1}>
             <Tag size="sm"borderRadius='full'variant='solid' p={2} >Books</Tag>
          </GridItem>
          <GridItem  colSpan={1}>
             <Tag size="sm"borderRadius='full'variant='solid' p={2} >Tech</Tag>
          </GridItem>
          <GridItem  colSpan={1}>
             <Tag size="sm"borderRadius='full'variant='solid' p={2} >Buiesness</Tag>
          </GridItem>
          <GridItem  colSpan={1}>
             <Tag size="sm"borderRadius='full'variant='solid' p={2} >React</Tag>
          </GridItem>
          <GridItem  colSpan={1}>
             <Tag size="sm"borderRadius='full'variant='solid' p={2} >Coding</Tag>
          </GridItem>
          </SimpleGrid>
       </VStack>
       {/* follow recomendation */}
       <VStack alignItems="left">
        <Heading  size="sm">Who to follow</Heading>
        {data.map((ele,i)=>(
          <VStack alignItems="left" key={i}>
              <HStack alignItems="left">
                
              <AspectRatio  ratio={1} w={6}>
            <Img src={ele.img}/>
          </AspectRatio>
          <Text  >Sayan GhOSH</Text>
        
              </HStack>
              <HStack gap={10}>
              <Text>A versetile React Developer</Text>
                <Follower/>
              </HStack>
          </VStack>
        ))}
        <Text color="rgb(26,137,23)">See more suggestions</Text>
       </VStack>

       {/* this is for recently saved */}

       <VStack alignItems="left" maxW={'container.lg'}>
           {data.map((ele,i)=>(
              <VStack key={i} alignItems="left">
                <Flex alignItems="left" gap={5}>
                <AspectRatio ratio={1} w="5">
                  <Img src={ele.img}/>
                </AspectRatio>
                <Text fontWeight="bold">Sayan</Text>
                </Flex>
                <Heading size="s">{ele.title}</Heading>
                <HStack>
                  <Text>9/10</Text>
                  <Text> - 15 minutes read </Text>
                  <GiStarShuriken size={20} color='rgb(255,192,23)'/>
                </HStack>
              </VStack>

           ))}  
       </VStack>
       <Text fontWeight="bold" color="rgb(26,137,23)">See all({data.length})</Text>
       
      </VStack>
      </Flex>
      </Container>

    </>
  )
}

