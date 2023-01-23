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
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Divider,
  Tag,
  Image,
  Center,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Tooltip } from "@chakra-ui/react";
import { BsBookmarkPlus } from "react-icons/bs";
import { MdOutlineDoNotDisturbOn } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { GiStarShuriken } from "react-icons/gi";
import "react-multi-carousel/lib/styles.css";
import Follower from "./_following";
import Link from "next/link";
import styles from "./homepage.module.css";
export default function Homepage() {
  const [data, setData] = useState([]);
  const [authordata, setauthorData] = useState([]);
  const [page, setpage] = useState(1);

  //  this theme is handleing the follow
  useEffect(() => {
    fetch(`https://zany-red-toad-cape.cyclic.app/blog?page=${page}`)
      .then((res) => res.json())
      .then((r) => {
        setData(r.data);
      });
    fetch(`https://zany-red-toad-cape.cyclic.app/blog`)
      .then((res) => res.json())
      .then((r) => {
        setauthorData(r.data);
      });
  }, [page]);

  const result = authordata
    .map((item) => item.name)
    .filter((name, index, self) => self.indexOf(name) === index)
    .map((name) => {
      return authordata.find((item) => item.name === name);
    });

  console.log(result);

  const favBlog = (id) => {
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
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteBlog = async (id) => {
    const myHeaders = new Headers({
      mode: "no-cors",
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2M2E1NDdlZjZkNDQ1MWY2YjkwYjc4NTAiLCJpYXQiOjE2NzE3NzYyNjd9.tTDDts2JvsYzy6U-Flip37IxXbIvRJTyo3sRBixz3gI",
    });
    return await fetch(`https://zany-red-toad-cape.cyclic.app/blog/${id}`, {
      method: "DELETE",
      headers: myHeaders,
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Something went wrong on api server!");
        }
      })
      .catch((error) => {
        console.log("Can not Deleted for error");
        console.error(error);
      });
  };
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <>
      <Container
        maxH=""
        maxW="container.2xl"
        p="0"
        className={styles.home - page}
      >
        <Flex flexDirection={{ base: "column", md: "row" }} h="full" p="0">
          {/* this is left side */}
          <VStack
            w={{ base: "100%", md: "70%" }}
            h="full"
            p={{ base: 4, sm: 6 }}
            spacing={10}
            align="flex-start"
            bg="white"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "85%",
                margin: "auto",
              }}
            >
              <Heading>For you</Heading>
              <span>
                <Button
                  onClick={() => setpage(page - 1)}
                  variant="ghost"
                  disabled={page == 1}
                >
                  Previous
                </Button>
                &nbsp;
                <Button variant="ghost">{page}</Button>&nbsp;
                <Button
                  onClick={() => setpage(page + 1)}
                  disabled={page == 3}
                  variant="ghost"
                >
                  Next
                </Button>
              </span>
            </div>
            <SimpleGrid columns={4} columnGap={2}>
              {data.length === 0 ? (
                <GridItem
                  p={"0 80px"}
                  colSpan={{ base: 4, md: 5 }}
                  alignItems={"center"}
                >
                  <Center>
                    <Image src="https://htmlburger.com/blog/wp-content/uploads/2021/07/The-Best-50-Website-Preloaders-Around-the-Web-Example-28.gif" />
                  </Center>
                </GridItem>
              ) : (
                data.map((ele, i) => (
                  <GridItem
                    p={"0 80px"}
                    key={i}
                    colSpan={{ base: 4, md: 5 }}
                    alignItems={"center"}
                  >
                    <HStack mt={5}>
                      <Img
                        borderRadius="full"
                        boxSize="50px"
                        src={ele.author.img}
                        mb="10px"
                      />
                      <Text
                        textTransform={"capitalize"}
                        fontWeight="bold"
                        textAlign="left"
                      >
                        {ele.author.name}
                      </Text>
                      <Text fontWeight="normal" textAlign="left">
                        {months[ele.date.split("T")[0].split("-")[1] - 1]}{" "}
                        {ele.date.split("T")[0].split("-")[2]}
                        {" , "}
                        {ele.date.split("T")[0].split("-")[0]}
                      </Text>
                    </HStack>
                    {/* This is the middle section */}
                    <Flex w="full" mt={5}>
                      <VStack alignItems="left" w="70%">
                        <Heading cursor="pointer" size="md">
                          <Link href={`/singleblog/${ele._id}`} target="_blank">
                            {ele.title}
                          </Link>
                        </Heading>
                        <div className={styles.bodytext}>{ele.body}</div>
                        <br />
                        {/* This is the last part */}
                        <Flex gap={20}>
                          <HStack>
                            <Button
                              size="xs"
                              style={{ fontSize: "15px" }}
                              textAlign="left"
                            >
                              {ele.category}
                            </Button>

                            <Text size="s">5 minutes read</Text>
                            <Text size="s"> - selected for you </Text>
                          </HStack>
                          <HStack gap={2}>
                            <Tooltip
                              hasArrow
                              label="Save"
                              bg="gray.800"
                              color="white"
                              placement="top"
                            >
                              <Box onClick={() => favBlog(ele._id)}>
                                <BsBookmarkPlus size={20} />
                              </Box>
                            </Tooltip>
                            <Tooltip
                              hasArrow
                              label="Show less like this"
                              bg="gray.800"
                              color="white"
                              placement="top"
                            >
                              <Box onClick={() => deleteBlog(ele._id)}>
                                <MdOutlineDoNotDisturbOn size={25} />
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
                                <PopoverBody>
                                  Mute this publications
                                </PopoverBody>
                                <PopoverBody>report</PopoverBody>
                              </PopoverContent>
                            </Popover>
                          </HStack>
                        </Flex>
                      </VStack>
                      <VStack w={"20%"}>
                        <Img w={"120px"} src={ele.img} />
                      </VStack>
                    </Flex>
                    <br />
                    <Divider bgColor={"blackAlpha.700"} height="2px" />
                  </GridItem>
                ))
              )}
            </SimpleGrid>
          </VStack>
          {/* this is right side */}
          <VStack
            gap={5}
            alignItems="left"
            p={10}
            maxW={"container.sm"}
            border="2px"
            borderColor="gray.300"
            mr={10}
          >
            <Button color="white" bg="black" borderRadius="full" size="lg">
              Get Unlimited Access
            </Button>

            <VStack alignItems="center"></VStack>
            <VStack alignItems="left">
              <Heading size="sm">Recomended Topics</Heading>
              <br />
              <SimpleGrid columns={4} columnGap={2} rowGap={2}>
                <GridItem colSpan={1}>
                  <Tag size="sm" borderRadius="full" variant="solid" p={2}>
                    Pogramming
                  </Tag>
                </GridItem>
                <GridItem colSpan={1}>
                  <Tag size="sm" borderRadius="full" variant="solid" p={2}>
                    Books
                  </Tag>
                </GridItem>
                <GridItem colSpan={1}>
                  <Tag size="sm" borderRadius="full" variant="solid" p={2}>
                    Tech
                  </Tag>
                </GridItem>
                <GridItem colSpan={1}>
                  <Tag size="sm" borderRadius="full" variant="solid" p={2}>
                    Buiesness
                  </Tag>
                </GridItem>
                <GridItem colSpan={1}>
                  <Tag size="sm" borderRadius="full" variant="solid" p={2}>
                    React
                  </Tag>
                </GridItem>
                <GridItem colSpan={1}>
                  <Tag size="sm" borderRadius="full" variant="solid" p={2}>
                    Coding
                  </Tag>
                </GridItem>
              </SimpleGrid>
            </VStack>
            {/* follow recomendation */}
            <VStack alignItems="left">
              <Heading size="sm">Who to follow</Heading>
              <br />
              {data.map((ele, i) => (
                <VStack alignItems="left" key={i}>
                  <HStack alignItems="left">
                    <AspectRatio ratio={1} w={6}>
                      <Img src={ele.author.img} />
                    </AspectRatio>
                    <Text>{ele.author.name}</Text>
                  </HStack>
                  <HStack gap={10}>
                    <Text>A versetile React Developer</Text>
                    <Follower />
                  </HStack>
                </VStack>
              ))}
              <Text color="rgb(26,137,23)">See more suggestions</Text>
            </VStack>

            {/* this is for recently saved */}

            <VStack alignItems="left" maxW={"container.lg"}>
              {data.map((ele, i) => (
                <VStack key={i} alignItems="left">
                  <Flex alignItems="left" gap={5}>
                    <AspectRatio ratio={1} w="5">
                      <Img src={ele.img} />
                    </AspectRatio>
                    <Text textTransform={"capitalize"} fontWeight="bold">
                      {ele.author.name}
                    </Text>
                  </Flex>
                  <Heading size="s">{ele.title}</Heading>
                  <HStack>
                    <Text>9/10</Text>
                    <Text> - 15 minutes read </Text>
                    <GiStarShuriken size={20} color="rgb(255,192,23)" />
                  </HStack>
                </VStack>
              ))}
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
