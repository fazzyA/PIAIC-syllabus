import * as React from "react";
import bodyContent from '../components/bodyContent'
import Header from '../components/header'
import sidebar from '../components/sidebar'

export default function Home() {
  return (
    <>

      <main >
        <div >
          <Header />
          <sidebar />
          <bodyContent />
        </div>
        <div >
        </div>
      </main>
    </>
  )
}