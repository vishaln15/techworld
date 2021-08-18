# TechWorld

## Description

TechWorld, inspired by Amazon Website is a MERN Stack web application built to mimick the functionalities of an electronic store. 

![Demo]('TechWorldDemo.gif')

## Functionalities

1. Clear distinction between users and admin is established. 
2. Users can view, choose and order products to an address. Order history is stored and can be viewed in the profile page. All orders have unique order id.
3. Home page has list of all products available and also contains a sidebar with product types including smartphones, laptops, watch and audio devices. Each product type when clicked opens a page with only that product type. 
4. Product page has 3 vertical fields including product image, product description and product stock with add to cart button. 
5. Cart page uses cookies and stores the chosen products with the quantity. Since it uses cookies, after the end of the browser session the cookies are destroyed and the cart data resets. 
6. Shipping page requires address input and payment method. 
7. Order page automatically creates a unique order id for every order. 
8. Users and admin have profile page to edit name, email and password. 
9. Every signin is verified using JSON Web Token (JWT).
10. Admin has super user benefits to add new products, remove and edit existing products.  

## Properties used

> - React: Components, Props, Events, Hooks, Router, Axios
> - Redux: Store, Reducers, Actions
> - Node & Express: Web API,  JWT
> - MongoDB: Mongoose
> - Development: ESLint, Babel, Git, GitHub

## Run locally

1. Clone repository

        $ git clone git@github.com:vishaln15/techworld.git
        $ cd techworld/

2. Setup MongoDB Compass on respective Operating System

3. Run Backend

        $ npm install
        $ npm start

4. Run frontend on a new terminal

        $ cd frontend/
        $ npm install
        $ npm start

5. Populate pre-existing admin and products

    - Install JSON formatter extension on browser for better view of JSON objects.
    - Run this on browser: http://localhost:5000/api/users/createAdmin
    - This returns and renders an admin email and password object.
    - Run this on browser: http://localhost:5000/api/products
    - Creates a sample product in MongoDB database. 
    - Additionally, import the **products.json** file in MongoDB Compass to directly populate the products.

6. Admin Login

    - Run http://localhost:3000/signin
    - Enter admin email and password and click signin. 


## Known Issues

- Signout and View order pages update only after refreshing the page once.

## Future Work

- Add file uploader api to upload image of new product.
- Store data in S3 and deploy on Heroku. 
- Add searchbar to search through products.

## Credits

Adapted from https://github.com/basir/node-react-ecommerce . Huge thanks to **[Bassir Jafarzadeh](https://github.com/basir)** whose **[YouTube video](https://www.youtube.com/watch?v=Fy9SdZLBTOo)** helped us understand and implement every step through the project. 