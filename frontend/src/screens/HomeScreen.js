import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen (props){

    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const category = props.match.params.id ? props.match.params.id : '';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts(category));
    }, [category, dispatch])

    return (
        <>
        { category ? <h2 className="category">{category}</h2> : <h2 className="category">All Products</h2>}
        {loading ? <div>Loading...</div> :
        error ? <div>{error}</div> :
        <ul className="products">
            {products &&
                products.map(product =>
                <li key={product._id}>
                    <div className="product">
                        <Link to={'/product/' + product._id}>
                        <img className="product-image" src={product.image} alt="iPhone12" />
                        </Link>
                        <div className="product-name">
                            <Link to={'/product/' + product._id}>{product.name}</Link>
                        </div>
                        <div className="product-brand">{product.brand}</div>
                        <div className="product-price">₹{product.price}</div>
                        <div className="product-rating">{product.rating} Stars</div>
                    </div>
                </li>)
            }              
        </ul>}
        </>
    )
}

export default HomeScreen;