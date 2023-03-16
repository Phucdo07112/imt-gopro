import About from './components/About';
import Blog from './components/Blog';
import Company from './components/Company';
import Copy from './components/Copy';
import Header from './components/Header';
import Home from './components/Home';
import Pages from './components/Pages';
import Shop from './components/Shop';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <Home />
      <About />
      <Company />
      <Pages />
      <Blog />
      <Shop />
      <Copy />
    </div>
  );
}

export default App;
