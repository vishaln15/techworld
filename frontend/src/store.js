import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { productDetailsReducer, productListReducer, productSaveReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';
import { userRegisterReducer, userSignInReducer } from './reducers/userReducers';
import Cookie from 'js-cookie';
import { cartReducer } from './reducers/cartReducers';

const userInfo = Cookie.getJSON('userInfo') || null;

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    userSignIn: userSignInReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer,
    cart: cartReducer
})

const cartItems = Cookie.getJSON('cartItems')|| [];

const initialState = {cart:{cartItems}, userSignIn : userInfo};


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;