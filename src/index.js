import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/1.1',
    element: <h1>Category 1</h1>
  },
  {
    path: '/1.2',
    element: <h1>Category 2</h1>
  },
  {
    path: '/1.3',
    element: <h1>Category 3</h1>
  },
  {
    path: '/product/:id',
    element: <ProductDetail />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
