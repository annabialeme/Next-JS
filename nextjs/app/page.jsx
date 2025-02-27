import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function Home() {
  return (
  <div>
    <Header />
    <main>
    <h2>Meu primeiro aplicativo </h2>

  <aside>
    <Card title="Maxton hall" content="aqui"/>
    <Card title="Maxton hall" content="aqui" />
    <Card title="Maxton hall" content="aqui" />
      
  </aside>

        <div className="imagem">
          <img src='/maxton hall2.jpeg'></img>
        </div>
    </main>
    <Footer />
  </div>
  );
}