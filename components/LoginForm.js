import { LockIcon, EmailIcon } from "@chakra-ui/icons";
import {
  Input,
  Stack,
  Icon,
  InputGroup,
  InputLeftElement,
  Button,
  FormControl,
  FormHelperText,
} from "@chakra-ui/react";
const LoginForm = () => {
  return (
    <form action="submit">
      <FormControl>
        <Stack spacing={3}>
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
            Login
          </Button>
          <FormHelperText textAlign="center">
            Welcome Home!
            <br />
            🏠
          </FormHelperText>
        </Stack>
      </FormControl>
    </form>
  );
};

export default LoginForm;
