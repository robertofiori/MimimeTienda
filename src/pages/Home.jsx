// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import bannerVideo from "../assets/banner.mp4";

function Home() {
  return (
    <div>
      <Navbar />
      <header className="home-header">
        <video className="home-video" autoPlay loop muted playsInline>
          <source src={bannerVideo} type="video/mp4" />
          Tu navegador no soporta video en HTML5.
        </video>

        <div className="home-hero">
          <h1>ROPA PARA CHICOS TAN ÚNICA COMO ELLOS</h1>
          <p>Ropa hecha para que todos disfruten en cada hilo.</p>
          <button>Ir a comprar</button>
        </div>
      </header>

      <section className="categories">
        <h2>CATEGORÍAS</h2>
        {/* Acá podrías mapear categorías como Sale, Girl, Boy */}
      </section>

      <section className="styles-section">
        <h3>OFERTAS</h3>
        {/* Acá van las ProductCards */}
      </section>
    </div>
  );
}

export default Home;
