import { Box, Text, Link, Stack } from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      mt={44}
      py={4}
      backgroundColor="gray.800"
      color="white"
      textAlign="center"
    >
      <Stack spacing={4}>
        <Text>All rights reserved.</Text>
        <Stack direction="row" spacing={6} justify="center">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
          <Link href="/ContactUs">Contact Us</Link>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Footer;
