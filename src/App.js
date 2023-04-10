import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Book from "./components/Book";
import Order from "./components/Order";
import Login from "./components/Login";
import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "../src/context/alertContext";
import Alert from "./components/Alert";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <AlertProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/booking" element={<Book />} />
            <Route path="/order" element={<Order />} />
            <Route path="/login" element={<Login />} />
          </Routes>

          <Footer />
          <Alert />
        </AlertProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
