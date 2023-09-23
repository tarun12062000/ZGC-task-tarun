import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home1 from './component/Home1';
import Home2 from './component/Home2';
import Home3 from './component/Home3';
import Service from './component/Service';
import Card from './component/Card';
import Ads from './component/Ads';

import Footer from './component/Footer';
import Home4 from './component/Home4';
import Card2 from './component/Card2';
import Info from './component/Info';

function App() {
  return (
    <>
    <Navbar/>
    <Home1 />
    <Home2 />
    <Home3 />
    <Service />
    <Card />
    <Home4 />
    <Card2 />
    <Info />
    <Ads />
    <Footer />
    </>
  );
}

export default App;
