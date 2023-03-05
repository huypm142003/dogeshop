import axios from "axios";

const url = {
  baseUrl: "https://doge-shop.000webhostapp.com/public/api",
  user: "/users",
  type: "/types",
  review: "/reviews",
  product: "/products",
  newsletter: "/newsletters",
  contact: "/contacts",
  cartDetail: "/cart-details",
  cart: "/carts",
  blog: "/blogs",
  banner: "/banners",
};

const instance = axios.create({
  baseURL: url.baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const api = {
  url,
  instance,
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
  patch: instance.patch,
};

export default api;
