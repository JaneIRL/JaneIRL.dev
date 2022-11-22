import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const anilistHref = decodeBase64('aHR0cHM6Ly9hbmlsaXN0LmNvL3VzZXIvSmFuZUlSTC8=')
  const emailAddress = `${decodeBase64('ZGVmbGF0ZS05MTE=')}@jane-irl.dev`
  const githubHref = decodeBase64('aHR0cHM6Ly9naXRodWIuY29tL0phbmVJUkw=')
  const mastodonHref = decodeBase64('aHR0cHM6Ly9raW5kLnNvY2lhbC9ASmFuZUlSTA==')
  const mastodonUsername = decodeBase64('QEphbmVJUkxAa2luZC5zb2NpYWw=')
  return (
    <div className={styles.container}>
      <Head>
        <title>JaneIRL</title>
        <meta name="description" content="Jane's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          hi, i&apos;m Jane
        </h1>

        <p className={styles.description}></p>

        <div className={styles.grid}>
          <a href={anilistHref} className={styles.card} rel="me">
            <h2>AniList &rarr;</h2>
            <p>my anime list &ndash; don&apos;t judge me for my poor tastes!</p>
          </a>

          <a href={`mailto:${emailAddress}`} className={styles.card} rel="me">
            <h2>Email &rarr;</h2>
            <p>this address is periodically refreshed to reduce spam.</p>
          </a>

          <a href={githubHref} className={styles.card} rel="me">
            <h2>GitHub &rarr;</h2>
            <p>one of my more obvious accounts on GitHub.</p>
          </a>

          <a href={mastodonHref} className={styles.card} rel="me">
            <h2>Mastodon &rarr;</h2>
            <p>social network!</p>
          </a>
        </div>
      </main>
    </div>
  )
}

function decodeBase64(base64: string): string {
  return Buffer.from(base64, 'base64').toString('utf-8')
}

async function writeToClipboard(content: string): Promise<void> {
  try {
    await navigator.clipboard?.writeText(content)
  } catch (e) {
    console.error('[writeClipboard]', e)
  }
}
