import React, { useEffect, useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { TfiPencilAlt } from "react-icons/tfi";
import { BsBell } from "react-icons/bs";
import Styles from "./navbar.module.css";
import DrawerExample from "./Menu";
import { Text, Flex, Input, Image, Box } from "@chakra-ui/react";
import Link from "next/link";
import Login from "./SignUp/Login";

function MainNavbar() {
  let [data, setData] = useState("");
  useEffect(() => {
    setData(sessionStorage.getItem("data"));
  }, [data]);

  return (
    <div className={Styles.topnav}>
      <Flex
        borderBottom="1px solid rgba(242, 242, 242, 1)"
        p="10px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex ml="20px" gap="25px" alignItems="center">
          <Link href="/">
            <Image
              w="180px"
              h="100px"
              src={
                "https://user-images.githubusercontent.com/105644684/213972274-765a3a2f-0112-45d7-995e-79680210a6ee.png"
              }
              alt="logo"
            />
          </Link>
          <div className={Styles.search}>
            <SearchIcon color="rgba(117, 117, 117, 1)" />
            <Input
              type="text"
              size="lg"
              placeholder="Search"
              variant="unstyled"
              ml="10px"
            />
          </div>
        </Flex>

        <Box className={Styles.avtar}>
          <Flex gap="25px" alignItems="center">
            <Link href="/write">
              <Flex gap="10px" cursor="pointer" alignItems="center">
                <TfiPencilAlt color="rgba(117, 117, 117, 1)" size="1.5em" />
                <Text>Write</Text>
              </Flex>
            </Link>
            <BsBell
              cursor="pointer"
              color="rgba(117, 117, 117, 1)"
              size="1.5em"
            />

            {/*****************************  Side Menu **********************************/}
            {data ? <DrawerExample /> : <Login />}
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}

export default MainNavbar;
