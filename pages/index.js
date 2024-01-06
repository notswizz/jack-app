import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';




export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Jack Smith's Resume</title>
        <meta name="description" content="Jack Smith's Professional Resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <About />
        <Projects />
        <Experience />
      
     
      </main>
      <Footer />
    </div>
  );
}
