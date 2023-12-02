import './App.css';
import { Home } from './Components/Home';
import { Inge } from './Components/Inge';
import { Navbar } from './Components/Navbar';
import { Welcome } from './Components/Welcome';
import { Grid } from './Components/Grid';
import { Testimonial } from './Components/Testimonial';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Home />
    <Welcome />
    <Inge />
   <Grid />
   <Testimonial />
   <Contact />
   <Footer />
    </div>
  );
}

export default App;
