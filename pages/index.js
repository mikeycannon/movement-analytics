import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Movement Analytics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Movement Analytics" />
        <p className="description">
          We are a work in progress.</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
