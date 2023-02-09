'use client';
import * as React from "react";
import { Inter } from '@next/font/google'
import Layout from '../components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main >
        <div>
          <Layout />
        </div>
      </main>
    </>
  )
}
