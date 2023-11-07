import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

const Hero = () => {
  
  return (
    
    <Grid
      templateColumns={{
        base: "1fr",
        lg: "1fr 1fr",
      }}
    >
      <GridItem mt={{ lg: "16rem", base: "2rem" }}>
        <VStack maxWidth={"40rem"} className="text">
          <Heading fontSize={"3rem"} className="heading" >
            Welcome to our State-of-the-Art Gym!
          </Heading>
          <Text mt={2}>
            Achieve your fitness goals with our expert trainers and top-notch
            equipments.
          </Text>
        </VStack>
        <HStack mt={4} ml={{ lg: 20, base: 4 }}>
          
          <Button
            bg={"black"}
            color={"white"}
            border={"2px solid black"}
            borderRadius={0}
            transition={"0.3s ease-in"}
            _hover={{
              bg: "none",
              color: "black",
              border: "2px solid black",
              borderRadius: 0,
            }}
          >
            Join
          </Button>
          <Button
            bg={"none"}
            border={"2px solid black"}
            borderRadius={0}
            _hover={{
              bg: "none",
            }}
          >
            Learn More
          </Button>
        </HStack>
      </GridItem>
      <GridItem
        mt={{
          xl: 10,
          lg: 12,
          base: 4,
        }}
      >
        <Image
        className="hero-img"
          src="./1man.png"
          height={{
            xl: "36rem",
          }}
        />
      </GridItem>
    </Grid>
  );
};

export default Hero;
