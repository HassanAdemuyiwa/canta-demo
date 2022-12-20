import {
  Box,
  Text,
  Stack,
  Icon,
  Button,
  useColorMode,
  Avatar,
  WrapItem,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const Card = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.200", dark: "gray.700" };
  const textColor = { light: "gray.500", dark: "gray.100" };

  return (
    <Box
      w="400px"
      rounded="20px"
      overflow="hidden"
      boxShadow="sm"
      bg={bgColor[colorMode]}
    >
      <Stack>
        <Text
          as="h2"
          textAlign="center"
          fontSize="2xl"
          color={colorMode === "light" ? "#00264D" : "gray.200"}
          fontWeight="bold"
        >
          Review
        </Text>
        <WrapItem alignContent="center" justifyContent="center" py="10px">
          <Avatar bg="#00264D" size="2xl" />
        </WrapItem>
        <Text
          fontSize="xl"
          color={colorMode === "light" ? "#00264D" : "gray.200"}
          letterSpacing="wide"
          textAlign="center"
        >
          Nad
        </Text>
      </Stack>
      <Box p={5}>
        <Text isTruncated fontWeight="light" fontSize="md">
          I have found Canta services to be reliable
          <br /> in foreign currency exchange. They delivered <br /> exactly
          when they promised to delivery
        </Text>
        <Stack isInline justify="space-between" color={textColor[colorMode]}>
          <Box d="flex">
            <Box as="span">
              {Array(4)
                .fill("")
                .map((_, i) => (
                  <StarIcon color="yellow.500" key={i} />
                ))}
              <StarIcon mr="2" />
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Card;
