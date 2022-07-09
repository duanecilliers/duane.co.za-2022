import type { NextPage } from 'next'
import Head from 'next/head'
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
        <div className="hero min-h-screen">
          <div className="hero-content">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-6xl font-bold font-primary">
                <span className="text-2xl mb-2 block">Duane Cilliers</span>
                Frontend Developer Based in Cape Town.
              </h1>
              <p className="py-6 leading-7">
                Currently working at{' '}
                <a className="link font-bold" href="https://reos.co.za/" target="_blank" rel="noreferrer">
                  reOS
                </a>
                &nbsp;and&nbsp;
                <a className="link font-bold" href="https://trustprotects.me/" target="_blank" rel="noreferrer">
                  Trust My Travel
                </a>
                . Exploring advanced TypeScript, creative development and toying with the latest tech.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
