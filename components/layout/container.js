import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";



const Container = ({ children }) => {
  return (
    <Box maxW="1280px" px={4} mx="auto">
      {children}
    </Box>
  );
};

export default Container;
