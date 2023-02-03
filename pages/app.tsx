import * as React from "react";
import styles from '@/styles/Home.module.css'
import Navigation from '../components/navigation'
import Header from '../components/header'


export default function Home() {
  return (
    <>

      <main className={styles.main}>
        <div >
          <Header />
          <Navigation />
        </div>
        <div className={styles.center}>
        </div>
      </main>
    </>
  )
}