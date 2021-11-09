import "./App.css";
import "./Login.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main.js";
// import Modal from "./Modal.js";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
