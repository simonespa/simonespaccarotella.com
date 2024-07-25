import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Simone Spaccarotella 👷 Software and digital content creator</title>
        <meta name="description" content="Simone Spaccarotella, software engineer team lead for BBC Sounds, musician for passion" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        strategy="afterInteractive"
      />
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <a
              href="https://medium.simonespaccarotella.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to my {' '}
              <Image
                src="/medium_logo.svg"
                alt="Medium Logo"
                className={styles.mediumLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div
            className="badge-base LI-profile-badge badge-base__link LI-simple-link"
            data-locale="en_US"
            data-size="large"
            data-theme="dark"
            data-type="HORIZONTAL"
            data-vanity="simonespaccarotella"
            data-version="v1">
              <a href="https://uk.linkedin.com/in/simonespaccarotella?trk=profile-badge"></a>
          </div>

        <div className={styles.grid}>
          <a
            href="https://github.com/simonespa"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              GitHub <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find information about my work and projects.
            </p>
          </a>

          <a
            href="https://www.slideshare.net/simonespaccarotella"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              SlideShare <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Presentations published over the years.
            </p>
          </a>

          <a
            href="https://soundcloud.com/simonespaccarotella"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              SoundCloud <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              My creative musical side.
            </p>
          </a>

          <a
            href="https://www.youtube.com/@about.saimon"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              YouTube <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              My creative video making side.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
