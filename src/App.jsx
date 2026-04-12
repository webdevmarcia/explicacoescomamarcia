import Header from "./components/Header";
import Hero from "./sections/Hero";
import Servicos from "./sections/Servicos";
import Contatos from "./sections/Contatos";
import Footer from "./components/Footer";

import "./index.css";

function App() {
  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto px-6 space-y-32">
        <Hero />
        <Servicos />
        <Contatos />
      </main>

      <Footer />
    </>
  );
}

export default App;
