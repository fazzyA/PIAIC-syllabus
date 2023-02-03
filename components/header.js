import { Divider, Heading} from '@chakra-ui/react'
import logo from '../assets/images/Logo.png'

  export default function Header() {

    return (
        <>
        <img src='./images.Logo.png' alt='logo'/>
        <logo />

        <Heading my={30}>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)
      </Heading>
      <Divider className="" />

      </>
    );
  }

