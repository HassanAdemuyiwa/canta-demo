import {
  Box,
  Image,
  Text,
  Flex,
  useColorMode,
  Divider,
} from "@chakra-ui/react";

const List = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.100", dark: "gray.700" };
  return (
    <Flex
      maxW="1000px"
      w={["90vw", "90vw", "90vw", "70vw"]}
      direction={["column", "column", "row", "row"]}
      justify="center"
      bg={bgColor[colorMode]}
      boxShadow="md"
      rounded="lg"
      p="4"
    >
      <Flex align="center" mx="2">
        <Image src="/flash-bolt.svg" />
        <Box mx="4">
          <Text as="h2" fontSize="xl" fontWeight="bold" mb="2">
            Usability
          </Text>
          <Text as="h3" fontWeight="light" fontSize="lg">
            Fund with your local currency and payout in 30+ currencies and be
            rest assured, your funds are held securely.
          </Text>
        </Box>
      </Flex>
      <Divider orientation="vertical" borderColor="gray.300" my="2" />
      <Flex align="center" mx="2">
        <Image src="/direction.svg" sizes="xl" />
        <Box m="4">
          <Text as="h2" fontSize="xl" fontWeight="bold" mb="2">
            Flexibility
          </Text>
          <Text as="h3" fontWeight="light" fontSize="lg">
            Not okay with our rate? Buy and sell fx amongst fellow KYC’ed Canta
            users. Businesses can generate invoices and globally accepted LPO
            (Licensing purchase order)
          </Text>
        </Box>
      </Flex>
      <Divider orientation="vertical" borderColor="gray.300" my="2" />
      <Flex align="center" mx="2">
        <Image src="/user.svg" />
        <Box mx="4">
          <Text as="h2" fontSize="xl" fontWeight="bold" mb="2">
            Real time
          </Text>
          <Text as="h3" fontWeight="light" fontSize="lg">
            We have customer personnel that would attend to you in real-time
            even though you’re offline.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default List;
