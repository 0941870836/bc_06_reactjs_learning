import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div>
        <Header />
        <Slider />
        <ProductList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
