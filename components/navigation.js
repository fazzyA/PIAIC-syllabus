'use client';
import { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab,
         TabPanel, Heading, Card, CardHeader,
         CardBody, CardFooter, Stack, StackDivider,
         Box,Text } from '@chakra-ui/react'
import styles from '@/styles/Home.module.css'
  export default function Navigation() {

    return (
      <div  w="100%" color='black'>
      <Tabs m={2} variant='soft-rounded' colorScheme='green' >
      <TabList>
        <Tab  p={4}>Core Courses</Tab>
        <Tab  p={4} >Specialized Track</Tab>
        <Tab  p={4}>Outcome</Tab>
        <Tab  p={4}>Links</Tab>
      </TabList>
      <TabPanels  className={styles.center}  my={8} backgroundColor='light'>
        <TabPanel>
        <Card>
  <CardHeader>
    <Heading mt={6} color="blue" size='md'>Core Courses (Common in All Specializations):
</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Text my={4} pt='2' fontSize='sm'>
        Every participant of the program will start by completing the following three core courses:
        </Text>

        <Heading size='xs'>
        Quarter I (Core)
        </Heading>
        <Text pt='2' fontSize='sm'>
        CS-101: Object-Oriented Programming using TypeScript
        </Text>

        <Heading size='xs' >
        Quarter II (Core)
        </Heading>
        <Text pt='2' fontSize='sm'>
        W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform
        </Text>

        <Heading size='xs' >
        Quarter III (Core)
        </Heading>
        <Text pt='2' fontSize='sm'>
        $-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development
        </Text>

      </Box>
    </Stack>
  </CardBody>
</Card>


        </TabPanel>
        <TabPanel>
        After completing the first three quarters the participants will select one or more specializations consisting of two courses each:

Web 3.0 (Blockchain) and Metaverse Specialization
This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.

Quarter IV
W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps

Quarter V
MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences

Artificial Intelligence (AI) and Deep Learning Specialization
The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.

Quarter IV
AI-351: Developing Planet-Scale Intelligent APIs and Python Programming

Quarter V
AI-361: Deep Learning and MLOps

Cloud-Native Computing Specialization
The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes. 

Quarter IV
CN-351: Certified Kubernetes Application Developer (CKAD)

Quarter V
CN-361: Developing Multi-Cloud APIs using CDK for Terraform




Ambient Computing and IoT Specialization
The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices. 

Quarter IV
AC-351: Ambient Computing with Voice Assistants and Matter Protocol Devices

Quarter V
AC-361: Embedded Programming using C and Rust


Genomics and Bioinformatics Specialization
Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.

Quarter IV
Bio-351: Python for Biologists

Quarter V
Bio-361: Bioinformatics with Python


Network Programmability and Automation Specialization
More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.

Quarter IV
NPA-351: CCNA 200-301 Certification

Quarter V
NPA-361: Network Programmability and Automation

        </TabPanel>
        <TabPanel>
        The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.


Top 5 'Metaverse' jobs that will rule the future of tech industry
https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms 

Blockchain Developer Salary - Jun 2022
https://web3.career/web3-salaries/blockchain-developer 

Web3 Salaries Soar to $750,000 for Rank-and-File Devs
https://thedefiant.io/web3-soaring-salaries/ 

The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet’s Uncharted Waters
https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022 

How To Become Metaverse Developer: Scope, Skills, and Salary
https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/ 

        </TabPanel>
        <TabPanel>
        Admission Website: https://www.piaic.org/
Syllabus and Community Website: https://www.panaverse.co/ 
Facebook: https://www.facebook.com/groups/panaverse 
YouTube Live Channel: https://www.youtube.com/@panaverse/streams 
GitHub Repos: https://github.com/panaverse
Twitter: https://twitter.com/Panaverse_edu 
        </TabPanel>
      </TabPanels>
    </Tabs>
    </div>
    );
  }

