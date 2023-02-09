'use client';
import { Image } from '@chakra-ui/react'
import { Divider, Heading, Flex, Box, Spacer, ButtonGroup, Button,} from '@chakra-ui/react'


  export default function Header() {

    return (
        <>

        <Flex textAlign={[ 'center' ]} minWidth='max-content' alignItems='center' gap='20'>
        <Image width={20} src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/PIAIC_Logo.svg/800px-PIAIC_Logo.svg.png' alt='logo'/>

        <Heading   size='lg'>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</Heading>
        <Spacer />

           </Flex>

      <Divider className="" />

      </>
    );
  }

