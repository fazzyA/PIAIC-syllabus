import * as React from "react";
import styles from '@/styles/Home.module.css'
import Navigation from '../components/navigation'
import Header from '../components/header'
import Hero from '../components/hero'

export default function Home() {
  return (
    <>

      <main className={styles.main}>
        <div >
          <Header />
          <Hero />
          <Navigation />
        </div>
        <div className={styles.center}>
        </div>
      </main>
    </>
  )
}