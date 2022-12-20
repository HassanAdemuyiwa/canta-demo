import { Box, useColorMode, Link, IconButton, Text } from "@chakra-ui/react";

const index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const textColor = { light: "#00264D", dark: "gray.100" };
  return (
    <Box fontSize="2xl" textAlign="center">
      <Text as="h1" fontSize="6xl" color={textColor[colorMode]}>
        Pay your suppliers anywhere in the world
      </Text>
    </Box>
  );
};

export default index;
