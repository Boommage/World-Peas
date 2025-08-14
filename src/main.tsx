import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx'

import Home from './components/Home.tsx';
import Shop from './components/Shop.tsx';
import Cart from './components/Cart.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import Thanks from './components/Thanks.tsx';

const convexClient = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { index: true, element: <Home/> },
      { path: "shop", element: <Shop/> },
      { path: "cart", element: <Cart/> },
      { path: "thanks", element: <Thanks/> },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConvexProvider client={convexClient}>
      <RouterProvider router={router}/>
    </ConvexProvider>
  </StrictMode>,
)
