'use client';
import { Grid, GridItem, } from '@chakra-ui/react'
import Top from './header'
import Tabs from './navigation'
import Sidebar from './sidebar'

  export default function Header() {

    return (
        <>
 <Grid

  gridTemplateRows={'50px 1fr 30px'}
  gridTemplateColumns={'150px 1fr'}
  h='200px'
  gap='6'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem p={3} >
  < Top />

  </GridItem>
  <GridItem >
    {/* Nav */}
  </GridItem>
  <GridItem >
    {/* <Sidebar /> */}
  </GridItem>
  <GridItem  borderRadius='lg' bg='grey.50'>
  <Tabs />
  </GridItem>
</Grid>

      </>
    );
  }
