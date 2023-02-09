'use client';
import { SimpleGrid, Box, Center, Square, Circle } from '@chakra-ui/react'
  export default function sidebar() {

    return (
        <>
<SimpleGrid my={4}  mx="2" columns={1} spacingX='40px' spacingY='20px'>

  <Box textAlign={'center'} p={2} borderRadius='lg' bg='gray.300' >
    Core Courses
    </Box>

  <Box textAlign={'center'} p={2}  borderRadius='lg' bg='gray.300' >Specialized Track</Box>
  <Box textAlign={'center'} p={2}  borderRadius='lg' bg='gray.300' >Outcome</Box>
  <Box  textAlign={'center'} p={2} borderRadius='lg' bg='gray.300' height='40px'>Links</Box>
</SimpleGrid>

      </>
    );
  }
