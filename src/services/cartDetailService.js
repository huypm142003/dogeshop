import api from "./api";

const list = () =>  api.get(api.url.cartDetail).then((response) => response.data);
const get = (id) => api.get(`${api.url.cartDetail}/${id}`).then((response) => response.data);
const create = (data) => api.post(api.url.cartDetail, data).then((response) => response.data);
const update = (id, data) => api.put(`${api.url.cartDetail}/${id}`, data).then((response) => response.data);
const remove = (id) => api.delete(`${api.url.cartDetail}/${id}`).then((response) => response.data);

const cartDetailServices = {
    list,
    get,
    create,
    update,
    remove
}

export default cartDetailServices;