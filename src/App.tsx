import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';

export function App() {
  const bgImgage = require('./assets/backgroundImage_.png');

  
  return (
    <>
      <GlobalStyle />
      <Header />

      <section id="home" style={{ width: '100%', height: '100vh' }} >
        <img src={bgImgage} alt="backgroundImage" style={{ width: '100%', height: '100%', display: "block", position: "fixed", top: "0", zIndex: "-1", filter: 'sepia(.7)' }} />
        <div id="imgTitle">
          <div style={{ fontSize: "2rem", color: "#FFF", textShadow: "3px 3px 1px rgba(0,0,0,0.3)" }}>
            <h1>Osnildo Reis</h1>
            <h1>Advocacia</h1>
            <p style={{ fontSize: "1.5rem", }}>Nosso grande diferencial é o </p>
            <p style={{ fontSize: "1.5rem", }}>atendimento acolhedor</p>
          </div>
        </div>
      </section>

      <Content />
      <Footer />

    </>
  );
}

