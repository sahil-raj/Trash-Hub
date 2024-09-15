import { Box, Button, Center, Icon, IconButton, Input, InputGroup, InputLeftElement, Stack, useColorModeValue, useToast } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AtSignIcon, LockIcon, SunIcon } from "@chakra-ui/icons";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const handleRegister = async () => {
    setLoading(true);
    if (!username || !password || !name) {
      toast({
        title: "Please enter all fields",
        position: "top-right",
        duration: 2000
      });
      setLoading(false)
      return;
    }
    const res = await axios.post(
      `https://trashtag.vercel.app/ecoperks/manufacturer/register`,
      {
        username,
        name,
        password,
      }
    );
    if (res.status == 200) {
      window.location.href ='/signin'
    } else {
      {
        toast({
          title: "Something went wrong",
          position: "top-right",
          duration: 2000
        });
        console.log(res.data);
        setLoading(false);
      }
    }
    setLoading(false);
  };

  return (
    <Box
      backgroundColor={""}
      height={"100%"}
      padding={40}
      mb={-96}
      // bgImage={"/bg.jpg"}
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Blob
        w={"100%"}
        h={"100%"}
        position={"absolute"}
        top={"-20%"}
        left={0}
        zIndex={-1}
        color={useColorModeValue("red.50", "red.400")}
      />
      <Box
        height={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          display="flex"
          flexDirection={"column"}
          gap={4}
          alignItems="center"
          justifyContent="center"
          width="33%"
          padding={4}
          borderRadius={"lg"}
          borderColor={""}
          py={12}
          bgColor={"white"}
          bgPosition="center"
          bgRepeat="no-repeat"
          color={"white"}
          fontWeight={"bold"}
          boxShadow={'2xl'}
        >
          <Center fontSize={30} color={"black"}>
            <h1>Sign Up</h1>
          </Center>
          <Stack align={"center"}>
            <InputGroup>
              <InputLeftElement>
                <SunIcon color={'gray.300'} />
              </InputLeftElement>
              <Input
                type="text"
                required
                color={"black"}
                variant="outline"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement>
                <AtSignIcon color={'gray.300'} />
              </InputLeftElement>
              <Input
                required
                type="text"
                color={"black"}
                variant="outline"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              /></InputGroup>
            <InputGroup>
              <InputLeftElement>
                <LockIcon color={'gray.300'} />
              </InputLeftElement>
              <Input
                type="password"
                color={"black"}
                required
                variant="outline"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              /></InputGroup>
            <Button
              isLoading={loading}
              onClick={handleRegister}
              colorScheme="red"
            >
              Sign Up
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;

const Blob = (props) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 378 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};