import Header from './components/header';
import Footer from './components/footer';
import Service from './section/service';
import Banner from './section/banner';
import About from './section/about';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
