import React from 'react'
import './App.scss'
import face from './img/mariana.jpg'
import bgImg from './img/kyndall-ramirez-m5Lx_VVCst0-unsplash.jpg'

function App() {
  return (
    <>
      <div className="bg"></div>
      <div className="App">
        <section className="text">
          <p className="greeting">Je m'appelle Mariana!</p>
          <p className="profession">Media & Development Professional</p>
          <hr />
          <p className="description">
            I spend my time refining ideas to convey my clients' messages and also mothering my little baby who is undoubtedly my muse.
          </p>
          <button>Talk to me</button>
        </section>
        <section className="photo">
          <img src={face} alt="Mariana face" />
        </section>
      </div>
    </>
  )
}

export default App
