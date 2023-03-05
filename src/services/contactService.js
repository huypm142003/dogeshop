import api from "./api";

const list = () =>  api.get(api.url.contact).then((response) => response.data);
const get = (id) => api.get(`${api.url.contact}/${id}`).then((response) => response.data);
const create = (data) => api.post(api.url.contact, data).then((response) => response.data);
const update = (id, data) => api.put(`${api.url.contact}/${id}`, data).then((response) => response.data);
const remove = (id) => api.delete(`${api.url.contact}/${id}`).then((response) => response.data);

const contactServices = {
    list,
    get,
    create,
    update,
    remove
}

export default contactServices;