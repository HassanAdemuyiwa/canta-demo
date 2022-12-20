// pages/_app.js
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      {/* <Flex direction="column" align="center" justify="center"> */}
      <Navbar />
      <Flex justify="center" align="center" w="100%" h="93vh">
        <Component {...pageProps} />
      </Flex>
      {/* </Flex> */}
    </ChakraProvider>
  );
}

export default MyApp;
