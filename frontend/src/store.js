import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { productDetailsReducer, productListReducer, productSaveReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';
<<<<<<< HEAD
import { userRegisterReducer, userSignInReducer } from './reducers/userReducers';
import Cookie from 'js-cookie';

const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {userSignIn : userInfo};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    userSignIn: userSignInReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer
=======
import { cartReducer } from './reducers/cartReducers';
import Cookie from 'js-cookie';

const cartItems = Cookie.getJSON('cartItems')|| [];

const initialState = { cart:{cartItems} };
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
>>>>>>> 340afbe8f7a01b0b0ba078f3b33fc3ec7220b3e8
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;