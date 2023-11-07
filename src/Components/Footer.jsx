import {
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { BiCopyright } from "react-icons/bi";
const Footer = () => {
  return (
    <div>
      <Grid templateColumns={{ xl: "1fr 1fr", base: "1fr" }} pt={8}>
        <GridItem>
          <Stack ml={{ xl: "3rem", base: "1rem" }}>
            <Heading>State of the Art</Heading>
            <Text ml={{ xl: "1.3rem", base: "1.3rem" }}>Address:</Text>
            <Text ml={{ xl: "1.3rem", base: "1.3rem" }}>
              Level 1, 12 Sample St,Sydney NSW 2000
            </Text>
          </Stack>
          <Stack mt={{ xl: "4", base: "2" }} ml={{ xl: "3rem", base: "1rem" }}>
            <Text ml={{ xl: "1.3rem", base: "1.3rem" }}>Contact:</Text>
            <Text
              ml={{ xl: "1.3rem", base: "1.3rem" }}
              textDecoration={"underline"}
            >
              +1 (555) 123-4567
            </Text>
          </Stack>
          <HStack
            mt={{ xl: "4", base: "2" }}
            ml={{ xl: "4rem", base: "2.3rem" }}
          >
            <Icon as={BsFacebook} fontSize={"22px"} />
            <Icon as={BsInstagram} fontSize={"22px"} />
            <Icon as={RiTwitterXFill} fontSize={"22px"} />
            <Icon as={BsLinkedin} fontSize={"22px"} />
            <Icon as={AiFillYoutube} fontSize={"22px"} />
          </HStack>
        </GridItem>
        <GridItem>
          <Grid
            mt={8}
            p={8}
            templateColumns={{ xl: "1fr 1fr", base: "1fr" }}
            textDecoration={"underline"}
          >
            <GridItem>
              <Stack>
                <Text>Link one</Text>
                <Text>Link Two</Text>
                <Text>Link Three</Text>
                <Text>Link Four</Text>
                <Text>Link Five</Text>
              </Stack>
            </GridItem>
            <GridItem>
              <Stack>
                <Text>Link Six</Text>
                <Text>Link Seven</Text>
                <Text>Link Eight</Text>
                <Text>Link Nine</Text>
                <Text>Link Ten</Text>
              </Stack>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
      <div className="line2"></div>
      <Grid gap={6}  p={8} templateColumns={{ xl: "1fr 1fr", base: "1fr" }} ml={{xl:'13rem',base:'2rem'}} >
        <GridItem>
          <HStack>
            <Icon as={BiCopyright} />
            <Text>2023 SAQIB. All Rights are Reserved.</Text>
          </HStack>
        </GridItem>
        <GridItem>
              <HStack textDecor={'underline'}><Text>Privacy Policy</Text>
              <Text>Terms and Services</Text>
              <Text>Cookies Settings</Text></HStack>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Footer;
