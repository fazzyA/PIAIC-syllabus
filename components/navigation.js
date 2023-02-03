import {
    Flex,
    Tabs,
    TabList,
    TabPanels,
    TabPanel,
    Tab,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';

  export default function Navigation() {

    return (
      <Flex   w="100%" color='black'>
      <Tabs >
      <TabList>
        <Tab>One</Tab>
        <Tab >Two</Tab>
        <Tab>Three</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>1</TabPanel>
        <TabPanel>2</TabPanel>
        <TabPanel>3</TabPanel>
      </TabPanels>
    </Tabs>
    </Flex>
    );
  }

