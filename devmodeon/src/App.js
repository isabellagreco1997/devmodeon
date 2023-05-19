import logo from './logo.svg';
import Header from './components/Header'
import Banner from './components/Banner';
import ResourcesSection from './components/ResourcesSection'
import About from './components/About';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
<Header />
<Banner />
<ResourcesSection />
<About />
<Footer />
      
    </div>
  );
}

export default App;
