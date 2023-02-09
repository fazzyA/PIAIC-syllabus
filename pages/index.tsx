'use client';
import { useStat, } from 'react';
import * as React from "react";
import { Inter } from '@next/font/google'
import Navigation from '../components/navigation'
import Header from '../components/header'
import Hero from '../components/hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <main >
        <div >
          <Header />
          <Hero />
          <Navigation />
        </div>
        <div >
        </div>
      </main>
    </>
  )
}
