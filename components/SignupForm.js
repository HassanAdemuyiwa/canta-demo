import {
  Input,
  Stack,
  Icon,
  InputGroup,
  InputLeftElement,
  Button,
  FormControl,
  Divider,
  FormHelperText,
} from "@chakra-ui/react";
import { LockIcon, EmailIcon, InfoIcon } from "@chakra-ui/icons";
const SignupForm = () => {
  return (
    <form action="submit">
      <FormControl>
        <Stack spacing={3}>
          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement children={<InfoIcon />} />
              <Input
                type="name"
                placeholder="First name"
                aria-lable="First name"
                variant="enclosed-colored"
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement children={<InfoIcon />} />
              <Input
                type="name"
                placeholder="Last name"
                aria-lable="Last name"
                variant="enclosed-colored"
              />
            </InputGroup>
          </FormControl>
          <Divider borderColor="gray.300" />
          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement children={<EmailIcon />} />
              <Input
                type="email"
                placeholder="Email"
                aria-lable="Email"
                variant="enclosed-colored"
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement children={<LockIcon />} />
              <Input
                type="password"
                placeholder="Password"
                aria-lable="Password"
                variant="enclosed-colored"
              />
            </InputGroup>
          </FormControl>
          <Button
            type="submit"
            boxShadow="sm"
            _hover={{ boxShadow: "md" }}
            _active={{ boxShadow: "lg" }}
          >
            Sign up!
          </Button>
          <FormHelperText textAlign="center">
            We will never share your email!
            <br />
            🤞🏼
          </FormHelperText>
        </Stack>
      </FormControl>
    </form>
  );
};

export default SignupForm;
