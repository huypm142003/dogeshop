import {
  Home,
  ProductListContainer,
  ProductDetail,
  Blog,
  Contact,
  Cart,
  Search,
  Login,
  Register,
  NotFound,
  Purchase,
} from "./pages";

const routes = [
  {
    path: "",
    component: <Home />,
  },
  {
    path: "*",
    component: <NotFound />,
  },
  {
    path: "products",
    component: <ProductListContainer />,
  },
  {
    path: "products/:id",
    component: <ProductDetail />,
  },
  {
    path: "blogs",
    component: <Blog />,
  },
  {
    path: "contact",
    component: <Contact />,
  },
  {
    path: "cart",
    component: <Cart />,
  },
  {
    path: "search",
    component: <Search />,
  },
  {
    path: "login",
    component: <Login />,
  },
  {
    path: "register",
    component: <Register />,
  },
  {
    path: "purchase",
    component: <Purchase />,
  }
];

export default routes;
