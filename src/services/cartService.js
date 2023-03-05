import api from "./api";

const list = () =>  api.get(api.url.cart).then((response) => response.data);
const get = (id) => api.get(`${api.url.cart}/${id}`).then((response) => response.data);
const create = (data) => api.post(api.url.cart, data).then((response) => response.data);
const update = (id, data) => api.put(`${api.url.cart}/${id}`, data).then((response) => response.data);
const remove = (id) => api.delete(`${api.url.cart}/${id}`).then((response) => response.data);

const cartServices = {
    list,
    get,
    create,
    update,
    remove
}

export default cartServices;