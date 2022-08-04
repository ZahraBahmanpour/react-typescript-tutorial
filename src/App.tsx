import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import StoreItemDetails from "./pages/StoreItemDetails";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="store" element={<Store />} />
          <Route path="store/:productId" element={<StoreItemDetails />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
