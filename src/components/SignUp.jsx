import { Box, Button, Center, Input, Stack, useToast } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      });
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
      navigate("/signin");
    } else {
      {
        toast({
          title: "Something went wrong",
          position: "top-right",
        });
        console.log(res.data);
      }
    }
    setLoading(false);
  };

  return (
    <Box
      backgroundColor={"wheat"}
      height={"100%"}
      padding={40}
      mb={-96}
      bgImage={"/bg.jpg"}
      bgPosition="center"
      bgRepeat="no-repeat"
    >
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
          borderWidth={2}
          borderRadius={"lg"}
          borderColor={"green"}
          py={12}
          bgColor={"limegreen"}
          bgPosition="center"
          bgRepeat="no-repeat"
          color={"white"}
          fontWeight={"bold"}
        >
          <Center fontSize={30}>
            <h1>Sign Up</h1>
          </Center>
          <Stack align={"center"}>
            <Input
              type="text"
              color={"white"}
              variant="outline"
              placeholder="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              type="text"
              color={"white"}
              variant="outline"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Input
              type="password"
              color={"white"}
              variant="outline"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button
              isLoading={loading}
              onClick={handleRegister}
              colorScheme="green"
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
