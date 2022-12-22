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
import ProductDetails from '../carosoul/_productcarosoul';
import Follower from './_following';
// for responsive carosoul

export function Homepage() {

    const [data,setData] = useState([]);
    
  //  this theme is handleing the follow
 
    const myHeaders = new Headers({
        // mode: 'no-cors',
       'Content-Type': 'application/json',
    //    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzljMTJhOWFjYTBmOWJmZDY2MjBmMjAiLCJpYXQiOjE2NzEyNjk3NzIsImV4cCI6MTY3MTM1NjE3Mn0.5o7W_4FPoIURun87X67jfFndkLIbkh6u41uXF-fZO14',
   });
    // const getData = () =>{
    //     fetch("http://localhost:8080/data",{
    //         method: 'GET',
    //         headers: myHeaders,
    //     })
    //     .then((r)=>{
    //         console.log(r.data)
    //     })
    //     .catch((e)=>{
    //         console.log(e);
    //     })
    // }
    useEffect(()=>{
        fetch('http://localhost:8080/data')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
        })
    },[])
  return (
    
    <>
      <Container maxH="" maxW="container.2xl"p="20">
      <Flex h="full"py="20">
        {/* this is left side */}
      <VStack w="75%"h="full" p={{base:4,sm:6}} spacing={10} align="flex-start" bg="white" >
        {/* carosul time */}
        <VStack>
        {/* <Box h="full"  w="full" border="2px"><ProductDetails/></Box> */}
        </VStack>
       
       
      <SimpleGrid columns={4} columnGap={2} >
        {data.map((ele)=>(

        
      <GridItem p={10} key={ele.id}   colSpan={{base:4,md:5}} border="2px" borderColor="gray.200">
        <HStack>
          <AspectRatio  ratio={1} w={6}>
            <Img src={ele.user_img}/>
          </AspectRatio>
          <Text fontWeight="bold" textAlign="left">{ele.user_n}</Text>
          <Text fontWeight="bold" textAlign="left">- December6</Text>
          <GiStarShuriken size={20} color='rgb(255,192,23)'/>
          <Text fontWeight="bold"textAlign="left">{ele.status}</Text>
          </HStack>
          {/* This is the middle section */}
        <Flex py="10"w="full">
         <VStack textAlign="left" w="78%">
          <Heading size="md">{ele.title}</Heading>   
          <Text>{ele.desc}</Text>
          </VStack>
          <AspectRatio ratio={1} w={24}>
          <Img src={ele.user_img}/>
          </AspectRatio>
          </Flex>
         {/* This is the last part */}
         <Flex gap={20}>
          <HStack>
            
          <Button size="xs" style={{fontSize:"15px"}}  textAlign="left">{ele.cat}</Button>
          
          <Text size="s">{ele.reading_time} read</Text>
          <Text size="s"> - selected for you </Text>
          </HStack>
          <HStack gap={2}>
            
          <Tooltip hasArrow label='Save' bg='gray.800' color='white'placement='top'>

            <Box><BsBookmarkPlus 
             size={20}
            /></Box>
          </Tooltip>
          <Tooltip hasArrow label='Show less like this' bg='gray.800' color='white'placement='top'>
            <Box><MdOutlineDoNotDisturbOn 
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
      </GridItem>
      ))}
      </SimpleGrid>
      </VStack>
      {/* this is right side */}
      <VStack gap={8}  alignItems="left" p={10} maxW={"container.sm"} border="2px" borderColor="gray.300">
        <Button color="white"  bg="black"  borderRadius='full' size="lg">Get Unlimited Access</Button>
       
        <Heading  size="sm">2022 Review</Heading>
       
        <SimpleGrid columns={4} columnGap={2} rowGap={10}>
          {data.map((ele)=>(
            <GridItem key={ele.id} colSpan= "4">
              
                <HStack>
          <AspectRatio    ratio={1} w={6}>
            <Img  src={ele.user_img}/>
          </AspectRatio>
          <Text  textAlign="left">{ele.user_n}</Text>
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
             <Tag size="sm"borderRadius='full'variant='solid' p={2} >Pogramming</Tag>
          </GridItem>
          <GridItem  colSpan={1}>
             <Tag size="sm"borderRadius='full'variant='solid' p={2} >Pogramming</Tag>
          </GridItem>
          <GridItem  colSpan={1}>
             <Tag size="sm"borderRadius='full'variant='solid' p={2} >Pogramming</Tag>
          </GridItem>
          <GridItem  colSpan={1}>
             <Tag size="sm"borderRadius='full'variant='solid' p={2} >Pogramming</Tag>
          </GridItem>
          <GridItem  colSpan={1}>
             <Tag size="sm"borderRadius='full'variant='solid' p={2} >Pogramming</Tag>
          </GridItem>
          </SimpleGrid>
       </VStack>
       {/* follow recomendation */}
       <VStack alignItems="left">
        <Heading  size="sm">Who to follow</Heading>
        {data.map((ele)=>(
          <VStack alignItems="left" key={ele.id}>
              <HStack alignItems="left">
                
              <AspectRatio  ratio={1} w={6}>
            <Img src={ele.user_img}/>
          </AspectRatio>
          <Text  >{ele.user_n}</Text>
        
              </HStack>
              <HStack gap={10}>
              <Text>This is sayan Ghosh A developer</Text>
                <Follower/>
              </HStack>
          </VStack>
        ))}
        <Text color="rgb(26,137,23)">See more suggestions</Text>
       </VStack>

       {/* this is for recently saved */}

       <VStack alignItems="left" maxW={'container.lg'}>
           {data.map((ele)=>(
              <VStack alignItems="left">
                <Flex alignItems="left" gap={5}>
                <AspectRatio ratio={1} w="5">
                  <Img src={ele.user_img}/>
                </AspectRatio>
                <Text fontWeight="bold">{ele.user_n}</Text>
                </Flex>
                <Heading size="s">{ele.title}</Heading>
                <HStack>
                  <Text>Date</Text>
                  <Text> - {ele.reading_time}</Text>
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

