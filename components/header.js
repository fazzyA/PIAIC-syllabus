'use client';
import { useStat, } from 'react';

import { useState } from 'react';
import { Divider, Heading} from '@chakra-ui/react'
import logo from '../assets/images/Logo.png'
import styles from '@/styles/Home.module.css'

  export default function Header() {

    return (
        <>
        <img src='./images.Logo.png' alt='logo'/>
        <logo />

        <Heading className={styles.center} my={30}>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)
      </Heading>
      <Divider className="" />

      </>
    );
  }

