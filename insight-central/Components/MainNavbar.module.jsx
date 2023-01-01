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
                "https://lh3.googleusercontent.com/Tw2h4qrMZdt7ilhnmsY_aeu0eAitApqMdjF6Wsh3VUfPYTdOtUnmyuRvxlQjHv2pex1yitHx4zHK2VGHjqwqmqMMOpO30wwpaXe6sjnCqMCcg2UjvDKvhbHDZOvp8uBiwiQ0Hd4A4rPrBYjt_82zXAwIG0PnwL8u3xCaANMufAcHy1wp3_AqMHAq7lveEVhF48p2Lyvl1VI9EHAGSycwxES52jweFywq5nHA-PKxto6X9h17xXLWXPXtgcwwc8Veu5QQCNy0Pr61VPc5LnWgh6kJnIHqu6xijTxe7SPBFAu09Ojc7eYNMcpvb-FKxIK21yzarToUnqIExBCsO93rTEyqtg-M8UlGoSxudjuoNBMAbbEnj51CQyESiF0W3B8Cdvzrkg4FNYq1sDvcZ0YxZ4wWaUFFB_UtTtMvstvhhl6U8A9HYP2U_43LqqTO4uIxBnXFuyzChQOLxdI8Z5z18fzHnzhvjpwxMbr04kurPJKB_KidpDo0CjOGbak6r1UYouymmNSbLOjDIU7SkaKUnwxlH6ZL_JoCxnA3OZOLa1Rq6FZ3Nqwx7fbPUqulwqk7cPbqfbTgqRNEb6NN-pP1DM-ctHtcvV3F0kmNrh-jdmeY7dH4_5E4h-8z_EHWuTIV6LmI5EMzaftArZPrW8vUIfm1omAY3RBA0UVqBSojJrGpjrRuTw33pEprlDkjSMZ_VuBuc0G8kJAW1UwRZtJXwMxCrHQ3dOYF-H01jh0JcpkjhTjtOmXnD9_AI_UwHBv55mglUh9J00lQ-KrG0EqlCMX72xqSZzpD3RDzrC2ff31r_EhJu9tJUsCLqsbCHJiDuihMbBwAXCBklLfY4rbig2OqUBRPi9PLhjBvkfo6GEdRGphZTAp4VnHaxvVb9Z2GSYR3lp6qYUB2vU_7ifBecn1tabYo5UZNy_PCzRjdl377G2LRtctZ5tvOnUgCJBaoCIzmbhSsV9l60_o5LVfFFuqwNRqQtpjhMJ9Yfx_j2mc-VFuTG96OZc5g=w1280-h640-no?authuser=0"
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
