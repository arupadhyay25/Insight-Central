import { Container, Heading, Text, VStack } from '@chakra-ui/react'
import React,{useEffect,useState} from 'react'
export function Homepage() {
    const [data,setData] = useState([])
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
    {/* This is the virtual navbar */}
     <VStack>
        <Heading>Navbar</Heading>
      </VStack>
    <Container maxH="full" maxW={'container.xl'} border="2px">
     {/* this is left side */}
     {data.map((ele)=>(
    <VStack key={ele.id}>
     <Heading>{ele.title}</Heading>
     <Text>{ele.desc}</Text>
     <Text>{ele.cat}</Text>
     <Text>{ele.user_n}</Text>

     </VStack>
     ))}
     {/* This is right side */}
     <VStack>
        {/* code for right side  */}
     </VStack>
     </Container>
    </>
  )
}

