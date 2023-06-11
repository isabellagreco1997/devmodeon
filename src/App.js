import logo from './logo.svg';
import Header from './components/Header'
import Banner from './components/Banner';
import ResourcesSection from './components/ResourcesSection'
import About from './components/About';
import './App.css';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
// import { GoogleFontLoader } from 'react-google-font-loader';


function App() {
  return (
    <div className="App">

{/* <Header />
<Banner />
<ResourcesSection />
<About />
<Footer /> */}
      <LandingPage />
    </div>
  );
}

export default App;
