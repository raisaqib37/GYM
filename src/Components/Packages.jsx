import {
    Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { RiBox2Fill } from "react-icons/ri";
import { BsCheck2 } from "react-icons/bs";

const Packages = () => {
  return (
    <div>
      <Stack alignItems={"center"}>
        <Text>Get Fit</Text>
        <Heading>Membership Options</Heading>
        <Text ml={{ xl: 0, base: 4 }}>
          Choose the perfect membership Plan for your fitness goals.
        </Text>
        <Tabs variant="soft-rounded" colorScheme="red">
          <TabList ml={{ base: "6rem", xl: "27rem" }}>
            <Tab>Monthly</Tab>
            <Tab>Yearly</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid templateColumns={{ xl: "1fr 1fr", base: "1fr" }} gap={6}>
                <GridItem border={"1px solid black"} p={{ xl: 8, base: 4 }}>
                  <HStack justifyContent={"space-between"}>
                    <Stack>
                      <Icon as={RiBox2Fill} fontSize={"26px"} />
                      <Heading fontSize={"16px"}>Basic Plan</Heading>
                      <Text>Access to gym facilities and equipments.</Text>
                    </Stack>
                    <Heading>$9/mo</Heading>
                  </HStack>
                  <div className="line"></div>
                  <Grid
                    templateColumns={{ xl: "1fr 1fr", base: "1fr" }}
                    templateRows={"2rem 2rem"}
                    mt={4}
                  >
                    <GridItem>
                      <HStack>
                        <Icon as={BsCheck2} />
                        <Text>Personalized Workout</Text>
                      </HStack>
                    </GridItem>
                    <GridItem>
                      <HStack>
                        <Icon as={BsCheck2} />
                        <Text>Nutrition Classes</Text>
                      </HStack>
                    </GridItem>
                    <GridItem>
                      <HStack>
                        <Icon as={BsCheck2} />
                        <Text>24/7 gym access</Text>
                      </HStack>
                    </GridItem>
                    <GridItem>
                      <HStack>
                        <Icon as={BsCheck2} />
                        <Text>Free Parking</Text>
                      </HStack>
                    </GridItem>
                  </Grid>
                  <Button mt={{xl:'8.9rem',base:'5rem'}} backgroundColor={"black"} color={'white'} width={'100%'} borderRadius={'none'} _hover={{bgColor:"white",color:'black',border:'1px solid black'}}>Get Started</Button>
                </GridItem>
                <GridItem border={"1px solid black"} p={{ xl: 8, base: 4 }}>
                  <HStack justifyContent={"space-between"}>
                    <Stack>
                      <Icon as={RiBox2Fill} fontSize={"26px"} />
                      <Heading fontSize={"16px"}>Basic Plan</Heading>
                      <Text>Access to gym facilities and equipments.</Text>
                    </Stack>
                    <Heading>$13/mo</Heading>
                  </HStack>
                  <div className="line"></div>
                  <Grid
                    templateColumns={{ xl: "1fr 1fr", base: "1fr" }}
                    templateRows={"2rem 2rem 2rem"}
                    mt={4}
                  >
                    <GridItem>
                      <HStack>
                        <Icon as={BsCheck2} />
                        <Text>Personalized Workout</Text>
                      </HStack>
                    </GridItem>
                    <GridItem>
                      <HStack>
                        <Icon as={BsCheck2} />
                        <Text>Group Classes</Text>
                      </HStack>
                    </GridItem>
                    <GridItem>
                      <HStack>
                        <Icon as={BsCheck2} />
                        <Text>Nutrition Classes</Text>
                      </HStack>
                    </GridItem>
                    <GridItem>
                      <HStack>
                        <Icon as={BsCheck2} />
                        <Text>24/7 gym access</Text>
                      </HStack>
                    </GridItem>
                    <GridItem>
                      <HStack>
                        <Icon as={BsCheck2} />
                        <Text>Locker Room</Text>
                      </HStack>
                    </GridItem>
                    <GridItem>
                      <HStack>
                        <Icon as={BsCheck2} />
                        <Text>Free Parking</Text>
                      </HStack>
                    </GridItem>
                  </Grid>
                  <Button mt={{xl:'7rem',base:'3rem'}} backgroundColor={"black"} color={'white'} width={'100%'} borderRadius={'none'} _hover={{bgColor:"white",color:'black',border:'1px solid black'}}>Get Started</Button>
                </GridItem>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid templateColumns={{ xl: "1fr 1fr", base: "1fr" }} gap={6}>
                <GridItem border={"1px solid black"} p={{ xl: 8, base: 4 }}>
                  <HStack justifyContent={"space-between"}>
                    <Stack>
                      <Icon as={RiBox2Fill} fontSize={"26px"} />
                      <Heading fontSize={"16px"}>Basic Plan</Heading>
                      <Text>Access to gym facilities and equipments.</Text>
                    </Stack>
                    <Heading>$100/Year</Heading>
                  </HStack>
                  <div className="line"></div>
                  <Grid
                    templateColumns={{ xl: "1fr 1fr", base: "1fr" }}
                    templateRows={"2rem 2rem"}
                    mt={4}
                  >
                    <GridItem>
                      <HStack>
                        <Icon as={BsCheck2} />
                        <Text>Personalized Workout</Text>
                      </HStack>
                    </GridItem>
                    <GridItem>
                      <HStack>
                        <Icon as={BsCheck2} />
                        <Text>Nutrition Classes</Text>
                      </HStack>
                    </GridItem>
                    <GridItem>
                      <HStack>
                        <Icon as={BsCheck2} />
                        <Text>24/7 gym access</Text>
                      </HStack>
                    </GridItem>
                    <GridItem>
                      <HStack>
                        <Icon as={BsCheck2} />
                        <Text>Free Parking</Text>
                      </HStack>
                    </GridItem>
                  </Grid>
                  <Button mt={{xl:'8.9rem',base:'5rem'}} backgroundColor={"black"} color={'white'} width={'100%'} borderRadius={'none'} _hover={{bgColor:"white",color:'black',border:'1px solid black'}}>Get Started</Button>
                </GridItem>
                <GridItem border={"1px solid black"} p={{ xl: 8, base: 4 }}>
                  <HStack justifyContent={"space-between"}>
                    <Stack>
                      <Icon as={RiBox2Fill} fontSize={"26px"} />
                      <Heading fontSize={"16px"}>Basic Plan</Heading>
                      <Text>Access to gym facilities and equipments.</Text>
                    </Stack>
                    <Heading>$150/Year</Heading>
                  </HStack>
                  <div className="line"></div>
                  <Grid
                    templateColumns={{ xl: "1fr 1fr", base: "1fr" }}
                    templateRows={"2rem 2rem 2rem"}
                    mt={4}
                  >
                    <GridItem>
                      <HStack>
                        <Icon as={BsCheck2} />
                        <Text>Personalized Workout</Text>
                      </HStack>
                    </GridItem>
                    <GridItem>
                      <HStack>
                        <Icon as={BsCheck2} />
                        <Text>Group Classes</Text>
                      </HStack>
                    </GridItem>
                    <GridItem>
                      <HStack>
                        <Icon as={BsCheck2} />
                        <Text>Nutrition Classes</Text>
                      </HStack>
                    </GridItem>
                    <GridItem>
                      <HStack>
                        <Icon as={BsCheck2} />
                        <Text>24/7 gym access</Text>
                      </HStack>
                    </GridItem>
                    <GridItem>
                      <HStack>
                        <Icon as={BsCheck2} />
                        <Text>Locker Room</Text>
                      </HStack>
                    </GridItem>
                    <GridItem>
                      <HStack>
                        <Icon as={BsCheck2} />
                        <Text>Free Parking</Text>
                      </HStack>
                    </GridItem>
                  </Grid>
                  <Button mt={{xl:'7rem',base:'3rem'}} backgroundColor={"black"} color={'white'} width={'100%'} borderRadius={'none'} _hover={{bgColor:"white",color:'black',border:'1px solid black'}}>Get Started</Button>
                </GridItem>
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </div>
  );
};

export default Packages;
