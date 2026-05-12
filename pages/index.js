import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Neverelease</title>
        <meta name="description" content="Neverelease" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={styles.main}>
        <div style={styles.content}>
          <h1 style={styles.title}>Neverelease</h1>
          <p style={styles.subtitle}>Coming soon</p>
          <div style={styles.divider} />
          <p style={styles.text}>
            Something is brewing.
          </p>
        </div>
      </main>
    </>
  )
}

const styles = {
  main: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#0a0a0a',
    color: '#e0e0e0',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    margin: 0,
  },
  content: {
    textAlign: 'center',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 300,
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    margin: 0,
    color: '#ffffff',
  },
  subtitle: {
    fontSize: '1.1rem',
    fontWeight: 300,
    letterSpacing: '0.5em',
    textTransform: 'uppercase',
    color: '#888',
    marginTop: '1rem',
  },
  divider: {
    width: '60px',
    height: '1px',
    background: '#333',
    margin: '1.5rem auto',
  },
  text: {
    fontSize: '0.9rem',
    color: '#666',
    margin: 0,
  },
}
