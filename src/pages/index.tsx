import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Spaccarotella&apos;s Blog</title>
      </Head>

      <header>
        <nav></nav>
      </header>

      <main>
        <section>
          <article>
            <header>
              <h2>The Planet Earth</h2>
              <p>Posted on Wednesday, <time dateTime="2017-10-04">4 October 2017</time> by Jane Smith</p>
            </header>
            <p>We live on a planet that is blue and green, with so many things still unseen.</p>
            <p><a href="https://example.com/the-planet-earth/">Continue reading....</a></p>
          </article>
        </section>
        <section></section>
        <section></section>
      </main>

      <footer></footer>
    </>
  );
}
