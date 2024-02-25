import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Pages/Home.jsx';
import LoginRegister from './Pages/LoginRegister.jsx';
import AddProducts from './Pages/AddProducts.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import SingleBrandProducts from './Pages/SingleBrandProducts.jsx';
import ProductDetails from './Pages/ProductDetails.jsx';
import Cart from './Pages/Cart.jsx';
import UpdateProductData from './Pages/UpdateProductData.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/my-account',
        element: <LoginRegister></LoginRegister>
      },
      {
        path: '/add-products',
        element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
      },
      {
        path: '/brand/:brandName',
        element: <SingleBrandProducts></SingleBrandProducts>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brandName}`)
      },
      {
        path: '/brand/:brandName/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brandName}/${params.id}`)
      },
      {
        path: '/cart',
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/cart-products')
      },
      {
        path: '/update-product-data/:id',
        element: <PrivateRoute><UpdateProductData></UpdateProductData></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/products')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
