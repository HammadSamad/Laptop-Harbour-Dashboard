import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Layout } from './Layout/Layout'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Pages/Home';
import Product from './Pages/Product';
// import Categories from './Pages/Categories';
// import Brands from './Pages/Brands';

const router = createBrowserRouter([
  {
    path: "/", Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "product", Component: Product },
      // { path: "Categories", Component: Categories },
      // { path: "brands", Component: Brands },
      // { path: "notifications", Component: Notifications },
      // { path: "profile", Component: Profile },
      // { path: "specifications", Component: Specifications },
      // { path: "users", Component: Users }
      // {path: "settings", Component: Settings},
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Sidebar /> */}
    <RouterProvider router={router} />,

  </StrictMode>,
)
