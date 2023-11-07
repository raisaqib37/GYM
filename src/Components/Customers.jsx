import {
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import {AiTwotoneStar} from 'react-icons/ai'
const Customers = () => {
    const Stars=[AiTwotoneStar,AiTwotoneStar,AiTwotoneStar,AiTwotoneStar,AiTwotoneStar];
  return (
    <div>
      <Grid templateRows={"9rem 1fr"}>
        <GridItem>
          <Stack ml={{ xl: "3rem", base: "2rem" }}>
            <Heading>Happy Members</Heading>
            <Text>Hear what our satisfied members have to say.</Text>
          </Stack>
        </GridItem>
        <GridItem>
          <Grid gap={8} ml={{ xl: "7rem", base: "2.5rem" }} templateColumns={{xl:"1fr 1fr",base:'1fr'}}>
            <GridItem>
              <Stack mt={{ xl: "3rem", base:0}}>
                <HStack>
                  <Image
                    className="image"
                    src="./man1.jpg"
                    backgroundPosition={"center"}
                    borderRadius={"50%"}
                    height={"2rem"}
                    width={"2rem"}
                  />
                  <Text fontWeight={"semibold"} position={"relative"} top={-1} fontSize={"14px"} ml={2}>
                    Jhon Doe
                  </Text>
                </HStack>
                <Text fontSize={"14px"} ml={12} position={"relative"} top={-6}>
                  Developer,DevFit
                </Text>
                <Text fontWeight={'semibold'}>I love this gym! It has top-notch equipment and friendly staff.</Text>
                <HStack>{Stars.map((item)=>{
                    return(
                        <Icon as={item} color="black"/>
                    )
                })}</HStack>
              </Stack>
            </GridItem>
            <GridItem>
              <Stack mt={{ xl: "3rem", base:0}}>
                <HStack>
                  <Image
                    className="image"
                    src="./man2.jpg"
                    backgroundPosition={"center"}
                    borderRadius={"50%"}
                    height={"2rem"}
                    width={"2rem"}
                  />
                  <Text fontWeight={"semibold"} position={"relative"} top={-1} fontSize={"14px"} ml={2}>
                    Mitchell Starc
                  </Text>
                </HStack>
                <Text fontSize={"14px"} ml={12} position={"relative"} top={-6}>
                  Marketing Manager,DevFit
                </Text>
                <Text fontWeight={'semibold'}>The gym has transformed my life. I feel healthier and stronger than ever.</Text>
                <HStack>{Stars.map((item)=>{
                    return(
                        <Icon as={item} color="black"/>
                    )
                })}</HStack>
              </Stack>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Customers;
