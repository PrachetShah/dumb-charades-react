import "./App.css";
import NavbarComponent from "./components/Navbar.component";
import GameForm from "./components/GameForm.component";
import Footer from "./components/Footer.component";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div>
      <NavbarComponent />
      <GameForm />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
