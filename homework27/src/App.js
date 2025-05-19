import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EmojiCounter from "./components/EmojiCounter";
import { ThemeProvider } from "./context/ThemeContext";
import { SmilesProvider } from "./context/SmilesContext";
import "./styles/emojiStyles.css";

export default function App() {
  return (
    <ThemeProvider>
      <SmilesProvider>
       <div className="app-container">
         <Header />
         <EmojiCounter />
         <Footer />
       </div>
      </SmilesProvider>
    </ThemeProvider>
  );
}
