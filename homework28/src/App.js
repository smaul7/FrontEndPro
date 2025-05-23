import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { SmilesProvider } from "./context/SmilesContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Todo from "./pages/Todo";
import "./styles/emojiStyles.css";

function App() {
  return (
    <ThemeProvider>
      <SmilesProvider>
        <Router>
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/about" element={<About />} />
              <Route path="/todo" element={<Todo />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </SmilesProvider>
    </ThemeProvider>
  );
}

export default App;
