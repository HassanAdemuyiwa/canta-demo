import {
  Flex,
  useColorMode,
  Image,
  Stack,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = { light: "gray.300", dark: "gray.600" };
  const textColor = { light: "black", dark: "gray.100" };
  const router = useRouter();
  return (
    <Flex
      w="100w"
      bg={bgColor[colorMode]}
      color={textColor[colorMode]}
      align="center"
      justify="center"
      h="7vh"
      fontSize={["md", "lg", "xl", "xl"]}
      boxShadow="md"
      p={2}
    >
      <Flex w={["100vw", "100vw", "80vw", "80vw"]} justify="space-around">
        <Box>
          <Image
            h="4vh"
            src={
              colorMode === "light"
                ? "./canta-logo-blue.svg"
                : "./canta-logo-main.svg"
            }
            alt="canta logo"
          />
        </Box>
        <Stack
          spacing={8}
          color={textColor[colorMode]}
          justify="center"
          align="center"
          isInline
        >
          <Box position="relative" opacity={router.pathname !== "/" ? 0.4 : 1}>
            <Link href="/">Home</Link>
          </Box>
          <Box
            position="relative"
            opacity={router.pathname !== "/form" ? 0.4 : 1}
          >
            <Link href="/form">Form</Link>
          </Box>
          <Box
            position="relative"
            opacity={router.pathname !== "/card" ? 0.4 : 1}
          >
            <Link href="/card">Card</Link>
          </Box>
          <Box
            position="relative"
            opacity={router.pathname !== "/list" ? 0.4 : 1}
          >
            <Link href="/list">List</Link>
          </Box>
        </Stack>
        <Box>
          <IconButton
            rounded="full"
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          >
            Change Color Mode
          </IconButton>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
