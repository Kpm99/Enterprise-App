import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/header";
import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import Home from "./components/Home";
import Footer from "./components/footer";
import "./styles/footer.scss"
import "./styles/contact.scss"
import "./styles/mediaquery.scss"
import Services from "./components/service";
import Contact from "./components/contact";
function App() {
  return (
   
    <Router>
       <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
