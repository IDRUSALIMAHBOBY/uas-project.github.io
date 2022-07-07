import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Navbar from "./componen/navbar";
import Footer from "./componen/footer";
import Article from "./componen/article";
import Pagination from "./componen/pagination"




function App() {
  return (
    <>
    <Navbar />
    <Article />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="add" element={<AddProduct/>}/>
        <Route path="edit/:id" element={<EditProduct/>}/>
        
      </Routes>
    </BrowserRouter>
    <Pagination />  
    <Footer />
    
    </>
  );
}

export default App;