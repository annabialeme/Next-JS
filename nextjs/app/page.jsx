import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer'

export default function Home() {
  return (
  <div>
    <Header />
    <main>
      <h2>Meu primeiro aplicativo </h2>
      <Card />
      <Card />
      <Card />
      <aside>
        <div class="imagem">
          <img src='/maxton hall2.jpeg'></img>
        </div>
      </aside>
    </main>
    <Footer />
  </div>
  );
}