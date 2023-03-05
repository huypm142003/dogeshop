import api from "./api";

const list = () =>  api.get(api.url.type).then((response) => response.data);
const get = (id) => api.get(`${api.url.type}/${id}`).then((response) => response.data);
const create = (data) => api.post(api.url.type, data).then((response) => response.data);
const update = (id, data) => api.put(`${api.url.type}/${id}`, data).then((response) => response.data);
const remove = (id) => api.delete(`${api.url.type}/${id}`).then((response) => response.data);

const typeServices = {
    list,
    get,
    create,
    update,
    remove
}

export default typeServices;