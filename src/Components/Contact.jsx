import { Grid, GridItem, HStack, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import {LuMail} from 'react-icons/lu'
import {FiPhone} from 'react-icons/fi'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {IoIosArrowForward} from 'react-icons/Io'
const Contact = () => {
  return (
    <div>
        <Stack ml={{xl:'3rem',base:'1.2rem'}}>
            <Heading>Contact Information</Heading>
            <Text>Get in touch with us for further Inquiries and Assistance. </Text>
        </Stack>
        <Grid templateColumns={{xl:'1fr 1fr',base:'1fr'}}>
            <GridItem>
                <Stack m={{xl:'1rem 4rem',base:'2rem 3rem'}}>
                    <Icon as={LuMail} fontSize={"27px"} />
                    <Heading fontSize={'20px'}>Email</Heading>
                    <Text textDecoration={'underline'}>hello@gym.com</Text>
                </Stack>
                <Stack m={{xl:'1rem 4rem',base:'2rem 3rem'}}>
                    <Icon as={FiPhone} fontSize={"27px"} />
                    <Heading fontSize={'20px'}>Phone</Heading>
                    <Text textDecoration={'underline'}>+1 (555) 123-4567</Text>
                </Stack>
                <Stack m={{xl:'1rem 4rem',base:'2rem 3rem'}}>
                    <Icon as={HiOutlineLocationMarker} fontSize={"27px"} />
                    <Heading fontSize={'20px'}>Office</Heading>
                    <Text textDecoration={'underline'}>123Gym St,Sydney NSW 2000</Text>
                </Stack>
                <HStack cursor={'pointer'} m={{xl:'1rem 4rem',base:'2rem 3rem'}}>
                <Text>Get Direction</Text>
                <Icon as={IoIosArrowForward} />
                </HStack>
            </GridItem>
            <GridItem>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.715400133079!2d72.88262647534341!3d30.07369131718479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393d193f0a192261%3A0xf521428f61fc240b!2sAl%20Zaman%20medical%20store!5e0!3m2!1sen!2s!4v1697962222424!5m2!1sen!2s" width="600" height="450" style={{border:0}} />
            </GridItem>
        </Grid>
    </div>
  )
}

export default Contact