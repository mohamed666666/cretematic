import Header from "./componants/header/header";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProdDetail from "./componants/productDetail/prodDetail";
import Footer from "./componants/footer/footer";
import Home from "./componants/Home/Home";
import Allproducts from "./componants/allproducts/allproducts";
import ContpageComp from "./componants/Contpage/Contpage";
import Aboutpage from "./componants/AboutPage/Aboutpage";
function App() {
  return (
    <div className="App">
   
      
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        {/* <Route path="/productdetali/:id" element={<ProdDetail/>} />*/} 
          <Route path="/solutions" element={<Allproducts/>}/>
          <Route path="/About" element={<Aboutpage/>}/>
          <Route path="/Contact" element={<ContpageComp/>}/>
        </Routes>
        
        <Footer />
   
    </div>
  );
}

export default App;
