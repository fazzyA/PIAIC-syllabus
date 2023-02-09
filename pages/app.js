import * as React from "react";
import Navigation from '../components/navigation'
import Header from '../components/header'
import Hero from '../components/hero'

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