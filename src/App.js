import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { Game } from "./pages/Game";
import { Home } from "./pages/Home";

import './styles/global.scss'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="game/:id" element={<Game />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>

  );

}

export default App;