import {
  AspectRatio,
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
  Tag,
  Spacer,
  Center,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FcMediumPriority } from "react-icons/fc";
import { Tooltip } from "@chakra-ui/react";
import { BsBookmarkPlus } from "react-icons/bs";
import { MdOutlineDoNotDisturbOn } from "react-icons/md";
import {
  BsThreeDots,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsLink45Deg,
} from "react-icons/bs";
import { GiStarShuriken } from "react-icons/gi";
import Follower from "../Homepage/_following";
import { BiCoffeeTogo } from "react-icons/bi";
import styles from "./singlepage.module.css";

export default function Singlepage({ id }) {
  const [singledata, setSingledata] = useState({});
  const [data, setData] = useState([]);
  const [status, setstatus] = useState(false);

  function getsingleData() {
    fetch(`https://zany-red-toad-cape.cyclic.app/blog/${id}`)
      .then((res) => res.json())
      .then((r) => {
        setSingledata(r);
        setstatus(true);
      });
  }
  useEffect(() => {
    getsingleData();
  }, [status]);

  return (
    <>
      <Container maxH="" maxW="container.2xl" px="20">
        <Flex h="full">
          {/* this is left side */}
          <VStack
            w="80%"
            h="full"
            px={{ base: 4, sm: 6 }}
            align="flex-start"
            bg="white"
          >
            <VStack alignItems="left" w="full">
              <Flex gap="50%">
                <HStack gap={4}>
                  <Img
                    borderRadius={"full"}
                    boxSize="70px"
                    src={singledata.img}
                  />
                  <Text>Raymond M.E. Aguirre</Text>
                </HStack>
                <HStack gap={3}>
                  <BsTwitter size={20} />
                  <BsFacebook size={20} />
                  <BsLinkedin size={20} />
                  <BsLink45Deg size={20} />
                  <Tooltip
                    hasArrow
                    label="Save"
                    bg="gray.800"
                    color="white"
                    placement="top"
                  >
                    <Box>
                      <BsBookmarkPlus size={20} />
                    </Box>
                  </Tooltip>
                  <Popover>
                    <PopoverTrigger>
                      <Box cursor="pointer">
                        <BsThreeDots size={20} />
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
              <HStack display={"flex"} alignItems="center">
                <Button
                  borderRadius={"full"}
                  colorScheme={"blackAlpha"}
                  textTransform={"uppercase"}
                >
                  {singledata.category}
                </Button>
                <Text>19 Sep</Text>
                <Text> - 5 minutes read</Text>
                <GiStarShuriken color="rgb(255,192,23)" />
                <Text> - Members only</Text>
              </HStack>
              <br />
            </VStack>
            <VStack alignItems="left">
              <Heading size="2xl">{singledata.title}</Heading>
              <Spacer />
              <Spacer />
              <Spacer />
              <Center>
                <Img width={"60%"} src={singledata.img} />
              </Center>
              <Spacer />
              <Spacer />
              <p className={styles.body}>{singledata.body}</p>

              {/* all share icons  */}
            </VStack>
            <Divider borderColor={"red"} />
            <br />
            <br />
            <br />
            <br />
          </VStack>
          {/* this is right side */}
          <VStack
            gap={8}
            alignItems="left"
            p={10}
            maxW="30%"
            h="-webkit-fit-content"
            border="2px"
            borderColor="gray.300"
          >
            <Button color="white" bg="black" borderRadius="full" size="lg">
              Get Unlimited Access
            </Button>

            <VStack alignItems="left">
              <Img
                borderRadius="full"
                boxSize="100px"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                alt="Dan Abramov"
              />
              <Heading size="md">Raymond M.E. Aguirre</Heading>
              <Text>878 Followers</Text>
              <Text>
                {" "}
                I help beginner creators break the mental and practical barriers
                that keep them from going from 0 to 1. My newsletter
              </Text>
              <a href="https://raymondmeaguirre.substack.com">
                <Text>https://raymondmeaguirre.substack.com</Text>
              </a>
              <HStack>
                <Follower />
              </HStack>
            </VStack>

            <Text color="rgb(26,137,23)">See full list</Text>

            <VStack alignItems="center">
              {/* icons */}

              <Text>
                Discover Medium writers you already follow on Twitter.
              </Text>
            </VStack>
            <Divider mb={5} />
            <VStack alignItems="left">
              <Heading size="sm">Recomended Topics</Heading>
              <SimpleGrid columns={4} columnGap={2} rowGap={2}>
                <GridItem colSpan={1}>
                  <Tag size="sm" borderRadius="full" variant="solid" p={2}>
                    Pogramming
                  </Tag>
                </GridItem>
                <GridItem colSpan={1}>
                  <Tag size="sm" borderRadius="full" variant="solid" p={2}>
                    Reactjs
                  </Tag>
                </GridItem>
                <GridItem colSpan={1}>
                  <Tag size="sm" borderRadius="full" variant="solid" p={2}>
                    Nodejs
                  </Tag>
                </GridItem>
                <GridItem colSpan={1}>
                  <Tag size="sm" borderRadius="full" variant="solid" p={2}>
                    Books
                  </Tag>
                </GridItem>
                <GridItem colSpan={1}>
                  <Tag size="sm" borderRadius="full" variant="solid" p={2}>
                    Latest
                  </Tag>
                </GridItem>
                <GridItem colSpan={1}>
                  <Tag size="sm" borderRadius="full" variant="solid" p={2}>
                    Newplay
                  </Tag>
                </GridItem>
              </SimpleGrid>
            </VStack>
            <Text fontWeight="bold" color="rgb(26,137,23)">
              See all({data.length})
            </Text>
          </VStack>
        </Flex>
      </Container>
    </>
  );
}
