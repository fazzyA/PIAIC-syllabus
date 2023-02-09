'use client';

import { Divider, Heading, Flex, Box, Spacer, ButtonGroup, Button,} from '@chakra-ui/react'
import logo from '../assets/images/Logo.png'


  export default function Header() {

    return (
        <>
        <img src='./logo.png' alt='logo'/>
        {/* <logo /> */}
        <Flex minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
    <Heading size='md'>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</Heading>
  </Box>
  <Spacer />

</Flex>

      <Divider className="" />

      </>
    );
  }

