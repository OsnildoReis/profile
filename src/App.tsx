import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { HomeLogo } from './components/HomeLogo';

export function App() {


  return (
    <>
      <GlobalStyle />
      <Header />

      <section id="home" style={{ width: '100%', height: '100vh', backgroundColor: "#113a3f" }} >
        <div
          style={{width: '100%', height: '100%', display:'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'}}
        >
          <HomeLogo />
        </div>
      </section>

      <Content />
      <Footer />
    </>
  );
}
