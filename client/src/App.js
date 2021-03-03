import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-5 pb-5">
        <Container>
          <Route path="/" component={Home} exact />
          <Route path="/product/:id" component={ProductPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
