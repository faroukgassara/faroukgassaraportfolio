import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Home from './components/home/home';
import About from './components/about/about';
import Services from './components/services/services';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Pricing from './components/pricing/pricing';
import Testimonials from './components/testimonials/testimonials';
import Blog from './components/blog/blog';
import Contact from './components/contact/contact';
function App() {
  return (
    <>
    <Sidebar />
    <main className='main'>
      <Home />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
    </>
  );
}

export default App;
