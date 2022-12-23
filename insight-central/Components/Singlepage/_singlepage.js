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
 import { BsThreeDots,BsFacebook,
    BsTwitter,
    BsLinkedin,
    BsLink45Deg, } from "react-icons/bs";
 // import { BsStarFill } from "react-icons/bs";
 import { GiStarShuriken } from "react-icons/gi";
 import Carousel from 'react-multi-carousel';
//  import 'react-multi-carousel/lib/styles.css';
 import ProductDetails from '../../pages/carosoul/_productcarosoul';
import Follower from '../Homepage/_following';
import { BiCoffeeTogo } from "react-icons/bi";
import { useRouter } from 'next/router';
//  import Follower from './_following';
//  import Banner from './_recomendation';
 
 // for responsive carosoul
 
 export default function Singlepage({id}) {
 
     const [singledata,setSingledata] = useState({});
     const [data,setData] = useState([]);
    //  console.log(typeof id);
    
  
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

          async function getsingleData (){
           await fetch(`https://zany-red-toad-cape.cyclic.app/blog/${id}`)
            .then((res) => res.json())
            .then((r) => {
               setSingledata(r)
            })
          }
     useEffect(()=>{
      getsingleData()
        
     },[])
     useEffect(()=>{
         fetch('https://zany-red-toad-cape.cyclic.app/blog')
         .then((res) => res.json())
         .then((r) => {
            setData(r.data)
         })
     },[])
     console.log(singledata);
     console.log(data)
   return (
     
     <>
       <Container maxH="" maxW="container.2xl"p="20">
       <Flex h="full"py="20">
         {/* this is left side */}
       <VStack w="80%"h="full" p={{base:4,sm:6}} spacing={10} align="flex-start" bg="white" >
        
        <HStack>This is for navbar</HStack>
         <VStack alignItems="left" w="full">
            <Flex gap="50%">
            <HStack gap={10}>
                <AspectRatio ratio={1} w={10}>
                    <Img src={singledata.img}/>
                </AspectRatio>
                <Text>Raymond M.E. Aguirre</Text>
                </HStack>
                <HStack gap={3} >
               <BsTwitter size={20} />
               <BsFacebook size={20} />
               <BsLinkedin size={20} />
               <BsLink45Deg size={20} />
               <Tooltip hasArrow label='Save' bg='gray.800' color='white'placement='top'>
            <Box><BsBookmarkPlus 
             size={20}
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
            <HStack alignItems="left">
                <Text>19 Sep</Text>
                <Text> - 5 minutes read</Text>
                 <GiStarShuriken color='rgb(255,192,23)'/>
                <Text> - Members only</Text>
            </HStack>

         </VStack>
           <VStack alignItems="left">
            <Text>{singledata.category}</Text>
            <Heading size="2xl">{singledata.title}</Heading>
            <AspectRatio>
            <Img src={singledata.img}/>
            </AspectRatio>
           <Text size="xl">{singledata.body}</Text>

           {/* all share icons  */}
           </VStack>
           <Divider borderColor={'red'} />
           <Heading>Enjoy the read?Reward the writer.</Heading>
           <HStack gap={20}>
           <Text>Your tip will go to Raymond M.E. Aguirre through a third-party platform of their choice, letting them know you appreciate their story.</Text>
           <Box
            size="2xl"
            borderRadius="full"
            w="100px"
            display="flex"
            p={2}
            bg="coral"
            color="white"
           ><BiCoffeeTogo color='white'/>Giveatip</Box>
           </HStack>

           <SimpleGrid bg="gray.100" columns={4} columnGap={2} >
        {data.map((ele,i)=>(

       
      <GridItem p={10} key={i}   colSpan={{base:4,md:5}} >
        <HStack>
          <AspectRatio  ratio={1} w={6}>
            <Img src={ele.img}/>
          </AspectRatio>
          <Text fontWeight="bold" textAlign="left">{ele.user_n}</Text>
          <Text fontWeight="bold" textAlign="left">- {ele.date}</Text>
          <GiStarShuriken size={20} color='rgb(255,192,23)'/>
          <Text fontWeight="bold"textAlign="left">Member</Text>
          </HStack>
          {/* This is the middle section */}
        <Flex py="10"w="full">
         <VStack alignItems="left" w="70%">
          <Heading size="md">{ele.title}</Heading>   
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
         <Divider   borderColor="gray" p={5}/>
      </GridItem>
       
      ))}
      
      </SimpleGrid>
      <HStack  pl="38%" alignItems="center">
        <Button 
         borderRadius="full"
         p={5}
         color="white"
         bg="coral"
        
        >Read More from Illumination</Button>
      </HStack>
       </VStack>
       {/* this is right side */}
       <VStack gap={8}  maxH="2400px" alignItems="left" p={10} maxW="30%" border="2px" borderColor="gray.300">
         <Button color="white"  bg="black"  borderRadius='full' size="lg">Get Unlimited Access</Button>
        
         <Heading  size="sm">2022 Review</Heading>
         <VStack alignItems="left">
         <Img
            borderRadius='full'
            boxSize='100px'
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
            alt='Dan Abramov'
            />
            <Heading size="md">Raymond M.E. Aguirre</Heading>
             <Text>878 Followers</Text>
               <Text> I help beginner creators break the mental and practical barriers that keep them from going from 0 to 1. My newsletter</Text>
               <a  href='https://raymondmeaguirre.substack.com'>
                   <Text>https://raymondmeaguirre.substack.com</Text>
               </a>
               <HStack>
                 <Follower/>
               </HStack>
         </VStack>
        
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
              <Tag size="sm"borderRadius='full'variant='solid' p={2} >Reactjs</Tag>
           </GridItem>
           <GridItem  colSpan={1}>
              <Tag size="sm"borderRadius='full'variant='solid' p={2} >Nodejs</Tag>
           </GridItem>
           <GridItem  colSpan={1}>
              <Tag size="sm"borderRadius='full'variant='solid' p={2} >Books</Tag>
           </GridItem>
           <GridItem  colSpan={1}>
              <Tag size="sm"borderRadius='full'variant='solid' p={2} >Latest</Tag>
           </GridItem>
           <GridItem  colSpan={1}>
              <Tag size="sm"borderRadius='full'variant='solid' p={2} >Newplay</Tag>
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
           {/* <Text  >{ele.user_n}</Text> */}
         
               </HStack>
               <HStack gap={10}>
               <Text>This is sayan Ghosh A developer</Text>
                 {/* <Follower/> */}
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
                 {/* <Text fontWeight="bold">{ele.user_n}</Text> */}
                 </Flex>
                 <Heading size="s">{ele.title}</Heading>
                 <HStack>
                   <Text>Date</Text>
                   <Text> - 6 minutes read</Text>
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
 
 