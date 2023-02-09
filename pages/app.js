import * as React from "react";
import Navigation from '../components/navigation'
import Header from '../components/header'
import sidebar from '../components/sidebar'

export default function Home() {
  return (
    <>

      <main >
        <div >
          <Header />
          <sidebar />
          <Navigation />
        </div>
        <div >
        </div>
      </main>
    </>
  )
}