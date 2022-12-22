import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { TfiPencilAlt } from "react-icons/tfi";
import { BsBell } from "react-icons/bs";
import Styles from "./navbar.module.css"
import DrawerExample from "./Menu";
import { Text, 
         Flex, 
         Input, 
         Image,
         Drawer,
         DrawerBody,
         DrawerHeader,
         DrawerOverlay,
         DrawerContent,
         Box,
         Button,
         useDisclosure } from "@chakra-ui/react";


function MainNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Flex
        borderBottom="1px solid rgba(242, 242, 242, 1)"
        p="10px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex ml="20px" gap="25px" alignItems="center">
          <Image
            w="40px"
            h="20px"
            src="data:image/png;base64,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"
            alt=""
          />
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
          <Box className={Styles.mobSearch}>
            <Button  colorScheme='white' onClick={onOpen}>
              <SearchIcon color="rgba(117, 117, 117, 1)" />
            </Button>
            <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                <DrawerBody>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
            </Box>

        <Flex mr="20px" gap="25px" alignItems="center">
          <Flex gap="10px" cursor="pointer" alignItems="center">
            <TfiPencilAlt color="rgba(117, 117, 117, 1)" size="1.5em" />
            <Text>Write</Text>
          </Flex>
          <BsBell
            cursor="pointer"
            color="rgba(117, 117, 117, 1)"
            size="1.5em"
          />

          {/*****************************  Side Menu **********************************/}
          <DrawerExample />
        </Flex>
      </Flex>
    </>
  );
}

export default MainNavbar;
