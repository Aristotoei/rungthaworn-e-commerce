import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header';
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
  },
  {
    path: '/contact',
    element: <h1>GitHub : Aristotoei<br></br>Email : thavornsan@outlook.com</h1>
  },
  {
    path: '*',
    element: <h1>under development</h1>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
