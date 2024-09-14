import { Box, Button, Center, Input, Stack, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      navigate("/ProductList");
    }
  }, []);

  const handleSignin = async () => {
    setLoading(true);
    if (!username || !password) {
      toast({
        title: "Please enter all fields",
        position: "top-right",
      });
      return;
    }

    const res = await axios.post(
      "https://trashtag.vercel.app/ecoperks/manufacturer/login",
      {
        username,
        password,
      }
    );

    if (res.status == 200) {
      navigate("/ProductList");
      if (res.data.success) {
        localStorage.setItem("userId", res.data.id);
      }
    } else {
      toast({
        title: "Please check credentials",
        position: "top-right",
      });
      console.log(res.data);
      return;
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
            <h1>Sign In</h1>
          </Center>
          <Stack align={"center"}>
            <Input
              color={"white"}
              type="text"
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
              onClick={handleSignin}
              colorScheme="green"
            >
              Sign In
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
