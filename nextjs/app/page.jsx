import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function Home() {
  return (
  <div>
    <Header />
    <main>
  
  <aside>
  <Card title="Primeira conversa" content="aqui"/>
      <Card title="Primeiro encontro" content="aqui" />
      <Card title="Coisas que me lembram você" content="aqui" />

      <div className= "imagem">
        <img src = "/maxton hall2.jpeg"></img>
        </div>
  </aside>
      
      
    </main>
    <Footer />
  </div>
  );
}