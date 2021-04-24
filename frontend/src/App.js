import {BrowserRouter, Route, Link} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SignInScreen from './screens/SignInScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import CreateProductScreen from './screens/CreateProductsScreen';
import CartScreen from './screens/CartScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderSummaryScreen from "./screens/OrderSummaryScreen";
import ProfileScreen from './screens/ProfileScreen';

function App() {

  const userSignIn = useSelector(state => state.userSignIn);
  const userInfo = userSignIn && userSignIn.userInfo;

  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");

  }
  return (
    <BrowserRouter>
    <div className="grid-container">
            <header className="header">
                <div className="brand"> 
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                    <Link to="/">TechWorld</Link>
                </div>
                <div className="header-links">
                    <Link to='/cart'>&emsp;Cart</Link>
                    {
                      userInfo ? <Link to='/profile'>&emsp;{userInfo.name}&ensp;</Link> : <Link to='/signin'>&ensp;SignIn&emsp;</Link>
                    }
                    
                </div>
            </header>
            <aside className="sidebar">
                <h3>Shopping Categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                <ul>
                  <li><Link to="/category/Phones">Phones</Link></li>
                  <li><Link to="/category/Laptops">Laptops</Link></li>
                </ul>
            </aside>

            <main className="main">
                <div className="content">
                  <Route path='/products' component={CreateProductScreen} />
                  <Route path='/shipping' component={ShippingScreen} />
                  <Route path='/payment' component={PaymentScreen} />
                  <Route path='/placeorder' component={PlaceOrderScreen} />
                  <Route path='/signin' component={SignInScreen} />
                  <Route path='/register' component={RegisterScreen} />
                  <Route path="/product/:id" component={ProductScreen} />
                  <Route path="/cart/:id?" component={CartScreen} />
                  <Route path="/order/:id" component={OrderSummaryScreen} />
                  <Route path="/profile" component={ProfileScreen} />
                  <Route path="/category/:id" component={HomeScreen} />
                  <Route path="/" exact = {true} component={HomeScreen} />
                </div>
            </main>

            <footer className="footer">
            &copy;&nbsp;&nbsp;All Rights Reserved
            </footer>
        </div>
        </BrowserRouter>
  );
}

export default App;
