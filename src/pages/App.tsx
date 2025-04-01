import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/Header";
import "../styles/App.css";
import Footer from "../components/Footer";
import Main from "../components/Main";

export default function App() {

  return (
    <Router>
      <div className="app-container">
        <div className="content">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </Router>
  );
}
