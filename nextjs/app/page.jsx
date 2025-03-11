import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function Home() {
  return (
  <div>
    <Header />
    <main>
  
  <div class = "card">
  <Card title="Primeira conversa" content="Lembro do primeiro dia que começamos a conversar, foi logo após nos encontramos em uma festa, eu nunca irei me esquecer, pois você mostrou que tinha gostado da minha companhia."/>

      <Card title="Primeiro encontro" content="Nosso primeiro encontro oficial foi inesquecível, você fez de tudo por mim e me levou até o portão da minha casa, fazendo com que eu me sentisse segura." />

      <Card title="O que eu penso sobre você" content="Toda vez que eu penso em você, eu fico com um sorriso bobo, talvez por estar vivendo com uma pessoa que me trata com carinho e que me faz feliz, pela primeira vez alguém mostra que realmente me quer." />
  </div>
    
    <div class ="imagem">
      <img src = "/maxton hall2.jpeg"></img>
      </div>

    </main>
    <Footer />
  </div>
  );
}