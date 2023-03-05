import api from "./api";

const list = () =>  api.get(api.url.newsletter).then((response) => response.data);
const get = (id) => api.get(`${api.url.newsletter}/${id}`).then((response) => response.data);
const create = (data) => api.post(api.url.newsletter, data).then((response) => response.data);
const update = (id, data) => api.put(`${api.url.newsletter}/${id}`, data).then((response) => response.data);
const remove = (id) => api.delete(`${api.url.newsletter}/${id}`).then((response) => response.data);

const newsletterServices = {
    list,
    get,
    create,
    update,
    remove
}

export default newsletterServices;