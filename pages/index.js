import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Home() {
  const [dots, setDots] = useState('')
  const [code] = useState([
    '> git init',
    '> npm install neverelease',
    '> npm run build',
    '> ERROR: nothing to build',
    '> cat README.md',
    '  # Neverelease',
    '  # What is this? Nobody knows.',
    '  # Will it release? Probably not.',
    '> git commit -m "add mystery"',
    '> git push --force',
    '> rm -rf .',
    '> echo "something is brewing"',
    '> █',
  ])
  const [visibleLines, setVisibleLines] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(p => p.length >= 4 ? '' : p + '.')
    }, 600)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (visibleLines < code.length) {
      const t = setTimeout(() => setVisibleLines(v => v + 1), 2000)
      return () => clearTimeout(t)
    }
  }, [visibleLines, code.length])

  return (
    <>
      <Head>
        <title>Neverelease</title>
        <meta name="description" content="Neverelease — something is brewing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Courier New', Courier, monospace;
          background: #0a0c0a;
          color: #33ff33;
          min-height: 100vh;
          overflow: hidden;
        }
        ::selection { background: #33ff3344; }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes glitch1 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 1px); }
          40% { transform: translate(2px, -1px); }
          60% { transform: translate(-1px, 2px); }
          80% { transform: translate(1px, -2px); }
        }
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          45% { opacity: 1; }
          50% { opacity: 0; }
          55% { opacity: 1; }
        }
        .terminal-text {
          white-space: pre-wrap;
          font-size: 0.85rem;
          line-height: 1.6;
          opacity: 0.8;
        }
        .glitch {
          animation: glitch1 0.3s ease-in-out infinite;
        }
      `}</style>

      {/* CRT scanline overlay */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 10,
        background: 'linear-gradient(transparent 50%, rgba(0,0,0,0.05) 50%)',
        backgroundSize: '100% 4px',
      }}/>

      <div style={styles.container}>
        {/* Terminal header */}
        <div style={styles.terminalHeader}>
          <div style={styles.terminalDot} />
          <div style={{...styles.terminalDot, background:'#fbbf24'}} />
          <div style={{...styles.terminalDot, background:'#22c55e'}} />
          <span style={{fontSize:'0.7rem', marginLeft:'0.75rem', opacity:0.4}}>neverelease@unknown:~</span>
        </div>

        {/* Terminal body */}
        <div style={styles.terminalBody}>
          <div style={{marginBottom:'1rem'}} className="glitch">
            <span style={{fontSize:'2rem', fontWeight:'bold', letterSpacing:'0.2em'}}>NEVERELEASE</span>
          </div>
          <div style={{fontSize:'0.8rem', opacity:0.5, marginBottom:'2rem'}}>
            STATUS: CLASSIFIED — VERSION: 0.0.0 — BUILDS: 0
          </div>

          <div style={styles.cursorLine}>
            <span style={{color:'#22c55e'}}>$</span> ./decrypt{'.'}{dots}
          </div>

          <div style={{marginTop:'1.5rem'}}>
            {code.slice(0, visibleLines).map((line, i) => (
              <div key={i} className="terminal-text" style={{
                color: line.includes('ERROR') ? '#ef4444' : line.includes('#') ? '#555' : '#33ff33',
                opacity: line.includes('█') ? 1 : 0.7,
                animation: i === visibleLines - 1 ? 'flicker 3s ease-in-out' : 'none',
              }}>
                {line}
              </div>
            ))}
          </div>

          <div style={{marginTop:'2rem', fontSize:'0.7rem', opacity:0.3, textAlign:'center'}}>
            {'>'} last commit: never{'>'} next release: unknown{'>'}
          </div>
        </div>

        {/* Footer */}
        <div style={{marginTop:'2rem', textAlign:'center', fontSize:'0.65rem', opacity:0.15}}>
          <a href="https://stackmind-portfolio.vercel.app" style={{color:'#33ff33', textDecoration:'none'}}>
            [ stack mind universe ]
          </a>
        </div>
      </div>
    </>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    background: 'radial-gradient(ellipse at 50% 50%, #0d1a0d 0%, #0a0c0a 100%)',
  },
  terminalHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    background: '#1a1c1a',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    minWidth: 'min(500px, 90vw)',
    borderBottom: '1px solid #2a2c2a',
  },
  terminalDot: {
    width: '10px', height: '10px', borderRadius: '50%',
    background: '#ef4444', marginRight: '0.4rem',
  },
  terminalBody: {
    padding: '1.5rem',
    background: '#0d0f0d',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
    minWidth: 'min(500px, 90vw)',
    minHeight: '350px',
    border: '1px solid #1a1c1a',
    borderTop: 'none',
  },
  cursorLine: {
    fontSize: '0.9rem',
    color: '#33ff33',
    fontFamily: "'Courier New', Courier, monospace",
    opacity: 0.9,
  },
}
