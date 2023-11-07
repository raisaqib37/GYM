import { Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'

const Gallery = () => {
  return (
    <div>
        <Stack m={{xl:'2rem 0',base:'1rem 0'}}>
                    <Heading ml={{xl:"16.3rem",base:"3rem"}}>Gym Gallery</Heading>
                    <Text ml={{xl:'9rem',base:0}}>Explore our State-of-the-Art facilities and dedicated members.</Text>
                </Stack>
        <Grid templateColumns={{xl:'13rem 18rem 13rem',base:'18rem'}} columnGap={2} rowGap={{base:2,xl:0}} >
            <GridItem>
                <Stack>
                 <Image src='./4.jpg' height={'17rem'} width={{xl:'13rem',base:'18rem'}}/>
                 <Image src='./5.jpg' height={'17rem'} width={{xl:'13rem',base:'18rem'}}/>
                 </Stack>
            </GridItem>
            <GridItem>
                <Stack>
                 <Image src='./2.jpg' height={'12rem'} width={'18rem'}/>
                 <Image src='./3.jpg' height={'12rem'} width={'18rem'}/>
                 <Image src='./manstrugle.png' height={'19rem'} width={'18rem'}/>
                 </Stack>
            </GridItem>
            <GridItem>
                <Stack>
                 <Image src='./man.png' height={'17rem'} width={{xl:'13rem',base:'18rem'}}/>
                 <Image src='./6.jpg' height={'17rem'} width={{xl:'13rem',base:'18rem'}}/>
                 </Stack>
            </GridItem>
        </Grid>
    </div>
  )
}

export default Gallery;