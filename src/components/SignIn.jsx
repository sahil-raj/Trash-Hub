import { Box, Button, Center, Icon, Input, InputGroup, InputLeftElement, Stack, useColorModeValue, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AtSignIcon, LockIcon, SunIcon } from "@chakra-ui/icons";

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
            setLoading(false)
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
            backgroundColor={""}
            height={"100%"}
            padding={40}
            mb={-96}
            bgPosition="center"
            bgRepeat="no-repeat"
            overflowX={"hidden"}
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
                mb={10}
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
                    // borderColor={"pink.400"}
                    py={12}
                    bgColor={"white"}
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    color={"white"}
                    fontWeight={"bold"}
                    boxShadow={"2xl"}
                >
                    <Center fontSize={30} color={'black'}>
                        <h1>Sign In</h1>
                    </Center>
                    <Stack align={"center"}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                color="gray.300"
                                fontSize="1.2em"
                            >
                                <AtSignIcon color={'gray.300'} />
                            </InputLeftElement>
                            <Input
                                required
                                color={'black'}
                                type="text"
                                variant="outline"
                                // borderColor={'gray.500'}
                                placeholder="Username"
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                color="gray.300"
                                fontSize="1.2em">
                                <LockIcon color={"gray.300"} />
                            </InputLeftElement>
                            <Input
                                color={'black'}
                                required
                                type="password"
                                variant="outline"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </InputGroup>
                        <Button
                            isLoading={loading}
                            onClick={handleSignin}
                            color={'white'}
                            colorScheme="red"
                            // bg={'pink.400'}
                            _hover={{
                                bgColor: 'pink.300'
                            }}
                        >
                            Sign In
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

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
  

export default SignIn;
