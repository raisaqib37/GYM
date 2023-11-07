import {
  Box,
  Grid,
  GridItem,
  Stack,
  Heading,
  Icon,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { RiBox1Fill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/Io";

const Discover = () => {
  return (
    <div>
      <Grid templateColumns={"1fr"} templateRows={{base:"1fr 1fr 0.4rem",xl:"1fr 1fr 1fr"}}>
        <GridItem>
          <Grid templateColumns={{ lg: "1fr 1fr", base: "1fr" }}>
            <GridItem maxWidth={"30rem"} color={"black"}>
              <Text>Discover</Text>
              <Heading>
                Experience the best Fitness Facilities in the Town
              </Heading>
            </GridItem>
            <GridItem mt={{ base: 4 }} maxWidth={"34rem"} color={"black"}>
              <Text fontSize={"14px"}>
                At our gym, we offer top-notch amenities to enhance your fitness
                journey. From our luxurious sauna to our refreshing pool and
                energizing group fitness classes, we have everything you need to
                achieve your fitness goals.
              </Text>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem position={{base:'relative',xl:'block'}} top={{base:'-13rem',xl:0}}>
          <Grid templateColumns={{ xl: "1fr 1fr 1fr", base: "1fr" }} rowGap={8}>
            <GridItem>
              <Stack>
                <Icon as={RiBox1Fill} fontSize={"40px"} />
                <Heading>Luxurious Sauna</Heading>
                <Text>Relax and rejuvenate in our State-of-the-Art Sauna.</Text>
              </Stack>
            </GridItem>
            <GridItem>
              <Stack>
                <Icon as={RiBox1Fill} fontSize={"40px"} />
                <Heading>Refreshing Pool</Heading>
                <Text>
                  Dive into our sparkling pool and stay fit while having fun.
                </Text>
              </Stack>
            </GridItem>
            <GridItem>
              <Stack>
                <Icon as={RiBox1Fill} fontSize={"40px"} />
                <Heading>Energizing Group Fitness Classes</Heading>
                <Text>
                  Join our Dynamic group fitness classes and stay Motivated.
                </Text>
              </Stack>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem position={{base:'relative',xl:'block'}} top={{base:'-10rem',xl:0}}>
          <HStack>
            <Button
              borderRadius={"none"}
              bg={"none"}
              border={"1px solid black"}
              _hover={{ bg: "black", color: "white" }}
            >
              Learn More
            </Button>
            <Button
              borderRadius={"none"}
              bg={"none"}
              border={"none"}
              _hover={{ bg: "none" }}
            >
              Sign Up <Icon as={IoIosArrowForward} />
            </Button>
          </HStack>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Discover;
