import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/hero'
import Navbar from '../components/navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Duane Cilliers</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
      </main>
    </div>
  )
}

export default Home
