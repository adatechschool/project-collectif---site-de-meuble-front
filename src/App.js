import "./App.css";
import "./Login.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main.js";
// import Modal from "./Modal.js";
import { useState } from "react";
import ModalDescription from "./Modal_description.js";


function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Header />
      <Main />
      <button onClick={() => setShow(true)}>Show Modal</button>
      
      {/* A laisser car relié à la page "modal.js qui est le template de notre modal" */}
      {/* <Modal onClose={() => setShow(false)} show={show} /> */}

      <ModalDescription onClose={() => setShow(false)} show={show} />
      <Footer />
    </div>
  );
}

export default App;
