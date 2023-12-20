import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Movement Analytics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Movement Analytics" />
        <p className="description">We're a work in progress.</p>
      </main>

      <Footer />
    </div>
  );
}
