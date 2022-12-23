import { Box } from '@chakra-ui/react';
import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
function Banner({data}) {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
     <Carousel 
     responsive={responsive}
     additionalTransfrom={0}
     arrows
     autoPlaySpeed={3000}
     centerMode = {false}
     className= ""
     containerClass='container-with-dots'
     draggable
     focusOnSelect={false}
     infinite
     itemClass=''
     keyBoardControl
     minimumTouchDrag={80}
     renderArrowsWhenDisabled = {false}
     renderButtonGroupOutside={false}
     renderDotsOutside = {false}
     dotListClass="custom-dot-list-style"
     
     >
        {data.map((ele,i)=>(
            <Box key = {i} >
             {ele.category}

            </Box>
        ))}


     </Carousel>
  )
}

export default Banner