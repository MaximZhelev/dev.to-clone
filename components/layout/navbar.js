import {
    Box,
    Avatar,
    Button,
    HStack,
    VStack,
    Image,
    Input,
    Spacer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text,
    Link,
    MenuDivider
  } from "@chakra-ui/react";
  import Container from "./container";
  import { ReactNode } from "react";
  

  const IconButton = ({ children }) => {
    return (
      <Button
        padding="0.4rem"
        width="auto"
        height="auto"
        borderRadius="100%"
        bg="transparent"
        _hover={{ bg: "#f6f6f6" }}
      >
        {children}
      </Button>
    );
  };
  
  const Navbar = () => {
    return (
      <Box
        py="2"
        boxShadow="sm"
        border="0 solid #e5e7eb"
        position="fixed"
        top="0"
        bg="#fff"
        width="100%"
        zIndex="1"
      >
        <Container>
          <HStack spacing={4}>
            <Image src="/assets/images/logo.svg" />
            <Input
              maxW="26rem"
              placeholder="Search..."
              borderColor="#b5bdc4"
              borderRadius="5px"
              d={{ base: "none", md: "block" }}
            />
            <Spacer />
            <HStack spacing={3}>
              <Button
                color="#fff"
                borderRadius="4px"
                bg="#3b49df"
                _hover={{ bg: "#323ebe" }}
              >
                Create a post
              </Button>
              <IconButton>
                <Image src="/assets/images/notification.svg" />
              </IconButton>
              <IconButton>
                <Image src="/assets/images/bell.svg" />
              </IconButton>
              <Menu isLazy>
                <MenuButton as={Button} size="sm" px={0} py={0} rounded="full">
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.githubusercontent.com/u/50552669?s=400&u=4bd38e0a6b3321db2a20a2b9733cdbcdf1a9efbc&v=4"}
                  />
                </MenuButton>
                <MenuList
                  zIndex={5}
                  border="2px solid"
                  borderColor="gray.700"
                  boxShadow="4px 4px 0"
                  boxColor="gray.700"
                >
                  <Link
                    href="https://github.com/MaximZhelev"
                    _hover={{ textDecoration: "none" }}
                    isExternal
                  >
                    <MenuItem>
                      <VStack justify="start" alignItems="left">
                        <Text fontWeight="500">Maxim Zhelev</Text>
                        <Text size="sm" color="gray.500" mt="0 !important">
                          @maximzhelev
                        </Text>
                      </VStack>
                    </MenuItem>
                  </Link>
                  <MenuDivider />
                  <MenuItem>
                    <Text fontWeight="500">Dashboard</Text>
                  </MenuItem>
                  <MenuItem>
                    <Text fontWeight="500">Create Post</Text>
                  </MenuItem>
                  <MenuItem>
                    <Text fontWeight="500">Reading List</Text>
                  </MenuItem>
                  <MenuItem>
                    <Text fontWeight="500">Settings</Text>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Text fontWeight="500">Sign Out</Text>
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </HStack>
        </Container>
      </Box>
    );
  };
  
  export default Navbar;
  