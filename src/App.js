import MyComponent from "./MyComponent";
import MyComponentX from "./MyComponentX";
import ContactList from "./ContactList";
import Greetings from "./component/Greetings";
import Calculator from "./simplecalculator/Calculator";
import Componentlifecycle from "./componentlifecycle/Componentlifecycle";
import Componentlifecycle2 from "./componentlifecycle/Componentlifecycle2";
import Products from "./component/Products";
import Productfire from "./component/Productfire";
import Soap from "./soap/Soap";
import Example from "./boottsrap/boot";
import Navigation from './soap/Navigtion/Navigation';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from "./Home/Home";
import Contact from "./Contact";
import Homepage from "./pages/homepage/Homepage";
import About from "./pages/homepage/about/About";

import Footer from "./pages/homepage/footer/Footer";
import Product from "./pages/homepage/product/Product";

import Home1 from "./project/home/Home1";
import Footer1 from "./project/footer/Footer1";
import About1 from "./project/about/About1";
import Product1 from "./project/product/Product1";
import NavigationBar from "./project/navigation/NavigationBar";
import Kids from "./project/product/Kids";
import Mens from "./project/product/Mens";
import Women from "./project/product/women";
import User from "./project/product/User";
import Map from "./project/map/Map";
import Cart from "./project/cart/Cart";
import Image from "./project/product/Image";
function App() {
  return (
    <div className="App">
    
    {/*}  <h1>haiii.... welcome!</h1>
  <h2>welcome to react js</h2>*/}
      {/* <MyComponent/>
     <MyComponent/>
     <MyComponent/>
     <MyComponent/>

     <MyComponentX/>
     <MyComponentX/>
  <MyComponentX/>*/}

 {/* <Calculator/>
{/* <Example/>*/}
 {/*<ContactList />*/}
      {/*<Greetings/>
      <Componentlifecycle/>
      <Componentlifecycle2/>*/}
     {/*} <Products/>*/}
     {/*} <Productfire/>*/}

     {/*<Navigation/>*/}
    {/*<Soap/>*/}
   {/* <Navigation/>
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/products" element={<Product/>}/>
    <Route path="/about" element={<About/>}/>
</Routes>
    </BrowserRouter>
      
  {/*<Footer/>*/}
{/*<Home/>*/}
<NavigationBar/>

<BrowserRouter>
    <Routes>
    <Route path="/home" element={<Home1/>}/>
    <Route path="/about" element={<About1/>}/>
    <Route path="/product" element={<Product1/>}/>
    <Route path="/kids" element={<Kids/>}/>
    <Route path="/mens" element={<Mens/>}/>
    <Route path="/womens" element={<Women/>}/>
    <Route path="/user" element={<User/>}/>
    <Route path="/map" element={<Map/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/image" element={<Image/>}/>
</Routes>
</BrowserRouter>
<Footer1 />
    </div>
  );
}

export default App;
