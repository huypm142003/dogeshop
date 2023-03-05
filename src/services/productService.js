import api from "./api";

const list = () => api.get(api.url.product).then((response) => response.data);

const get = (id) =>
  api.get(`${api.url.product}/${id}`).then((response) => response.data);
  
const create = (data) => {
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }
  return api
    .post(api.url.product, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
};

const update = (id, data) => {
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }
  return api
    .post(`${api.url.product}/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
};
const remove = (id) =>
  api.delete(`${api.url.product}/${id}`).then((response) => response.data);

const search = (keyword) =>
  api
    .get(`${api.url.product}/search/${keyword}`)
    .then((response) => response.data);

const filterByType = (typeId) =>
  api
    .get(`${api.url.product}/filterByType/${typeId}`)
    .then((response) => response.data);

const filterByIsFeatured = (isFeatured) =>
  api
    .get(`${api.url.product}/filterByIsFeatured/${isFeatured}`)
    .then((response) => response.data);

const filterByIsBestSeller = (isBestSeller) =>
  api
    .get(`${api.url.product}/filterByIsBestSeller/${isBestSeller}`)
    .then((response) => response.data);

//filter by price with min and max, max is optional
const filterByPrice = (min, max) => {
  if (max !== undefined) {
    return api
      .get(`${api.url.product}/filterByPrice/${min}-${max}`)
      .then((response) => response.data);
  } else {
    return api
      .get(`${api.url.product}/filterByPrice/${min}`)
      .then((response) => response.data);
  }
};

const productServices = {
  list,
  get,
  create,
  update,
  remove,
  filterByType,
  filterByIsFeatured,
  filterByIsBestSeller,
  search,
  filterByPrice,
};

export default productServices;
