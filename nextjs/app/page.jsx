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
    </main>
    <Footer />
  </div>
  );
}