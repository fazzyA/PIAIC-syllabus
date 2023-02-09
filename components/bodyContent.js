'use client';
import { Tabs, TabList, TabPanels, Tab,
         TabPanel, Heading, Card, CardHeader,
         CardBody, CardFooter, Stack, StackDivider,
         Box, Text } from '@chakra-ui/react'
         import { Link } from '@chakra-ui/react'
         import { ExternalLinkIcon } from '@chakra-ui/icons'

  export default function bodyContent() {

    return (
            <>
            <Card mt={8}>
  <CardBody>
            <Text textAlign={[ 'center' ]} p={4} >
            <Link  color='teal.500'  href='https://www.piaic.org' isExternal>
            https://www.piaic.org <ExternalLinkIcon mx='2px' />
</Link>

       <Heading  fontSize="md" textAlign={[ 'center' ]}  >Certified Web 3.0 and Metaverse Developer</Heading>
       <Heading  fontSize="md" textAlign={[ 'center' ]}  >        A One and Quarter Years Panaverse DAO Earn as you Learn Program
</Heading>

       <Heading  fontSize="md" textAlign={[ 'center' ]}  >        Getting Ready for the Next Generation of the Internet
</Heading>

       <Heading  fontSize="md" textAlign={[ 'center' ]}  >        Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient <br />Computing/IoT, Network Automation, and Bioinformatics Technologies
</Heading>

       <Heading  fontSize="md" textAlign={[ 'center' ]}  > The Panaverse Community and Syllabus: 
       <Link  color='teal.500'  href='https://www.panaverse.co' isExternal>
       https://www.panaverse.co<ExternalLinkIcon mx='2px' />
</Link>
       </Heading>

       <Heading  fontSize="md" textAlign={[ 'center' ]}  >        Version 6.0.0 - March 2023
</Heading>

<div pt={5}>
<Text textAlign={[ 'center' ]} p={4} >
        The internet is without a doubt the most important technological development in human history. Web3, 3D Metaverse, AI, IoT, Cloud, and Edge technologies expand the internet as we know it by introducing novel features and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud and edge computing, voice computing, ambient computing, and more.

        Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict a future internet vision centered on decentralized technologies and virtual worlds. Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030.
        https://www.citivelocity.com/citigps/metaverse-and-money/
</Text>

        <Heading fontSize="md" color='teal.300'  > The Program in a Nutshell: Earn While You Learn</Heading>
        In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.

        <Heading fontSize="md" color='teal.300' >  Program of Studies</Heading>
        This curriculum is intended for beginners who want to learn software development from the ground up. The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.
        </div>
      </Text>
      </CardBody>
</Card>
      <div w="100%" color='black'>
          <Tabs m={2} >
            <TabList>
              <Tab p={4}>Core Courses</Tab>
              <Tab p={4}>Specialized Track</Tab>
              <Tab p={4}>Outcome</Tab>
              <Tab p={4}>Links</Tab>
            </TabList>
            <TabPanels my={8} backgroundColor='light'>
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

                        <Heading size='xs'>
                          Quarter II (Core)
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                          W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform
                        </Text>

                        <Heading size='xs'>
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
        </div></>
    );
  }

