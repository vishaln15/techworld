import {BrowserRouter, Route, Link} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
<<<<<<< HEAD
import SignInScreen from './screens/SignInScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import CreateProductScreen from './screens/CreateProductsScreen';
=======
import CartScreen from './screens/CartScreen';
>>>>>>> 340afbe8f7a01b0b0ba078f3b33fc3ec7220b3e8

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
<<<<<<< HEAD
                    <a href="cart">&emsp;Cart</a>
                    {
                      userInfo ? <Link to='/profile'>&emsp;{userInfo.name}&ensp;</Link> : <Link to='/signin'>&ensp;SignIn&emsp;</Link>
                    }
                    
=======
                    <Link to="/cart">Cart</Link>
                    <a href="signin">&emsp;SignIn&emsp;</a>
>>>>>>> 340afbe8f7a01b0b0ba078f3b33fc3ec7220b3e8
                </div>
            </header>
            <aside className="sidebar">
                <h3>Shopping Categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                <ul>
                    <li><a href="index.html">Pants</a></li>
                    <li><a href="index.html">Shirts</a></li>
                </ul>
            </aside>

            <main className="main">
                <div className="content">
                  <Route path='/products' component={CreateProductScreen} />
                  <Route path='/signin' component={SignInScreen} />
                  <Route path='/register' component={RegisterScreen} />
                  <Route path="/product/:id" component={ProductScreen} />
                  <Route path="/cart/:id?" component={CartScreen} />
                  <Route path="/" exact = {true} component={HomeScreen} />
                
                </div>
            </main>

            <footer className="footer">
<<<<<<< HEAD
                All Rights Reserved
                <Link to="/products">Click me</Link>
=======
              &copy;&nbsp;&nbsp;All Rights Reserved
>>>>>>> 340afbe8f7a01b0b0ba078f3b33fc3ec7220b3e8
            </footer>
        </div>
        </BrowserRouter>
  );
}

export default App;
