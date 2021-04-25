import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { productDeleteReducer, productDetailsReducer, productListReducer, productSaveReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';
import { userRegisterReducer, userSignInReducer, userUpdateReducer } from './reducers/userReducers';
import Cookie from 'js-cookie';
import { cartReducer } from './reducers/cartReducers';
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, myOrderListReducer } from './reducers/orderReducers';

const userInfo = Cookie.getJSON('userInfo') || null;
const cartItems = Cookie.getJSON('cartItems') || [];

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    userSignIn: userSignInReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer,
    cart: cartReducer,
    productDelete: productDeleteReducer,
    orderCreate: orderCreateReducer,
    orderPay: orderPayReducer,
    orderDetails: orderDetailsReducer,
    userUpdate: userUpdateReducer,
    myOrderList: myOrderListReducer
});

const initialState = { cart: { cartItems, shipping: {}, payment: {} }, userSignIn : {userInfo} };

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;