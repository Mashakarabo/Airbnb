import Navigation from './components/navigation'
import Home from './Pages/Home'
import './App.css';
import HomeSlider from './components/homeslider';
import SitesCont from './components/sitescont.js';

function App() {
  return (
    <div className="App">
        <Navigation/>
        <Home />
        <HomeSlider/>
        <SitesCont/>
    </div>
  );
}

export default App;
